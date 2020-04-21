from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        company.delete()

        return Response({'deleted': True})

@api_view(['GET', 'POST'])
def vacancy_by_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = VacancySerializer(company.vacancies.all(), many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def sorted_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:4]
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)
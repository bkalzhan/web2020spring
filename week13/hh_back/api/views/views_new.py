import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer, CompanyWithVacanciesSerializer

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)
        serializer = CompanySerializer(data = request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})



def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'vacancy post request'})


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        return JsonResponse(vacancy.vacancy_to_json())


def vacancy_by_company(request, company_id):
    try:
        company=Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    vacancies = company.vacancy_set.all()
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
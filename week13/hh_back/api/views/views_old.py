from django.http.response import JsonResponse

from api.models import Company, Vacancy

# def company_list(request):
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         companies_json = [company.company_to_json() for company in companies]
#         return JsonResponse(companies_json, safe=False)
#     elif request.method == 'POST':
#         return JsonResponse({'data': 'company post request'})
#
# def company_detail(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)})
#
#     if request.method == 'GET':
#         return JsonResponse(company.company_to_json())
#

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
        return JsonResponse({'error': str(e)}, safe=False)

    vacancies = company.vacancy_set.all()
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    if request.method == 'GET':
        return JsonResponse(vacancies_json, safe=False)

def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
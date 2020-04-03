from django.http.response import JsonResponse

from api.models import Company, Vacancy
def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.company_to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.company_to_json())

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.vacancy_to_json())

def vacancy_by_company(request, company_id):
    company=Company.objects.get(id=company_id)
    vacancies = company.vacancy_set.all()
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
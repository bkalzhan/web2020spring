from django.urls import path

from api.views import company_list, company_detail, vacancy_list, vacancy_detail, vacancy_by_company, top_ten

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>', company_detail),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>', vacancy_detail),
    path('companies/<int:company_id>/vacancies', vacancy_by_company ),
    path('vacancies/top_ten/', top_ten)
]
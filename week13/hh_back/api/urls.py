from django.urls import path

from api.views.views_old import company_list, company_detail, vacancy_list, vacancy_detail, vacancy_by_company, top_ten
from api.views.views_fbv import company_list

from api.views.views_generic import CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:company_id>', CompanyDetailAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>', VacancyDetailAPIView.as_view()),
    # path('companies/<int:company_id>/vacancies', vacancy_by_company ),
    # path('vacancies/top_ten/', top_ten)
]
from django.urls import path

from api.views.views_fbv import company_list, company_detail,vacancy_by_company, sorted_list
from api.views.views_cbv import VacancyListAPIView, VacancyyDetailAPIView
from api.views.views_generic import VacancyListAPIView, VacancyDetailAPIView, VacancySortedAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies', vacancy_by_company),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/sorted', VacancySortedAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    # path('vacancies/top_ten/', top_ten)
]
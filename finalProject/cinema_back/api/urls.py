from django.urls import path

from api.views import FilmListAPIView, FilmDetailAPIView, FilmSortedAPIView, SessionListAPIView, \
                      SessionDetailAPIView, HallListAPIView, HallDetailAPIView, sessions_by_film, hall_by_session
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('films/', FilmListAPIView.as_view()),
    path('films/<int:pk>/', FilmDetailAPIView.as_view()),
    path('films/sorted/', FilmSortedAPIView.as_view()),
    # path('companies/<int:id>/vacancies', vacancy_by_company),
    path('films/<int:id>/sessions', sessions_by_film),

    path('sessions/', SessionListAPIView.as_view()),
    path('sessions/<int:pk>/', SessionDetailAPIView.as_view()),

    path('sessions/<int:id>/hall', hall_by_session),
    # path('vacancies/top_ten/', top_ten)
    path('halls/', HallListAPIView.as_view()),
    path('halls/<int:pk>/', HallDetailAPIView.as_view() )
]
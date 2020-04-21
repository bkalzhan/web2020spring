from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Company, Vacancy

from api.serializers import VacancySerializer, CompanyWithVacanciesSerializer

class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancySortedAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:5]
    serializer_class = VacancySerializer
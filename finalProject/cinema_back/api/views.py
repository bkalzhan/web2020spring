from django.shortcuts import render
from rest_framework import generics

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Film, Session, Hall

from api.serializers import FilmSerializer, FilmWithSessionsSerializer, SessionSerializer, \
                            SessionWithHallsSerializer, HallSerializer

class FilmListAPIView(generics.ListAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


class FilmDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

class FilmSortedAPIView(generics.ListAPIView):
    queryset = Film.objects.order_by('-rating')[:3]
    serializer_class = FilmSerializer

@api_view(['GET', 'POST'])
def sessions_by_film(request, id):
    try:
        film = Film.objects.get(id=id)
    except Film.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = SessionSerializer(film.sessions.all(), many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SessionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def hall_by_session(request, id):
    try:
        session = Session.objects.get(id=id)
    except Session.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = HallSerializer(session.halls.all(), many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = HallSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SessionListAPIView(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class SessionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class HallListAPIView(generics.ListCreateAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer

class HallDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
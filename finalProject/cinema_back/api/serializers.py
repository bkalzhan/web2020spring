from rest_framework import serializers

from api.models import Film, Session, Hall

class FilmSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    rating = serializers.FloatField()
    description = serializers.CharField()
    country = serializers.CharField()
    year = serializers.IntegerField()
    genre = serializers.CharField()
    imgUrl = serializers.CharField()

    def create(self, validated_data):
        film = Film.objects.create(title=validated_data.get('tile'), rating=validated_data.get('rating') ,
                                         description=validated_data.get('description'), country=validated_data.get('country'),
                                         year=validated_data.get('year'), genre=validated_data.get('genre'), imgUrl = validated_data.get('imgUrl'))
        return film

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.description = validated_data.get('description', instance.description)
        instance.country = validated_data.get('country', instance.country)
        instance.year = validated_data.get('year', instance.year)
        instance.genre = validated_data.get('genre', instance.genre)
        instance.imgUrl = validated_data.get('imgUrl', instance.imgUrl)
        instance.save()
        return instance

class FilmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Film
        fields = ('id', 'title', 'rating','description', 'country', 'year', 'genre', 'imgUrl')

class SessionSerializer(serializers.ModelSerializer):

    film_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Session
        fields = ('id', 'time', 'price', 'film_id',)

class FilmWithSessionsSerializer(serializers.ModelSerializer):

    sessions = SessionSerializer(many=True, read_only=True)

    class Meta:
        model = Film
        fields = ('id', 'title', 'sessions')

class HallSerializer(serializers.ModelSerializer):

    session_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Hall
        fields = ('id', 'place', 'bought', 'session_id',)

class SessionWithHallsSerializer(serializers.ModelSerializer):

    halls = HallSerializer(many=True, read_only=True)

    class Meta:
        model = Session
        fields = ('id', 'time', 'halls')
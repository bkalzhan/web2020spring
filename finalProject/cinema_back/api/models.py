from django.db import models

class Film(models.Model):
    title = models.CharField(max_length=50)
    rating = models.FloatField(default=0)
    description = models.TextField(default='')
    country = models.CharField(max_length=50, default='')
    year = models.IntegerField()
    genre = models.CharField(max_length=50, default='')
    imgUrl = models.CharField(max_length=300, default='')

    class Meta:
        verbose_name = 'Film'
        verbose_name_plural = 'Films'

    def film_to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'rating': self.rating,
            'description': self.description,
            'country': self.country,
            'year': self.year,
            'genre': self.genre,
            'imgUrl': self.imgUrl
        }

class Session(models.Model):
    time = models.CharField(max_length=50)
    price = models.FloatField()
    film = models.ForeignKey(Film, on_delete=models.CASCADE, null=True, related_name="sessions")

    def __str__(self):
        return f'Session id={self.id}, time={self.time}, price={self.price}'

    def session_to_json(self):
        return {
            'id': self.id,
            'time': self.time,
            'price':self.price,
        }

class Hall(models.Model):
    place = models.IntegerField()
    bought = models.BooleanField(default=False)
    session = models.ForeignKey(Session, on_delete=models.CASCADE, null=True, related_name="halls")

    def __str__(self):
        return f'place={self.place}'

    def session_to_json(self):
        return {
            'id': self.id,
            'place': self.place,
            'bought':self.bought,
        }
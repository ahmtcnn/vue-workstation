from django.db import models

# Create your models here.

class Book(models.Model):
    name    = models.CharField(max_length=50)
    author  = models.CharField(max_length=50)
    photo   = models.ImageField(upload_to='books')
    rate    = models.IntegerField()
    date    = models.DateField()

    def __str__(self):
        return self.name + " - " + self.author
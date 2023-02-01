from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator,MaxValueValidator


# Create your models here.
class Products(models.Model):
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=200)
    price=models.PositiveIntegerField()
    category=models.CharField(max_length=200)
    image=models.ImageField(upload_to="images")

class Reviews(models.Model):
    comment=models.CharField(max_length=120)
    rating=models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    product=models.ForeignKey(Products,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)



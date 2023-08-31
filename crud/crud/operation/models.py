from django.db import models

# Create your models here.

class Employee(models.Model):
    nameM = models.CharField(max_length=300)
    emailM = models.CharField(max_length=200)
    addressM = models.CharField(max_length=300)
    phoneM = models.CharField(max_length=200)
    # actionM = models.CharField(max_length=20,default=True)
    # actionM = models.CharField

    class Meta:
        db_table = 'employee_tb'

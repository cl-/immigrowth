from django.db import models
import json

class Test(models.Model):
  f3 = models.FloatField()
  f4 = models.TextField(max_length=200)
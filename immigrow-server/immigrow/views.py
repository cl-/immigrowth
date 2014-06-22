from django.shortcuts import render
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404
from django.shortcuts import redirect
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django import forms
import models
from django.core import serializers

def api(request):
  """ Devices """
  if request.GET.get('id'):
    id=request.GET['id']
  else:
    id=0

  return HttpResponse(id)
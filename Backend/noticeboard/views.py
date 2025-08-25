from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from .models import Notice  # make sure this model exists

def get_notices(request):
    notices = list(Notice.objects.values())  # returns list of dicts
    return JsonResponse(notices, safe=False)
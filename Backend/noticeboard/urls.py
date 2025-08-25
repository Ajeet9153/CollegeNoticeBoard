
from django.urls import path
from . import views

urlpatterns = [
    path('notices/', views.get_notices, name='get_notices'),
]

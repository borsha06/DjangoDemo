from django.urls import path
from .views import Main

urlpatterns = [
    path('uploads/', Main.as_view(), name='main')
]
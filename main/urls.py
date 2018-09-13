from django.urls import path
from .views import Main, UploadAPI

urlpatterns = [
    path('uploads/', Main.as_view(), name='main'),
    path('api/uploads/', UploadAPI.as_view(), name='upload'),
]

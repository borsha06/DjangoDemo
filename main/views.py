from django.shortcuts import render
from django.views import View
from rest_framework.response import Response
from rest_framework.views import APIView


class Main(View):
    def get(self, request):
        a = "hello django"
        b = "base2.html"
        lists = [1, 2, 3, 4, 5]
        return render(request, 'base.html', {'message': a, 'value': b, 'list': lists})

    def post(self, request):
        return render(request, 'base.html', {})


class UploadAPI(APIView):
    def get(self, request, format=None, *args, **kwargs):
        return Response()

    def post(self, request, format=None, *args, **kwargs):
        print(request.data)
        return Response(data={})

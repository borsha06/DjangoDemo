from django.shortcuts import render
from django.views import View


class Main(View):
    def get(self, request):
        a = "hello django"
        b = "base2.html"
        lists = [1,2,3,4,5]
        return render(request, 'base.html', {'message': a, 'value': b, 'list': lists})

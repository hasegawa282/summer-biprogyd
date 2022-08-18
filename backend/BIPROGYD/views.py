from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BIPROGYDSerializer
from .models import BIPROGYD

# Create your views here.

class BIPROGYDView(viewsets.ModelViewSet):
    serializer_class = BIPROGYDSerializer
    queryset = BIPROGYD.objects.all()
from rest_framework import serializers
from .models import BIPROGYD

class BIPROGYDSerializer(serializers.ModelSerializer):
    class Meta:
        model = BIPROGYD
        fields = ('id', 'title', 'description', 'completed')
from django.contrib import admin
from .models import BIPROGYD

class BIPROGYDAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(BIPROGYD, BIPROGYDAdmin)
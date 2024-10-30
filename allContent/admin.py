from django.contrib import admin

# Register your models here.

from .models import Work, Experience

admin.site.register(Work)
admin.site.register(Experience)
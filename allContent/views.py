from django.shortcuts import render
from allContent.models import Work , Experience

# Create your views here.

def homeRender(request):
    works = Work.objects.all()
    experiences = Experience.objects.all()
    return render(request,"allTemplates/home.html",{'works': works , 'experiences': experiences})
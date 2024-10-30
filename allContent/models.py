from django.db import models

# Create your models here.


class Work(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='')

    def __str__(self):
        return self.title
    
class Experience(models.Model):
    role = models.CharField(max_length=100)
    start_year = models.IntegerField()
    end_year = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return f"{self.role} ({self.start_year}-{self.end_year})"
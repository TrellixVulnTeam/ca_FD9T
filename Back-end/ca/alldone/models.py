from django.db import models

# Create your models here.

class users(models.Model):

    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=30)
    ent_name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField()
    is_client = models.BooleanField()
    address = models.CharField(max_length=300)
    city = models.CharField(max_length=30)
    phone = models.IntegerField()
    birth_date = models.DateTimeField(blank=True, null=True)
    fourth_date = models.DateTimeField(blank=True, null=True)
    about_me = models.TextField(max_length=500, blank=True, null=True)
    coorlat = models.FloatField(blank=True, null=True)
    coorlng = models.FloatField(blank=True, null=True)
    competences = models.TextField(max_length=500, blank=True, null=True)
    certifier = models.BooleanField(blank=True, null=True)

class jobs(models.Model):

    name = models.CharField(max_length=15)
    nb_users = models.IntegerField()
    competences = models.TextField(max_length=500, blank=True, null=True)
    about_job = models.TextField(max_length=500, blank=True, null=True)
    horaire = models.TimeField()
    type_job = models.CharField(max_length=15)
    user = models.ForeignKey(users, on_delete=models.CASCADE)

class postulant(models.Model):

    job = models.ForeignKey(jobs, on_delete=models.CASCADE)
    user = models.ForeignKey(users, on_delete=models.CASCADE)
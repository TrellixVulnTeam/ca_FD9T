from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),

    path('users/', views.Users, name="users"),
    path('users/is_exist', views.IsExist, name="is_exist"),
    path('users/add_users', views.AddUsers, name="add_Users"),

    path('jobs/', views.Jobs, name="jobs"),
    path('jobs/create_job', views.CreateJob, name="create_job"),
    path('jobs/list_job', views.ListJob, name="list_job"),
    path('jobs/my_job', views.MyJob, name="my_job"),

    path('postulant/', views.Postulant, name="postulant"),
    path('postulant/create_postulant', views.CreatePostulant, name="create_postulant"),
]
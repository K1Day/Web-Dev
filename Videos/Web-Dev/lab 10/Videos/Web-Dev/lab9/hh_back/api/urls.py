from django.urls import path
from .views import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, top_ten_vacancies
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('companies/', views.company_list, name='company_list'),
    path('companies/<int:id>/', views.company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
    path('api-token-auth/', obtain_auth_token),
]

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework import status


@api_view(['GET'])
def company_detail(request, id):
    company = Company.objects.get(id=id)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        salary = request.query_params.get('salary')
        vacancies = Vacancy.objects.all()
        if salary is not None:
            try: 
                salary_float = float(salary)
                vacancies = vacancies.filter(salary = salary_float)
            except ValueError:
                return Response(
                    {"error": "Error"},
                    status = status.HTTP_400_BAD_REQUEST
                )
        
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Vacancy created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def vacancy_detail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('salary')[:5]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Success"}, status=status.HTTP_201_CREATED) # type: ignore
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # type: ignore

@api_view(['GET', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response({"message": "Success", "data": serializer.data}, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        company.delete()
        return Response({"message": "Company deleted successfully."}, status=status.HTTP_204_NO_CONTENT)



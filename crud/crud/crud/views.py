from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.core import serializers

from operation.models import Employee

def index(request):
    return render(request,'index.html')

def save_index(request):
    msg = ''
    if request.method == 'POST':
        nameP = request.POST['nameA']
        emailP = request.POST['emailA']
        addressP = request.POST['adressA']
        phoneP = request.POST['phoneA']

        exist = Employee.objects.filter(emailM = emailP).exists()

        if not exist:
            employee=Employee(
                nameM = nameP,
                emailM = emailP,
                addressM = addressP,
                phoneM = phoneP,

            )   
            employee.save()
            msg = 'Account Created Successfuly!'
            status = True
            return JsonResponse({'message':msg})    
        else:
            msg = 'Email Already Exists!'
            return JsonResponse({'message':msg})  
   
        
    return JsonResponse({'msg':'errror'})

def get_data(request):
    data = Employee.objects.all()
    data1 = serializers.serialize("json",data)


    return JsonResponse({'data':data1})

def delete(request):
    id=request.POST['hidid']
    emp = Employee.objects.get(phoneM=id) 
    emp.delete() 
    return redirect('index')

def update(request):
       
    if request.method == 'POST':
        nameP = request.POST['nameA']
        emailP = request.POST['emailA']
        addressP = request.POST['adressA']
        phoneP = request.POST['phoneA']

        emp1 = Employee.objects.get(phoneM = phoneP)       
            
        emp1.nameM = nameP
        emp1.emailM = emailP
        emp1.addressM = addressP
        emp1.phoneM = phoneP                    
        emp1.save()
        return redirect('index')


                        




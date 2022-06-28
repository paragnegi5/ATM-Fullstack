from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import AccountSerializer, CreateAccountSerializer
from .models import Account
from rest_framework.views import APIView
from rest_framework.response import Response
from .email import email_to_send

# Create your views here.

# def main(request):
# 	return HttpResponse("<h1>Hello</h1>")


class AccountView(generics.ListAPIView):
	queryset = Account.objects.all()
	serializer_class = AccountSerializer


class CreateAccountView(APIView):
	serializer_class=CreateAccountSerializer

	def post(self,request,format=None):
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			print(serializer.data)
			account_pin=serializer.data.get('account_pin')
			email=serializer.data.get('email')
			firstname=serializer.data.get('firstname')
			lastname=serializer.data.get('lastname')
			balance=serializer.data.get('balance')

			account=Account(account_pin=account_pin,email=email,firstname=firstname,lastname=lastname,balance=balance)
			account.save()
			# print(AccountSerializer(account).data.get('account_number'))

			to=email
			text="Hi..<br></br><br></br>Mr. <b>{} {}</b>.<br></br><br></br>Congratulations! Thank you for trusting us.<br></br><br></br>Your new account has been created with acccount number {}<br></br><br></br>Wish you a great BANKING ahead.".format(firstname,lastname,AccountSerializer(account).data.get('account_number'))
			subject="New account opened"
			email_to_send(to,text,subject)

			return Response(AccountSerializer(account).data, status=status.HTTP_201_CREATED)
		return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
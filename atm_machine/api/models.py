from django.db import models
from random import randint
from django.contrib.auth.models import UserManager

def generate_account_number():
	account_number="5"
	i=0

	while True:
		while i<10:
			account_number+=str(randint(0,9))
			i+=1
		account_number=int(account_number)
		if Account.objects.filter(account_number=account_number).count()==0:
			break
	return account_number

def generate_otp():
	return 1234

# Create your models here.
class Account(models.Model):
	account_number = models.IntegerField(default=generate_account_number)
	account_pin = models.IntegerField()
	email = models.CharField(max_length=50)
	firstname = models.CharField(max_length=30)
	lastname = models.CharField(max_length=30)
	balance = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add=True)

class Otp(models.Model):
	account_number=models.IntegerField()
	otp=models.IntegerField(default=generate_otp)
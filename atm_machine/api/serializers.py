from rest_framework import serializers
from .models import Account, Otp

class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = Account
		fields = ('id', 'account_number', 'email', 'firstname', 'lastname', 'balance', 'created_at', 'account_pin')


class CreateAccountSerializer(serializers.ModelSerializer):
	class Meta:
		model=Account
		fields = ('account_pin', 'email', 'firstname', 'lastname', 'balance')

class DepositMoneySerializer(serializers.ModelSerializer):
	class Meta:
		model=Account
		fields = ('account_number','balance')

class WithdrawMoneySerializer(serializers.ModelSerializer):
	class Meta:
		model=Account
		fields = ('account_number','money')

class ChangePinSerializer(serializers.ModelSerializer):
	class Meta:
		model=Otp
		fields = ('account_number',)

class TransferMoneySerializer(serializers.ModelSerializer):
	class Meta:
		model=Account
		fields = ('debit_account_number','credit_account_number','money')
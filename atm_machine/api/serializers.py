from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = Account
		fields = ('id', 'account_number', 'email', 'firstname', 'lastname', 'balance', 'created_at')


class CreateAccountSerializer(serializers.ModelSerializer):
	class Meta:
		model=Account
		fields = ('account_pin', 'email', 'firstname', 'lastname', 'balance')
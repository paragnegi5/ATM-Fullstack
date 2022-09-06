# Generated by Django 4.1 on 2022-09-06 17:12

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20220903_1846'),
    ]

    operations = [
        migrations.CreateModel(
            name='Otp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_number', models.IntegerField()),
                ('otp', models.IntegerField(default=api.models.generate_otp)),
            ],
        ),
        migrations.DeleteModel(
            name='Deposit',
        ),
        migrations.AlterField(
            model_name='account',
            name='account_number',
            field=models.IntegerField(default=api.models.generate_account_number),
        ),
    ]

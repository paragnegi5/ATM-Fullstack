# Generated by Django 3.1.7 on 2022-09-03 13:16

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='deposit',
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='deposit',
            name='account_number',
        ),
        migrations.AddField(
            model_name='deposit',
            name='account',
            field=models.IntegerField(default=50565455299),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='deposit',
            name='money',
            field=models.IntegerField(default=55),
            preserve_default=False,
        ),
    ]

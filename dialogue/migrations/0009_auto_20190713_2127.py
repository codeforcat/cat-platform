# Generated by Django 2.1.9 on 2019-07-13 12:27

from django.db import migrations
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0008_auto_20190713_2122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='entities',
            field=django_mysql.models.JSONField(blank=True, default=dict, null=True),
        ),
    ]

# Generated by Django 2.1.9 on 2019-07-13 12:19

from django.db import migrations
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0006_auto_20190713_1709'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='entity_id',
        ),
        migrations.AddField(
            model_name='question',
            name='entity',
            field=django_mysql.models.JSONField(blank=True, default=list, null=True),
        ),
    ]
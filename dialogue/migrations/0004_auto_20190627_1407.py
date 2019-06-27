# Generated by Django 2.1.9 on 2019-06-27 05:07

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0003_auto_20190623_1713'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='additional_message',
        ),
        migrations.RemoveField(
            model_name='answer',
            name='additional_state',
        ),
        migrations.AddField(
            model_name='question',
            name='additional_message',
            field=django_mysql.models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AddField(
            model_name='question',
            name='additional_state',
            field=models.CharField(default='none', max_length=20),
        ),
    ]

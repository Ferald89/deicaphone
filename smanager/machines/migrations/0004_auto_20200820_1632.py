# Generated by Django 3.1 on 2020-08-20 16:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200820_1632'),
        ('machines', '0003_auto_20200820_1607'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user', verbose_name='Propietario'),
        ),
    ]

# Generated by Django 3.0.9 on 2020-08-05 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0002_machine_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='membership',
            name='is_owner',
            field=models.BooleanField(default=False, help_text='Machine admin can see you detail', verbose_name='machine admin'),
        ),
    ]
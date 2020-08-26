# Generated by Django 3.1 on 2020-08-26 17:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('machines', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='DateTime on wich the object was created', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, help_text='DateTime on wich the object was last modiefed', verbose_name='modified at')),
                ('is_active', models.BooleanField(default=True, help_text='used fot disabiling when the service was done', verbose_name='Es Activo')),
                ('text', models.TextField(blank=True)),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': 'created',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='DateTime on wich the object was created', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, help_text='DateTime on wich the object was last modiefed', verbose_name='modified at')),
                ('name', models.CharField(max_length=140, verbose_name='Nombre Del Servicio')),
                ('about', models.TextField(blank=True, verbose_name='Acerca del service')),
                ('is_active', models.BooleanField(default=True, help_text='used fot disabiling when the service was done', verbose_name='El Servicio esta activo')),
                ('taked_at', models.DateTimeField(blank=True, null=True, verbose_name='Tomado en')),
                ('service_date', models.DateTimeField(verbose_name='Fecha del servicio')),
                ('order_in', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='machines.machine', verbose_name='Servició ordenado en la máquina')),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': 'created',
                'abstract': False,
            },
        ),
    ]

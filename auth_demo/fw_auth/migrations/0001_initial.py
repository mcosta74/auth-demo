# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-19 16:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='GlobalPermission',
            fields=[
            ],
            options={
                'managed': False,
                'proxy': True,
            },
            bases=('auth.permission',),
        ),
    ]

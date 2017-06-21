# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-19 16:37
from __future__ import unicode_literals

from django.db import migrations
from fw_auth.models import FileWavePermission

new_permissions = [
    ('Filset Type Profile', 'fw.fileset_type.profile'),
    ('Filset Type Policy', 'fw.fileset_type.policy'),
]

def createPermissions(apps, schema_editor):
    for p in new_permissions:
        FileWavePermission.objects.create(name=p[0], codename=p[1])


def deletePremissions(app, schema_editor):
    for p in new_permissions:
        FileWavePermission.objects.filter(codename=p[1]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('fw_auth', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(createPermissions, deletePremissions)
    ]

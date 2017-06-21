from django.contrib import admin

from .models import FileWavePermission

# Register your models here.

class FileWavePermissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'codename', )
    fields = ('name', 'codename', )

admin.site.register(FileWavePermission, FileWavePermissionAdmin)
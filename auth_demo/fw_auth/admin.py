from django.contrib import admin

from .models import GlobalPermission

# Register your models here.

class GlobalPermissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'codename', )
    fields = ('name', 'codename', )

admin.site.register(GlobalPermission, GlobalPermissionAdmin)
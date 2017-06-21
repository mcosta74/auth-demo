from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType

# Create your models here.

class FileWavePermissionManager(models.Manager):
    def get_query_set(self):
        return super(FileWavePermissionManager, self).\
            get_queryset().filter(content_type__name='filewave_permission')


class FileWavePermission(Permission):
    """A global permission, not attached to a model"""

    objects = FileWavePermissionManager()

    class Meta:
        proxy = True
        managed = False

    def save(self, *args, **kwargs):
        ct, created = ContentType.objects.get_or_create(
            model="filewave_permission", app_label="fw_auth"
        )
        self.content_type = ct
        super(FileWavePermission, self).save(*args, **kwargs)

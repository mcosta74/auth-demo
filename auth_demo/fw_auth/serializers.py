from django.contrib.auth.models import User

from rest_framework import serializers


class StringListField(serializers.ListField):
    child = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):

    permissions = StringListField(source="get_all_permissions")
    class Meta:
        model = User
        fields = ('id', 'username', 'permissions')
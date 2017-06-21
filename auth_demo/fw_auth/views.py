""" Views """

from django.contrib.auth import authenticate

from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response


from .serializers import UserSerializer


# Create your views here.

class LoginView(APIView):

    def post(self, request):

        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if not user:
            raise AuthenticationFailed()

        return Response(
            status=status.HTTP_200_OK,
            data=UserSerializer(user).data
        )

from django.conf.urls import url, include
from rest_framework.documentation import include_docs_urls

from .views import LoginView


urlpatterns = [
    url(r'^login/', LoginView.as_view()),
    url(r'^docs/', include_docs_urls(title='My API title'))
]

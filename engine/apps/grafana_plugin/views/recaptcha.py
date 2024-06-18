from rest_framework.views import APIView

from django.conf import settings
from apps.auth_token.auth import PluginAuthentication
from rest_framework.request import Request
from rest_framework.response import Response

class RecaptchaView(APIView):
    authentication_classes = (PluginAuthentication,)

    def get(self, request: Request) -> Response:
        return Response(
            data={
                "recaptcha_site_key": settings.RECAPTCHA_V3_SITE_KEY,
            }
        )

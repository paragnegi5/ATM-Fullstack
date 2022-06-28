from django.urls import path, include
from .views import AccountView, CreateAccountView

urlpatterns = [
    path('accounts',AccountView.as_view()),
    path('createaccount', CreateAccountView.as_view())
]
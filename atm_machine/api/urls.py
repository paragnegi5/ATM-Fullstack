from django.urls import path, include
from .views import AccountView, CreateAccountView,getotp

urlpatterns = [
    path('accounts',AccountView.as_view()),
    path('createaccount', CreateAccountView.as_view()),
    path('getotp',getotp.as_view())
    # path('changepin'),
    # path('withdrawmoney'),
    # path('depositmoney', DepositMoneyView.as_view())
    # path('transfermoney')
]
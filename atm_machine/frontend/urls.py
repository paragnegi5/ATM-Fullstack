from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('createaccount', index),
    path('withdrawmoney', index),
    path('depositmoney', index),
    path('checkbalance', index),
    path('pinchange', index),
]

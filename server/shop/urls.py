from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, OrderViewSet, ProductViewSet

router = DefaultRouter()
router.register("products", ProductViewSet, basename="product")
router.register("orders", OrderViewSet, basename="order")
router.register("categories", CategoryViewSet, basename="category")

urlpatterns = [
    path("", include(router.urls)),
]

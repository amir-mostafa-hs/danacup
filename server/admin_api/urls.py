from django.urls import path

from .views import CategoryViewSet, OrderViewSet, ProductViewSet

urlpatterns = [
    path(
        "products/",
        ProductViewSet.as_view({"get": "list", "post": "create"}),
        name="product-list",
    ),
    path(
        "products/<int:pk>/",
        ProductViewSet.as_view({"put": "update", "delete": "destroy"}),
        name="product-detail",
    ),
    path(
        "categories/",
        CategoryViewSet.as_view({"get": "list", "post": "create"}),
        name="category-list",
    ),
    path(
        "categories/<int:pk>/",
        CategoryViewSet.as_view({"put": "update", "delete": "destroy"}),
        name="category-detail",
    ),
    path("orders/", OrderViewSet.as_view({"get": "list"}), name="order-list"),
    path(
        "orders/<int:pk>/", OrderViewSet.as_view({"put": "update"}), name="order-detail"
    ),
]

from django.contrib import admin

from .models import Category, Order, Product, ProductImage


class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ("name", "description")


admin.site.register(Category, CategoryAdmin)


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ("name", "price", "count", "created_at")
    inlines = [ProductImageInline]


admin.site.register(Product, ProductAdmin)


class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ("id", "user", "total_price", "status", "created_at", "paid_at")
    list_filter = ("status", "created_at")
    search_fields = ("user__email", "payment_reference")


admin.site.register(Order, OrderAdmin)

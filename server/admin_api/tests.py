from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import Product, Category, Order

class AdminApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.category = Category.objects.create(name="Test Category", description="A test category")
        self.product = Product.objects.create(name="Test Product", description="A test product", price=10.00, count=100, category=self.category)
        self.order = Order.objects.create(user=self.user, total_price=10.00)

    def test_create_product(self):
        response = self.client.post('/api/admin/products/', {
            'name': 'New Product',
            'description': 'A new product',
            'price': 20.00,
            'count': 50,
            'category_id': self.category.id
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_products(self):
        response = self.client.get('/api/admin/products/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_update_product(self):
        response = self.client.put(f'/api/admin/products/{self.product.id}/', {
            'name': 'Updated Product',
            'description': 'An updated product',
            'price': 15.00,
            'count': 75,
            'category_id': self.category.id
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product.refresh_from_db()
        self.assertEqual(self.product.name, 'Updated Product')

    def test_delete_product(self):
        response = self.client.delete(f'/api/admin/products/{self.product.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Product.objects.filter(id=self.product.id).exists())

    def test_get_categories(self):
        response = self.client.get('/api/admin/categories/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_category(self):
        response = self.client.post('/api/admin/categories/', {
            'name': 'New Category',
            'description': 'A new category'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_update_category(self):
        response = self.client.put(f'/api/admin/categories/{self.category.id}/', {
            'name': 'Updated Category',
            'description': 'An updated category'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.category.refresh_from_db()
        self.assertEqual(self.category.name, 'Updated Category')

    def test_delete_category(self):
        response = self.client.delete(f'/api/admin/categories/{self.category.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Category.objects.filter(id=self.category.id).exists())

    def test_get_orders(self):
        response = self.client.get('/api/admin/orders/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
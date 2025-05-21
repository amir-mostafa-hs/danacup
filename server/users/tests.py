from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_simplejwt.tokens import RefreshToken
from users.serializers import RegisterSerializer

User = get_user_model()


class UserAPITestCase(APITestCase):
    def setUp(self):
        self.register_url = reverse("register")
        self.token_url = reverse("token_obtain_pair")
        self.profile_url = reverse("user-profile")

        self.user = User.objects.create_user(
            email="testuser@example.com",
            password="strongpassword123",
            first_name="Test",
            last_name="User",
        )

    def test_user_registration(self):
        data = {
            "email": "newuser@example.com",
            "password": "newpass123",
            "first_name": "Ali",
            "last_name": "Ahmadi",
        }
        response = self.client.post(self.register_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(
            User.objects.filter(email="newuser@example.com").exists(), True
        )

    def test_user_login_jwt_token(self):
        data = {"email": "testuser@example.com", "password": "strongpassword123"}
        response = self.client.post(self.token_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)

    def test_user_profile_authenticated(self):
        refresh = RefreshToken.for_user(self.user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {access_token}")
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["email"], self.user.email)

    def test_user_profile_unauthenticated(self):
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class RegisterSerializerTest(TestCase):
    def test_valid_data_creates_user(self):
        data = {
            "email": "test@example.com",
            "password": "test1234",
            "first_name": "Test",
            "last_name": "User",
        }
        serializer = RegisterSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        user = serializer.save()
        self.assertEqual(user.email, "test@example.com")

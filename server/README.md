# README for Admin API

## Overview

The Admin API is designed to provide a set of endpoints for managing the admin panel of the application. It allows for operations such as user authentication, product management, category management, and order management.

## Features

- User authentication and token management
- CRUD operations for products
- CRUD operations for categories
- Order management functionalities

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```
   python manage.py migrate
   ```

5. Create a superuser to access the admin panel:
   ```
   python manage.py createsuperuser
   ```

## Usage

To start the development server, run:
```
python manage.py runserver
```

You can access the API endpoints at:
```
http://localhost:8000/api/admin/
```

## API Endpoints

- **Login Admin**: `POST /api/admin/login/`
- **Get Products**: `GET /api/admin/products/`
- **Add Product**: `POST /api/admin/products/`
- **Edit Product**: `PUT /api/admin/products/:id/`
- **Delete Product**: `DELETE /api/admin/products/:id/`
- **Get Categories**: `GET /api/admin/categories/`
- **Add Category**: `POST /api/admin/categories/`
- **Edit Category**: `PUT /api/admin/categories/:id/`
- **Delete Category**: `DELETE /api/admin/categories/:id/`
- **Get Orders**: `GET /api/admin/orders/`
- **Change Order Status**: `PUT /api/admin/orders/:id/`

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
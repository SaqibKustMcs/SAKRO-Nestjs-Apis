# Shop API Documentation

## Overview
The Shop module provides functionality for users to create and manage shops in the application. When a user creates a shop, their role automatically changes from "normal" to "seller".

## User Role System
- **normal**: Default role for new users
- **seller**: Users who have created a shop
- **admin**: Administrative users

## API Endpoints

### 1. Create Shop
**POST** `/shop/create`

Creates a new shop and updates the user's role to "seller".

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "shopName": "My Awesome Shop",
  "villageId": "village_id_here",
  "categoryId": "category_id_here",
  "profileImage": "https://example.com/profile.jpg",
  "coverImage": "https://example.com/cover.jpg",
  "description": "A great shop for amazing products"
}
```

**Response:**
```json
{
  "shop": {
    "id": "shop_id",
    "shopName": "My Awesome Shop",
    "villageId": "village_id_here",
    "categoryId": "category_id_here",
    "profileImage": "https://example.com/profile.jpg",
    "coverImage": "https://example.com/cover.jpg",
    "description": "A great shop for amazing products",
    "likes": 0,
    "followers": [],
    "products": [],
    "rating": 0,
    "reviews": [],
    "isVerified": false,
    "status": "active",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "user": {
    "id": "user_id",
    "userRole": "seller"
  },
  "message": "Shop created successfully and user role updated to seller"
}
```

### 2. Get Shop by ID
**GET** `/shop/:id`

Retrieves a specific shop by its ID.

**Response:**
```json
{
  "id": "shop_id",
  "shopName": "My Awesome Shop",
  "villageId": {
    "id": "village_id",
    "name": "Village Name"
  },
  "categoryId": {
    "id": "category_id",
    "name": "Category Name"
  },
  "profileImage": "https://example.com/profile.jpg",
  "coverImage": "https://example.com/cover.jpg",
  "description": "A great shop for amazing products",
  "likes": 0,
  "followers": [],
  "products": [],
  "rating": 0,
  "reviews": [],
  "isVerified": false,
  "status": "active",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### 3. Get All Shops
**GET** `/shop`

Retrieves all active shops.

**Response:**
```json
[
  {
    "id": "shop_id_1",
    "shopName": "Shop 1",
    "villageId": {
      "id": "village_id",
      "name": "Village Name"
    },
    "categoryId": {
      "id": "category_id",
      "name": "Category Name"
    },
    "profileImage": "https://example.com/profile1.jpg",
    "coverImage": "https://example.com/cover1.jpg",
    "description": "Shop 1 description",
    "likes": 5,
    "followers": ["user1", "user2"],
    "products": ["product1", "product2"],
    "rating": 4.5,
    "reviews": ["review1", "review2"],
    "isVerified": true,
    "status": "active",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## Data Models

### Shop Schema
```typescript
{
  id: string;
  shopName: string;           // Required
  villageId: string;          // Required, references Village
  categoryId: string;         // Required, references ShopCategory
  profileImage: string;       // Optional, URL
  coverImage: string;         // Optional, URL
  description?: string;       // Optional
  likes: number;              // Default: 0
  followers: string[];        // Array of User IDs
  products: string[];         // Array of Product IDs
  rating: number;             // Default: 0
  reviews: string[];          // Array of Review IDs
  isVerified: boolean;        // Default: false
  status: 'active' | 'suspended' | 'closed'; // Default: 'active'
  createdAt: Date;
  updatedAt: Date;
}
```

### ShopCategory Schema
```typescript
{
  id: string;
  name: string;               // Required
  description: string;        // Optional
  icon: string;               // Optional, URL
  isActive: boolean;          // Default: true
  createdAt: Date;
  updatedAt: Date;
}
```

## Validation Rules

### CreateShopDTO
- `shopName`: Required, string
- `villageId`: Required, string (must be valid Village ID)
- `categoryId`: Required, string (must be valid ShopCategory ID)
- `profileImage`: Optional, string, must be valid URL
- `coverImage`: Optional, string, must be valid URL
- `description`: Optional, string

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Shop not found"
}
```

## Usage Examples

### Complete Flow: User Signup → Create Shop

1. **User Signup**
```bash
curl -X POST http://localhost:3101/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'
```

2. **Verify Email**
```bash
curl -X POST http://localhost:3101/auth/verifyEmail \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "otp": "123456"
  }'
```

3. **Create Shop**
```bash
curl -X POST http://localhost:3101/shop/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt_token>" \
  -d '{
    "shopName": "My Shop",
    "villageId": "village_id",
    "categoryId": "category_id",
    "description": "A great shop"
  }'
```

## Notes
- Users can only create one shop per account
- Creating a shop automatically changes user role to "seller"
- All shop endpoints require authentication except GET operations
- Shop categories and villages must exist before creating a shop

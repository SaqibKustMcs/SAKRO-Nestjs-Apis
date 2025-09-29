# Consistent Shop API Documentation

## Overview
All shop APIs now return a **consistent response structure** with the full user object populated. This ensures Flutter developers can use a single `ShopModel` across all endpoints.

## 🎯 Key Features
- ✅ **Consistent Response Structure**: All shop APIs return the same `shop` object structure
- ✅ **Full User Object**: Always includes complete user details (never just user ID)
- ✅ **Populated References**: Village and category objects are fully populated
- ✅ **Password Security**: User passwords are never returned in responses
- ✅ **Swagger Documentation**: All endpoints documented with consistent response schemas

## 📋 Shop Response Structure

### Single Shop Response
```json
{
  "id": "shop123",
  "shopName": "Ali Cloth Store",
  "ownerId": "68d678e6ea52cfbe3b31811b",
  "user": {
    "id": "68d678e6ea52cfbe3b31811b",
    "fullName": "Ali Khan",
    "email": "ali@example.com",
    "phoneNumber": "03001234567",
    "userRole": "seller",
    "userStatus": "active",
    "profilePic": "https://example.com/user-profile.jpg",
    "createdAt": "2025-09-20T10:00:00Z",
    "updatedAt": "2025-09-25T15:30:00Z"
  },
  "villageId": {
    "id": "village123",
    "name": "Village Attock"
  },
  "categoryId": {
    "id": "category123",
    "name": "Clothes"
  },
  "profileImage": "https://example.com/profile.jpg",
  "coverImage": "https://example.com/cover.jpg",
  "description": "A great shop for amazing products",
  "likes": 15,
  "followers": ["user1", "user2"],
  "products": ["product1", "product2"],
  "rating": 4.5,
  "reviews": ["review1", "review2"],
  "isVerified": true,
  "status": "active",
  "createdAt": "2025-09-26T12:00:00Z",
  "updatedAt": "2025-09-26T12:00:00Z"
}
```

### Multiple Shops Response
```json
[
  {
    "id": "shop123",
    "shopName": "Ali Cloth Store",
    "ownerId": "68d678e6ea52cfbe3b31811b",
    "user": {
      "id": "68d678e6ea52cfbe3b31811b",
      "fullName": "Ali Khan",
      "email": "ali@example.com",
      "phoneNumber": "03001234567",
      "userRole": "seller",
      "userStatus": "active",
      "profilePic": "https://example.com/user-profile.jpg",
      "createdAt": "2025-09-20T10:00:00Z",
      "updatedAt": "2025-09-25T15:30:00Z"
    },
    "villageId": {
      "id": "village123",
      "name": "Village Attock"
    },
    "categoryId": {
      "id": "category123",
      "name": "Clothes"
    },
    "profileImage": "https://example.com/profile.jpg",
    "coverImage": "https://example.com/cover.jpg",
    "description": "A great shop for amazing products",
    "likes": 15,
    "followers": ["user1", "user2"],
    "products": ["product1", "product2"],
    "rating": 4.5,
    "reviews": ["review1", "review2"],
    "isVerified": true,
    "status": "active",
    "createdAt": "2025-09-26T12:00:00Z",
    "updatedAt": "2025-09-26T12:00:00Z"
  }
]
```

## 🚀 API Endpoints

### 1. Create Shop
**POST** `/shop/create`

**Request:**
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
    "id": "shop123",
    "shopName": "My Awesome Shop",
    "ownerId": "68d678e6ea52cfbe3b31811b",
    "user": {
      "id": "68d678e6ea52cfbe3b31811b",
      "fullName": "Ali Khan",
      "email": "ali@example.com",
      "phoneNumber": "03001234567",
      "userRole": "seller",
      "userStatus": "active",
      "profilePic": "https://example.com/user-profile.jpg",
      "createdAt": "2025-09-20T10:00:00Z",
      "updatedAt": "2025-09-25T15:30:00Z"
    },
    "villageId": {
      "id": "village123",
      "name": "Village Attock"
    },
    "categoryId": {
      "id": "category123",
      "name": "Clothes"
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
    "createdAt": "2025-09-26T12:00:00Z",
    "updatedAt": "2025-09-26T12:00:00Z"
  },
  "message": "Shop created successfully and user role updated to seller"
}
```

### 2. Get Shop by ID
**GET** `/shop/:id`

**Response:** Returns the same shop structure as above.

### 3. Get All Shops
**GET** `/shop`

**Response:** Returns an array of shops, each with the same structure as above.

### 4. Update Shop
**PUT** `/shop/:id`

**Request:**
```json
{
  "shopName": "Updated Shop Name",
  "description": "Updated description",
  "status": "active"
}
```

**Response:**
```json
{
  "shop": {
    "id": "shop123",
    "shopName": "Updated Shop Name",
    "ownerId": "68d678e6ea52cfbe3b31811b",
    "user": {
      "id": "68d678e6ea52cfbe3b31811b",
      "fullName": "Ali Khan",
      "email": "ali@example.com",
      "phoneNumber": "03001234567",
      "userRole": "seller",
      "userStatus": "active",
      "profilePic": "https://example.com/user-profile.jpg",
      "createdAt": "2025-09-20T10:00:00Z",
      "updatedAt": "2025-09-25T15:30:00Z"
    },
    "villageId": {
      "id": "village123",
      "name": "Village Attock"
    },
    "categoryId": {
      "id": "category123",
      "name": "Clothes"
    },
    "profileImage": "https://example.com/profile.jpg",
    "coverImage": "https://example.com/cover.jpg",
    "description": "Updated description",
    "likes": 15,
    "followers": ["user1", "user2"],
    "products": ["product1", "product2"],
    "rating": 4.5,
    "reviews": ["review1", "review2"],
    "isVerified": true,
    "status": "active",
    "createdAt": "2025-09-26T12:00:00Z",
    "updatedAt": "2025-09-26T12:00:00Z"
  },
  "message": "Shop updated successfully"
}
```

### 5. Delete Shop
**DELETE** `/shop/:id`

**Response:**
```json
{
  "message": "Shop deleted successfully",
  "shop": {
    "id": "shop123",
    "shopName": "My Awesome Shop",
    "ownerId": "68d678e6ea52cfbe3b31811b",
    "user": {
      "id": "68d678e6ea52cfbe3b31811b",
      "fullName": "Ali Khan",
      "email": "ali@example.com",
      "phoneNumber": "03001234567",
      "userRole": "normal",
      "profilePic": "https://example.com/user-profile.jpg",
      "userStatus": "active",
      "createdAt": "2025-09-20T10:00:00Z",
      "updatedAt": "2025-09-25T15:30:00Z"
    },
    "villageId": {
      "id": "village123",
      "name": "Village Attock"
    },
    "categoryId": {
      "id": "category123",
      "name": "Clothes"
    },
    "profileImage": "https://example.com/profile.jpg",
    "coverImage": "https://example.com/cover.jpg",
    "description": "A great shop for amazing products",
    "likes": 15,
    "followers": ["user1", "user2"],
    "products": ["product1", "product2"],
    "rating": 4.5,
    "reviews": ["review1", "review2"],
    "isVerified": true,
    "status": "closed",
    "createdAt": "2025-09-26T12:00:00Z",
    "updatedAt": "2025-09-26T12:00:00Z"
  }
}
```

### 6. Get My Shops
**GET** `/shop/my-shops`

**Response:** Returns an array of shops owned by the authenticated user, each with the same structure as above.

## 🔧 Technical Implementation

### Database Schema
```typescript
// Shop Schema
{
  _id: String,
  shopName: String (required),
  user: String (required, ref: 'User'),
  villageId: String (required, ref: 'Village'),
  categoryId: String (required, ref: 'ShopCategory'),
  profileImage: String,
  coverImage: String,
  description: String,
  likes: Number (default: 0),
  followers: [String] (ref: 'User'),
  products: [String] (ref: 'Product'),
  rating: Number (default: 0),
  reviews: [String] (ref: 'Review'),
  isVerified: Boolean (default: false),
  status: String (enum: ['active', 'suspended', 'closed'], default: 'active'),
  createdAt: Date,
  updatedAt: Date
}
```

### Population Strategy
All shop queries use consistent population:
```typescript
.populate('user', 'id fullName email phoneNumber userRole userStatus createdAt updatedAt')
.populate('villageId', 'id name')
.populate('categoryId', 'id name')
```

### Security Features
- ✅ Password fields are automatically removed from user objects
- ✅ Only shop owners can update/delete their shops
- ✅ JWT authentication required for all write operations
- ✅ Soft delete (status: 'closed') instead of hard delete

## 🎯 Flutter Integration Benefits

### Single Model Usage
Flutter developers can use **one ShopModel** for all endpoints:

```dart
class ShopModel {
  final String id;
  final String shopName;
  final UserModel user;           // Always populated
  final VillageModel villageId;   // Always populated
  final CategoryModel categoryId; // Always populated
  final String profileImage;
  final String coverImage;
  final String description;
  final int likes;
  final List<String> followers;
  final List<String> products;
  final double rating;
  final List<String> reviews;
  final bool isVerified;
  final String status;
  final DateTime createdAt;
  final DateTime updatedAt;

  // Single constructor works for all API responses
  ShopModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    shopName = json['shopName'];
    user = UserModel.fromJson(json['user']);           // Always available
    villageId = VillageModel.fromJson(json['villageId']); // Always available
    categoryId = CategoryModel.fromJson(json['categoryId']); // Always available
    // ... other fields
  }
}
```

### Consistent API Usage
```dart
// All these endpoints return the same structure
final shop1 = await api.createShop(shopData);     // Returns ShopModel
final shop2 = await api.getShopById(shopId);      // Returns ShopModel
final shops = await api.getAllShops();            // Returns List<ShopModel>
final updatedShop = await api.updateShop(id, data); // Returns ShopModel
final deletedShop = await api.deleteShop(id);     // Returns ShopModel
```

## 📊 Response Consistency Matrix

| Endpoint | Method | Returns Shop Object | User Populated | Village Populated | Category Populated |
|----------|--------|-------------------|----------------|-------------------|-------------------|
| `/shop/create` | POST | ✅ | ✅ | ✅ | ✅ |
| `/shop/:id` | GET | ✅ | ✅ | ✅ | ✅ |
| `/shop` | GET | ✅ (Array) | ✅ | ✅ | ✅ |
| `/shop/:id` | PUT | ✅ | ✅ | ✅ | ✅ |
| `/shop/:id` | DELETE | ✅ | ✅ | ✅ | ✅ |
| `/shop/my-shops` | GET | ✅ (Array) | ✅ | ✅ | ✅ |

## 🚀 Benefits

1. **Developer Experience**: Flutter developers need only one model
2. **Consistency**: All endpoints return the same structure
3. **Performance**: Populated data reduces additional API calls
4. **Maintainability**: Single source of truth for shop data structure
5. **Type Safety**: Consistent TypeScript interfaces and Swagger documentation
6. **Security**: Passwords never exposed, proper authorization checks

This implementation ensures a seamless experience for Flutter developers while maintaining security and performance standards.

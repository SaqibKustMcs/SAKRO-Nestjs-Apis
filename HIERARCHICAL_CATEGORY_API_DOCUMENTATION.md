# Hierarchical Category System API Documentation

## Overview
A comprehensive hierarchical category system with three levels: Main Shop Category, Product Category, and Product Subcategory. This system provides complete CRUD operations with proper validation and consistent response structures.

## 🏗️ Category Hierarchy Structure

```
SHOP_CATEGORY (Level 1)
├── PRODUCT_CATEGORY (Level 2)
│   ├── SUBCATEGORY (Level 3)
│   └── SUBCATEGORY (Level 3)
└── PRODUCT_CATEGORY (Level 2)
    └── SUBCATEGORY (Level 3)
```

### Example Hierarchy:
```
Electronics (SHOP_CATEGORY)
├── Mobile Phones (PRODUCT_CATEGORY)
│   ├── Smartphones (SUBCATEGORY)
│   ├── Feature Phones (SUBCATEGORY)
│   └── Accessories (SUBCATEGORY)
└── Computers (PRODUCT_CATEGORY)
    ├── Laptops (SUBCATEGORY)
    ├── Desktops (SUBCATEGORY)
    └── Components (SUBCATEGORY)
```

## 📋 Category Model Structure

### Database Schema
```typescript
{
  id: string;                    // Auto-generated unique ID
  name: string;                  // Category name
  type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY';
  parentCategoryId?: string;     // Parent category reference
  shopCategoryId?: string;       // Shop category reference (for PRODUCT_CATEGORY & SUBCATEGORY)
  productCategoryId?: string;    // Product category reference (for SUBCATEGORY)
  status: 'ACTIVE' | 'INACTIVE';
  description?: string;          // Optional description
  icon?: string;                 // Optional icon URL
  sortOrder: number;             // Display order
  createdAt: Date;
  updatedAt: Date;
}
```

### Validation Rules
- **SHOP_CATEGORY**: No parent required
- **PRODUCT_CATEGORY**: Must provide `shopCategoryId`
- **SUBCATEGORY**: Must provide both `shopCategoryId` and `productCategoryId`

## 🚀 API Endpoints

### 1. Create Category
**POST** `/category`

**Request Body:**
```json
{
  "name": "Electronics",
  "type": "SHOP_CATEGORY",
  "description": "Electronic devices and accessories",
  "icon": "https://example.com/electronics-icon.png",
  "sortOrder": 1
}
```

**Response:**
```json
{
  "id": "cat_123",
  "name": "Electronics",
  "type": "SHOP_CATEGORY",
  "parentCategoryId": null,
  "shopCategoryId": null,
  "productCategoryId": null,
  "status": "ACTIVE",
  "description": "Electronic devices and accessories",
  "icon": "https://example.com/electronics-icon.png",
  "sortOrder": 1,
  "createdAt": "2025-09-29T15:30:00.000Z",
  "updatedAt": "2025-09-29T15:30:00.000Z"
}
```

### 2. Create Product Category
**POST** `/category`

**Request Body:**
```json
{
  "name": "Mobile Phones",
  "type": "PRODUCT_CATEGORY",
  "shopCategoryId": "cat_123",
  "description": "Mobile phones and accessories",
  "sortOrder": 1
}
```

**Response:**
```json
{
  "id": "cat_456",
  "name": "Mobile Phones",
  "type": "PRODUCT_CATEGORY",
  "parentCategoryId": null,
  "shopCategoryId": "cat_123",
  "productCategoryId": null,
  "status": "ACTIVE",
  "description": "Mobile phones and accessories",
  "icon": "",
  "sortOrder": 1,
  "shopCategory": {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY"
  },
  "createdAt": "2025-09-29T15:35:00.000Z",
  "updatedAt": "2025-09-29T15:35:00.000Z"
}
```

### 3. Create Subcategory
**POST** `/category`

**Request Body:**
```json
{
  "name": "Smartphones",
  "type": "SUBCATEGORY",
  "shopCategoryId": "cat_123",
  "productCategoryId": "cat_456",
  "description": "Smart mobile phones",
  "sortOrder": 1
}
```

**Response:**
```json
{
  "id": "cat_789",
  "name": "Smartphones",
  "type": "SUBCATEGORY",
  "parentCategoryId": null,
  "shopCategoryId": "cat_123",
  "productCategoryId": "cat_456",
  "status": "ACTIVE",
  "description": "Smart mobile phones",
  "icon": "",
  "sortOrder": 1,
  "shopCategory": {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY"
  },
  "productCategory": {
    "id": "cat_456",
    "name": "Mobile Phones",
    "type": "PRODUCT_CATEGORY"
  },
  "createdAt": "2025-09-29T15:40:00.000Z",
  "updatedAt": "2025-09-29T15:40:00.000Z"
}
```

### 4. Get Category by ID
**GET** `/category/:id`

**Response:**
```json
{
  "id": "cat_789",
  "name": "Smartphones",
  "type": "SUBCATEGORY",
  "parentCategoryId": null,
  "shopCategoryId": "cat_123",
  "productCategoryId": "cat_456",
  "status": "ACTIVE",
  "description": "Smart mobile phones",
  "icon": "",
  "sortOrder": 1,
  "shopCategory": {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY"
  },
  "productCategory": {
    "id": "cat_456",
    "name": "Mobile Phones",
    "type": "PRODUCT_CATEGORY"
  },
  "createdAt": "2025-09-29T15:40:00.000Z",
  "updatedAt": "2025-09-29T15:40:00.000Z"
}
```

### 5. Get All Categories (with filters)
**GET** `/category?type=SHOP_CATEGORY&status=ACTIVE`

**Query Parameters:**
- `type`: Filter by category type
- `shopCategoryId`: Filter by shop category ID
- `productCategoryId`: Filter by product category ID
- `status`: Filter by status
- `search`: Search by category name

**Response:**
```json
[
  {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY",
    "parentCategoryId": null,
    "shopCategoryId": null,
    "productCategoryId": null,
    "status": "ACTIVE",
    "description": "Electronic devices and accessories",
    "icon": "https://example.com/electronics-icon.png",
    "sortOrder": 1,
    "createdAt": "2025-09-29T15:30:00.000Z",
    "updatedAt": "2025-09-29T15:30:00.000Z"
  }
]
```

### 6. Get Categories by Type
**GET** `/category/type/SHOP_CATEGORY`

**Response:**
```json
[
  {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY",
    "parentCategoryId": null,
    "shopCategoryId": null,
    "productCategoryId": null,
    "status": "ACTIVE",
    "description": "Electronic devices and accessories",
    "icon": "https://example.com/electronics-icon.png",
    "sortOrder": 1,
    "createdAt": "2025-09-29T15:30:00.000Z",
    "updatedAt": "2025-09-29T15:30:00.000Z"
  }
]
```

### 7. Get Complete Category Hierarchy
**GET** `/category/hierarchy/all`

**Response:**
```json
[
  {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY",
    "parentCategoryId": null,
    "shopCategoryId": null,
    "productCategoryId": null,
    "status": "ACTIVE",
    "description": "Electronic devices and accessories",
    "icon": "https://example.com/electronics-icon.png",
    "sortOrder": 1,
    "createdAt": "2025-09-29T15:30:00.000Z",
    "updatedAt": "2025-09-29T15:30:00.000Z",
    "children": [
      {
        "id": "cat_456",
        "name": "Mobile Phones",
        "type": "PRODUCT_CATEGORY",
        "parentCategoryId": null,
        "shopCategoryId": "cat_123",
        "productCategoryId": null,
        "status": "ACTIVE",
        "description": "Mobile phones and accessories",
        "icon": "",
        "sortOrder": 1,
        "createdAt": "2025-09-29T15:35:00.000Z",
        "updatedAt": "2025-09-29T15:35:00.000Z",
        "children": [
          {
            "id": "cat_789",
            "name": "Smartphones",
            "type": "SUBCATEGORY",
            "parentCategoryId": null,
            "shopCategoryId": "cat_123",
            "productCategoryId": "cat_456",
            "status": "ACTIVE",
            "description": "Smart mobile phones",
            "icon": "",
            "sortOrder": 1,
            "createdAt": "2025-09-29T15:40:00.000Z",
            "updatedAt": "2025-09-29T15:40:00.000Z"
          }
        ]
      }
    ]
  }
]
```

### 8. Update Category
**PUT** `/category/:id`

**Request Body:**
```json
{
  "name": "Updated Electronics",
  "description": "Updated description",
  "status": "ACTIVE",
  "sortOrder": 2
}
```

**Response:**
```json
{
  "id": "cat_123",
  "name": "Updated Electronics",
  "type": "SHOP_CATEGORY",
  "parentCategoryId": null,
  "shopCategoryId": null,
  "productCategoryId": null,
  "status": "ACTIVE",
  "description": "Updated description",
  "icon": "https://example.com/electronics-icon.png",
  "sortOrder": 2,
  "createdAt": "2025-09-29T15:30:00.000Z",
  "updatedAt": "2025-09-29T15:45:00.000Z"
}
```

### 9. Delete Category
**DELETE** `/category/:id`

**Response:**
```json
{
  "message": "Category deleted successfully"
}
```

## 🔧 Technical Features

### Validation Rules
1. **SHOP_CATEGORY**: Cannot have parent categories
2. **PRODUCT_CATEGORY**: Must have valid `shopCategoryId`
3. **SUBCATEGORY**: Must have valid `shopCategoryId` and `productCategoryId`
4. **Delete Protection**: Cannot delete categories with children

### Database Indexes
- `name`: For search functionality
- `type`: For filtering by category type
- `status`: For filtering by status
- `shopCategoryId`: For hierarchical queries
- `productCategoryId`: For hierarchical queries
- `parentCategoryId`: For parent-child relationships
- `sortOrder`: For ordered display

### Response Consistency
All endpoints return the same category structure with:
- Complete category information
- Populated parent category details (when applicable)
- Consistent field ordering
- Proper null handling

## 🎯 Usage Examples

### Creating a Complete Category Tree

1. **Create Shop Category:**
```bash
curl -X POST http://localhost:3101/category \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "Fashion",
    "type": "SHOP_CATEGORY",
    "description": "Fashion and clothing",
    "sortOrder": 1
  }'
```

2. **Create Product Category:**
```bash
curl -X POST http://localhost:3101/category \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "Men Clothing",
    "type": "PRODUCT_CATEGORY",
    "shopCategoryId": "cat_123",
    "description": "Men clothing items",
    "sortOrder": 1
  }'
```

3. **Create Subcategory:**
```bash
curl -X POST http://localhost:3101/category \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "T-Shirts",
    "type": "SUBCATEGORY",
    "shopCategoryId": "cat_123",
    "productCategoryId": "cat_456",
    "description": "Men t-shirts",
    "sortOrder": 1
  }'
```

### Filtering and Searching

```bash
# Get all active shop categories
curl "http://localhost:3101/category?type=SHOP_CATEGORY&status=ACTIVE"

# Get all product categories under a specific shop category
curl "http://localhost:3101/category?type=PRODUCT_CATEGORY&shopCategoryId=cat_123"

# Search categories by name
curl "http://localhost:3101/category?search=electronics"

# Get complete hierarchy
curl "http://localhost:3101/category/hierarchy/all"
```

## 🚀 Benefits

1. **Hierarchical Structure**: Three-level category system for organized product classification
2. **Flexible Filtering**: Multiple query parameters for precise data retrieval
3. **Consistent Responses**: Same structure across all endpoints
4. **Validation**: Comprehensive validation rules prevent data inconsistencies
5. **Performance**: Optimized with proper database indexes
6. **Type Safety**: Full TypeScript support with proper interfaces
7. **Documentation**: Complete Swagger documentation for all endpoints
8. **Security**: JWT authentication for write operations

This hierarchical category system provides a robust foundation for organizing products in your shopping application with proper validation, consistent responses, and excellent performance.

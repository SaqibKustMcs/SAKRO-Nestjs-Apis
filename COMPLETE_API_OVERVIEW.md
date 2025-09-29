# Complete API Overview - SAKRO NestJS APIs

## 🎯 **Consistent Response Format**
All APIs in this project follow the same response structure:

```json
{
  "success": true,
  "message": "string",
  "data": {}
}
```

---

## 📋 **API Endpoints Summary**

### 🔐 **Authentication APIs** (`/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | User registration | ❌ |
| POST | `/auth/login` | User login | ❌ |
| POST | `/auth/isEmailExists` | Check email existence | ❌ |
| POST | `/auth/verifyEmail` | Verify email with OTP | ❌ |
| POST | `/auth/resendOtp` | Resend OTP | ❌ |
| POST | `/auth/forgotPassword` | Forgot password | ❌ |
| POST | `/auth/verifyOtpForForgotPassword` | Verify OTP for password reset | ❌ |
| POST | `/auth/resetPassword` | Reset password | ❌ |
| GET | `/auth/getLoggedInUsers` | Get logged in users | ✅ |
| PUT | `/auth/update-profile` | Update user profile | ✅ |

**Example Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "userRole": "normal",
    "createdAt": "2025-09-29T15:30:00.000Z"
  }
}
```

### 🏪 **Shop APIs** (`/shop`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/shop/create` | Create shop | ✅ |
| GET | `/shop/:id` | Get shop by ID | ❌ |
| GET | `/shop` | Get all shops | ❌ |
| PUT | `/shop/:id` | Update shop | ✅ |
| DELETE | `/shop/:id` | Delete shop | ✅ |
| GET | `/shop/my-shops` | Get user's shops | ✅ |

**Example Response:**
```json
{
  "success": true,
  "message": "Shop created successfully",
  "data": {
    "shop": {
      "id": "shop_123",
      "shopName": "My Electronics Store",
      "ownerId": "user_123",
      "user": {
        "id": "user_123",
        "fullName": "John Doe",
        "email": "john@example.com",
        "userRole": "seller",
        "profilePic": "https://example.com/profile.jpg"
      },
      "villageId": {
        "id": "village_123",
        "name": "Downtown"
      },
      "categoryId": {
        "id": "cat_123",
        "name": "Electronics"
      },
      "status": "active",
      "createdAt": "2025-09-29T15:30:00.000Z"
    }
  }
}
```

### 📦 **Product APIs** (`/products`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/products` | Create product | ✅ |
| GET | `/products/:id` | Get product by ID | ❌ |
| GET | `/products` | Get all products (with filters) | ❌ |
| PUT | `/products/:id` | Update product | ✅ |
| DELETE | `/products/:id` | Delete product | ✅ |
| GET | `/products/shop/:shopId` | Get products by shop | ❌ |
| GET | `/products/featured/list` | Get featured products | ❌ |
| GET | `/products/category/:categoryId` | Get products by category | ❌ |

**Example Response:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "product_123",
    "name": "iPhone 15 Pro Max",
    "shopId": "shop_123",
    "shop": {
      "id": "shop_123",
      "shopName": "My Electronics Store",
      "user": {
        "id": "user_123",
        "fullName": "John Doe",
        "userRole": "seller"
      }
    },
    "price": 150000,
    "stock": 50,
    "status": "ACTIVE",
    "createdAt": "2025-09-29T15:30:00.000Z"
  }
}
```

### 🏷️ **Category APIs** (`/category`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/category` | Create category | ✅ |
| GET | `/category/:id` | Get category by ID | ❌ |
| GET | `/category` | Get all categories (with filters) | ❌ |
| PUT | `/category/:id` | Update category | ✅ |
| DELETE | `/category/:id` | Delete category | ✅ |
| GET | `/category/type/:type` | Get categories by type | ❌ |
| GET | `/category/hierarchy/all` | Get complete hierarchy | ❌ |

**Example Response:**
```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "id": "cat_123",
    "name": "Electronics",
    "type": "SHOP_CATEGORY",
    "status": "ACTIVE",
    "createdAt": "2025-09-29T15:30:00.000Z"
  }
}
```

### 🏘️ **Village APIs** (`/villages`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/villages` | Create village | ✅ |
| GET | `/villages` | Get all villages | ❌ |
| GET | `/villages/:id` | Get village by ID | ❌ |
| PATCH | `/villages/:id` | Update village | ✅ |
| DELETE | `/villages/:id` | Delete village | ✅ |

### 💬 **Chat APIs** (`/chat`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/chat/create` | Create chat | ✅ |
| POST | `/chat/addUserToChat` | Add user to chat | ✅ |
| POST | `/chat/removeUserFromChat` | Remove user from chat | ✅ |
| POST | `/chat/leaveChat` | Leave chat | ✅ |
| POST | `/chat/makeModerator` | Make user moderator | ✅ |
| POST | `/chat/updateUserStatus` | Update user status | ✅ |
| POST | `/chat/addUser` | Add user | ✅ |
| POST | `/chat/markChatFavourtie` | Mark chat as favorite | ✅ |
| GET | `/chat/getAllUsers` | Get all users | ✅ |
| GET | `/chat/getAllChats` | Get all chats | ✅ |
| GET | `/chat/getChatMessages` | Get chat messages | ✅ |
| GET | `/chat/getReadMessages` | Get read messages | ✅ |
| GET | `/chat/getUserProfile` | Get user profile | ✅ |
| POST | `/chat/updateUserProfile` | Update user profile | ✅ |
| POST | `/chat/updateChat` | Update chat | ✅ |

### 📝 **Post APIs** (`/post`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/post/createPost` | Create post | ✅ |
| GET | `/post/getAllPosts` | Get all posts | ❌ |
| GET | `/post/getPostById` | Get post by ID | ❌ |
| POST | `/post/deletePostById` | Delete post | ✅ |
| POST | `/post/updatePostById` | Update post | ✅ |

### 📦 **Order APIs** (`/order`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/order/createOrder` | Create order | ✅ |
| GET | `/order/getAllOrders` | Get all orders | ✅ |
| GET | `/order/getOrderById` | Get order by ID | ✅ |
| POST | `/order/deleteOrderById` | Delete order | ✅ |
| POST | `/order/updateOrderById` | Update order | ✅ |

### 💬 **Comment APIs** (`/comment`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/comment/createComment` | Create comment | ✅ |
| GET | `/comment/getAllComments` | Get all comments | ❌ |
| GET | `/comment/getCommentById` | Get comment by ID | ❌ |
| POST | `/comment/deleteCommentById` | Delete comment | ✅ |
| POST | `/comment/updateCommentById` | Update comment | ✅ |

### 📁 **Media Upload APIs** (`/media-upload`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/media-upload/mediaFiles/:folderName` | Upload media files | ✅ |
| GET | `/media-upload/mediaFiles/:folderName/:fileName` | Get media file | ❌ |

---

## 🔍 **Advanced Filtering Examples**

### Product Filtering
```bash
# Get products with price range
GET /products?minPrice=1000&maxPrice=50000

# Search products
GET /products?search=iPhone

# Filter by category and status
GET /products?productCategoryId=cat_123&status=ACTIVE

# Sort by price (ascending)
GET /products?sortBy=price&sortOrder=asc

# Pagination
GET /products?limit=20&offset=40
```

### Shop Filtering
```bash
# Get shops by village
GET /shop?villageId=village_123

# Get shops by category
GET /shop?categoryId=cat_123

# Search shops
GET /shop?search=electronics
```

### Category Filtering
```bash
# Get categories by type
GET /category?type=SHOP_CATEGORY

# Get product categories under a shop category
GET /category?shopCategoryId=cat_123

# Search categories
GET /category?search=electronics
```

---

## 🚀 **Key Features**

### ✅ **Consistent Response Format**
- All APIs return the same structure: `{ success, message, data }`
- Standardized error handling
- Consistent HTTP status codes

### ✅ **Authentication & Authorization**
- JWT-based authentication
- Role-based access control
- Shop ownership validation for products

### ✅ **Advanced Filtering**
- Multiple filter options
- Search functionality
- Sorting and pagination
- Date range filtering

### ✅ **Data Relationships**
- Populated shop owner information
- Category hierarchy support
- Full product details with shop info

### ✅ **Validation & Security**
- Input validation with class-validator
- SKU uniqueness validation
- Shop ownership checks
- Password security

### ✅ **Performance Optimization**
- Database indexes for fast queries
- Efficient population of related data
- Pagination support

---

## 📊 **Database Models**

### User Model
- Authentication fields (email, password)
- Profile information (fullName, phoneNumber, etc.)
- Shopping app fields (userRole, userStatus, etc.)

### Shop Model
- Shop details (name, description, images)
- Owner relationship
- Category and village references
- Status and verification

### Product Model
- Product information (name, description, images)
- Pricing and inventory
- Category relationships
- Shop ownership
- Advanced attributes (brand, model, etc.)

### Category Model
- Hierarchical structure (3 levels)
- Type-based organization
- Parent-child relationships

---

## 🎯 **Usage Examples**

### Creating a Complete Product
```bash
# 1. Create shop category
POST /category
{
  "name": "Electronics",
  "type": "SHOP_CATEGORY"
}

# 2. Create product category
POST /category
{
  "name": "Mobile Phones",
  "type": "PRODUCT_CATEGORY",
  "shopCategoryId": "cat_123"
}

# 3. Create shop
POST /shop/create
{
  "shopName": "Tech Store",
  "villageId": "village_123",
  "categoryId": "cat_123"
}

# 4. Create product
POST /products
{
  "shopId": "shop_123",
  "shopCategoryId": "cat_123",
  "productCategoryId": "cat_456",
  "name": "iPhone 15",
  "price": 150000,
  "stock": 10,
  "images": ["https://example.com/image.jpg"]
}
```

This comprehensive API system provides a complete e-commerce backend with consistent responses, advanced filtering, and proper authentication! 🚀

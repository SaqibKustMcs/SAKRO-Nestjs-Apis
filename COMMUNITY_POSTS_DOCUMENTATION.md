# Community Posts API Documentation

## Overview
This document describes the Community Posts module that allows users to create, manage, and interact with various types of community posts including text posts, image/video posts, and poll-style question posts.

## Features
- **Text Posts**: Simple text-based posts
- **Image Posts**: Posts with images and optional text
- **Video Posts**: Posts with videos and optional text
- **Question Posts**: Poll-style posts with multiple choice options and voting
- **Voting System**: One vote per user per question post
- **Filtering & Pagination**: Advanced filtering and pagination for post listings
- **Ownership Control**: Only post owners can update/delete their posts

## Quick Start Guide

### Creating Different Post Types

**Choose the appropriate request body based on your post type:**

| Post Type | Minimal Required Fields |
|-----------|------------------------|
| **Text** | `villageId`, `type: "text"`, `text` |
| **Image** | `villageId`, `type: "image"`, `mediaUrl`, `mediaType: "image"` |
| **Video** | `villageId`, `type: "video"`, `mediaUrl`, `mediaType: "video"` |
| **Question/Poll** | `villageId`, `type: "question"`, `question`, `options` (min 2) |

**See detailed examples in Section 1: Create Post below.**

## Database Schema

### Post Model
```typescript
{
  id: string;
  userId: string; // Reference to User
  villageId: string; // Reference to Village
  type: 'text' | 'image' | 'video' | 'question';
  text: string;
  mediaUrl: string;
  mediaType: 'image' | 'video' | null;
  question: string; // For question posts
  options: PostOption[]; // For question posts
  totalVotes: number; // For question posts
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### PostOption Model
```typescript
{
  id: string;
  text: string;
  votes: string[]; // Array of user IDs who voted
}
```

## API Endpoints

### 1. Create Post
**Endpoint:** `POST /posts`  
**Authentication:** Required (Bearer Token)  
**Description:** Create a new community post

#### Request Body Examples by Post Type

**Important:** Each post type requires different fields. Use the appropriate request body based on the type of post you're creating.

##### 1.1 Text Post
```json
{
  "villageId": "village123",
  "type": "text",
  "text": "Hello everyone! This is a simple text post about our community event."
}
```

**Required Fields:**
- `villageId` (string) - The village where the post is created
- `type` (string) - Must be `"text"`
- `text` (string) - The text content of the post

---

##### 1.2 Image Post
```json
{
  "villageId": "village123",
  "type": "image",
  "text": "Check out this amazing sunset from our village!",
  "mediaUrl": "https://example.com/images/sunset.jpg",
  "mediaType": "image"
}
```

**Required Fields:**
- `villageId` (string) - The village where the post is created
- `type` (string) - Must be `"image"`
- `mediaUrl` (string) - URL of the image
- `mediaType` (string) - Must be `"image"`

**Optional Fields:**
- `text` (string) - Caption or description for the image

---

##### 1.3 Video Post
```json
{
  "villageId": "village123",
  "type": "video",
  "text": "Watch this incredible performance at our annual festival!",
  "mediaUrl": "https://example.com/videos/festival2024.mp4",
  "mediaType": "video"
}
```

**Required Fields:**
- `villageId` (string) - The village where the post is created
- `type` (string) - Must be `"video"`
- `mediaUrl` (string) - URL of the video
- `mediaType` (string) - Must be `"video"`

**Optional Fields:**
- `text` (string) - Caption or description for the video

---

##### 1.4 Question Post (Poll)
```json
{
  "villageId": "village123",
  "type": "question",
  "text": "Let's decide together!",
  "question": "What should we do for the next community event?",
  "options": [
    { "text": "Picnic in the park" },
    { "text": "Movie night" },
    { "text": "Sports tournament" },
    { "text": "Art workshop" }
  ]
}
```

**Required Fields:**
- `villageId` (string) - The village where the post is created
- `type` (string) - Must be `"question"`
- `question` (string) - The question text for the poll
- `options` (array) - Array of option objects with at least 2 options
  - Each option must have a `text` field

**Optional Fields:**
- `text` (string) - Additional context or description for the poll

**Validation Rules:**
- Minimum 2 options required
- Maximum recommended: 5-6 options for better UX

#### Response
```json
{
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": "post123",
    "userId": "user123",
    "villageId": "village123",
    "type": "question",
    "text": "Optional text content",
    "mediaUrl": "https://example.com/image.jpg",
    "mediaType": "image",
    "question": "What is your favorite color?",
    "options": [
      {
        "id": "option1",
        "text": "Red",
        "voteCount": 0,
        "percentage": 0
      },
      {
        "id": "option2",
        "text": "Blue",
        "voteCount": 0,
        "percentage": 0
      },
      {
        "id": "option3",
        "text": "Green",
        "voteCount": 0,
        "percentage": 0
      }
    ],
    "totalVotes": 0,
    "isDeleted": false,
    "createdAt": "2025-09-29T10:00:00.000Z",
    "updatedAt": "2025-09-29T10:00:00.000Z"
  }
}
```

### 2. Get All Posts
**Endpoint:** `GET /posts`  
**Authentication:** Not required  
**Description:** Get all community posts with filtering and pagination

#### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | string | No | Filter by post type (text, image, video, question) |
| villageId | string | No | Filter by village ID |
| userId | string | No | Filter by user ID |
| search | string | No | Search in post text and questions |
| offset | number | No | Page offset (default: 0) |
| limit | number | No | Posts per page (default: 10, max: 100) |
| sortBy | string | No | Sort field (createdAt, totalVotes) |
| sortOrder | string | No | Sort order (asc, desc) |

#### Example Request
```
GET /posts?type=question&villageId=village123&limit=20&sortBy=totalVotes&sortOrder=desc
```

#### Response
```json
{
  "success": true,
  "message": "Posts retrieved successfully",
  "data": {
    "posts": [
      {
        "id": "post123",
        "userId": "user123",
        "villageId": "village123",
        "type": "question",
        "text": "What is your favorite color?",
        "options": [
          {
            "id": "option1",
            "text": "Red",
            "voteCount": 5,
            "percentage": 50
          },
          {
            "id": "option2",
            "text": "Blue",
            "voteCount": 3,
            "percentage": 30
          },
          {
            "id": "option3",
            "text": "Green",
            "voteCount": 2,
            "percentage": 20
          }
        ],
        "totalVotes": 10,
        "createdAt": "2025-09-29T10:00:00.000Z"
      }
    ],
    "total": 1,
    "offset": 0,
    "limit": 20
  }
}
```

### 3. Get Post by ID
**Endpoint:** `GET /posts/:id`  
**Authentication:** Not required  
**Description:** Get a specific post by ID

#### Response
```json
{
  "success": true,
  "message": "Post retrieved successfully",
  "data": {
    "id": "post123",
    "userId": "user123",
    "villageId": "village123",
    "type": "question",
    "text": "What is your favorite color?",
    "options": [
      {
        "id": "option1",
        "text": "Red",
        "voteCount": 5,
        "percentage": 50
      }
    ],
    "totalVotes": 10,
    "createdAt": "2025-09-29T10:00:00.000Z"
  }
}
```

### 4. Update Post
**Endpoint:** `PUT /posts/:id`  
**Authentication:** Required (Bearer Token)  
**Description:** Update a post (only owner or admin)

#### Request Body
```json
{
  "text": "Updated text content",
  "question": "Updated question text",
  "options": [
    { "text": "Updated Option 1" },
    { "text": "Updated Option 2" }
  ]
}
```

#### Response
```json
{
  "success": true,
  "message": "Post updated successfully",
  "data": {
    "id": "post123",
    "text": "Updated text content",
    "question": "Updated question text",
    "options": [
      {
        "id": "option1",
        "text": "Updated Option 1",
        "voteCount": 0,
        "percentage": 0
      }
    ],
    "updatedAt": "2025-09-29T11:00:00.000Z"
  }
}
```

### 5. Delete Post
**Endpoint:** `DELETE /posts/:id`  
**Authentication:** Required (Bearer Token)  
**Description:** Delete a post (only owner or admin)

#### Response
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

### 6. Vote on Post
**Endpoint:** `POST /posts/:id/vote`  
**Authentication:** Required (Bearer Token)  
**Description:** Vote on a question post (one vote per user)

#### Request Body
```json
{
  "optionId": "option1"
}
```

#### Response
```json
{
  "success": true,
  "message": "Vote recorded successfully",
  "data": {
    "id": "post123",
    "type": "question",
    "question": "What is your favorite color?",
    "options": [
      {
        "id": "option1",
        "text": "Red",
        "voteCount": 6,
        "percentage": 55
      },
      {
        "id": "option2",
        "text": "Blue",
        "voteCount": 3,
        "percentage": 27
      },
      {
        "id": "option3",
        "text": "Green",
        "voteCount": 2,
        "percentage": 18
      }
    ],
    "totalVotes": 11
  }
}
```

## Quick Reference: Request Body by Post Type

### Summary Table

| Post Type | Required Fields | Optional Fields | Example |
|-----------|----------------|-----------------|---------|
| **Text** | `villageId`, `type: "text"`, `text` | - | Simple text content |
| **Image** | `villageId`, `type: "image"`, `mediaUrl`, `mediaType: "image"` | `text` | Image with optional caption |
| **Video** | `villageId`, `type: "video"`, `mediaUrl`, `mediaType: "video"` | `text` | Video with optional caption |
| **Question** | `villageId`, `type: "question"`, `question`, `options` (min 2) | `text` | Poll with multiple choices |

### Full Examples

#### Text Post Example
```bash
curl -X POST http://localhost:3101/posts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "villageId": "village123",
    "type": "text",
    "text": "Hello everyone! Just wanted to share that our community garden is looking amazing this spring. Come visit if you can!"
  }'
```

#### Image Post Example
```bash
curl -X POST http://localhost:3101/posts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "villageId": "village123",
    "type": "image",
    "text": "Beautiful sunset from our village tonight! 🌅",
    "mediaUrl": "https://example.com/images/sunset-2024.jpg",
    "mediaType": "image"
  }'
```

#### Video Post Example
```bash
curl -X POST http://localhost:3101/posts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "villageId": "village123",
    "type": "video",
    "text": "Highlights from our annual festival! Great performances and amazing food!",
    "mediaUrl": "https://example.com/videos/festival-highlights.mp4",
    "mediaType": "video"
  }'
```

#### Question Post (Poll) Example
```bash
curl -X POST http://localhost:3101/posts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "villageId": "village123",
    "type": "question",
    "text": "Let'\''s decide our next community activity together!",
    "question": "What should we organize for the summer event?",
    "options": [
      { "text": "Outdoor movie night" },
      { "text": "BBQ picnic in the park" },
      { "text": "Sports tournament" },
      { "text": "Art & craft workshop" }
    ]
  }'
```

## Validation Rules

### Text Posts
- `text` field is required
- `villageId` is required

### Image/Video Posts
- `mediaUrl` is required
- `mediaType` is required
- `villageId` is required

### Question Posts
- `question` field is required
- `options` array is required with at least 2 options
- `villageId` is required

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Text content is required for text posts",
  "statusCode": 400
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Unauthorized",
  "statusCode": 401
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "You can only update your own posts",
  "statusCode": 403
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Post not found",
  "statusCode": 404
}
```

## Additional API Usage Examples

### Vote on a Poll
```bash
curl -X POST http://localhost:3101/posts/post123/vote \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "optionId": "option1"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Vote recorded successfully",
  "data": {
    "id": "post123",
    "hasVoted": true,
    "votedOptionId": "option1",
    "options": [
      {
        "id": "option1",
        "text": "Outdoor movie night",
        "voteCount": 15,
        "percentage": 45,
        "isVotedByCurrentUser": true
      }
    ]
  }
}
```

### Get All Posts with Filters
```bash
# Get all question posts in a village
curl "http://localhost:3101/posts?type=question&villageId=village123&limit=10&sortBy=totalVotes&sortOrder=desc"

# Search posts by text
curl "http://localhost:3101/posts?search=festival&limit=20"

# Get posts by specific user
curl "http://localhost:3101/posts?userId=user123"

# Get image posts only
curl "http://localhost:3101/posts?type=image&villageId=village123"
```

### Update a Post
```bash
curl -X PUT http://localhost:3101/posts/post123 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Updated post content with additional information"
  }'
```

### Delete a Post
```bash
curl -X DELETE http://localhost:3101/posts/post123 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Security Features

- **JWT Authentication**: Required for creating, updating, deleting posts and voting
- **Ownership Validation**: Only post owners can update/delete their posts
- **Input Validation**: Comprehensive validation using class-validator
- **One Vote Per User**: Users can only vote once per question post
- **Soft Delete**: Posts are soft deleted (marked as deleted, not removed)

## Performance Optimizations

- **Database Indexes**: Added indexes on userId, villageId, type, createdAt, isDeleted
- **Pagination**: Efficient pagination with offset/limit
- **Population**: Optimized population of user and village data
- **Vote Calculation**: Efficient vote count and percentage calculations

## Integration Notes

- **User Model**: Posts reference the User model for author information
- **Village Model**: Posts reference the Village model for location context
- **Consistent Response Format**: All APIs return consistent success/error format
- **Swagger Documentation**: Complete API documentation with examples

---

**Note**: This Community Posts module provides a complete social media-like experience within the village community context, supporting various content types and interactive features like voting on polls.

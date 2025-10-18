# 💬 Chat API Documentation

## Overview
This document describes the new Chat feature API endpoints for buyer-seller communication within shops. The system supports real-time messaging via WebSocket connections and REST API endpoints.

## 🔧 Features
- ✅ Create chat rooms between buyers and sellers
- ✅ Send/receive messages (text, image, video, file, voice)
- ✅ Real-time messaging via WebSocket
- ✅ Message read receipts
- ✅ Unread message counts
- ✅ Typing indicators
- ✅ Message deletion
- ✅ Chat room management

## 📡 REST API Endpoints

### Base URL
```
http://192.168.18.32:3101/chat
```

### Authentication
All endpoints require JWT authentication via `Authorization: Bearer <token>` header.

---

## 🏠 Chat Room Management

### 1. Create Chat Room
**POST** `/chat/create`

Creates a new chat room between buyer and seller.

**Request Body:**
```json
{
  "buyerId": "64f1a2b3c4d5e6f7g8h9i0j1",
  "sellerId": "64f1a2b3c4d5e6f7g8h9i0j2", 
  "shopId": "64f1a2b3c4d5e6f7g8h9i0j3"
}
```

**Response:**
```json
{
  "success": true,
  "chatRoomId": "64f1a2b3c4d5e6f7g8h9i0j4",
  "message": "Chat room created successfully"
}
```

### 2. Get Chat Rooms
**GET** `/chat/list/:userId`

Gets all chat rooms for a user (as buyer or seller).

**Response:**
```json
[
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j4",
    "buyer": {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "name": "John Doe",
      "fullName": "John Doe",
      "profilePic": "https://example.com/profile.jpg"
    },
    "seller": {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
      "name": "Jane Smith",
      "fullName": "Jane Smith", 
      "profilePic": "https://example.com/seller.jpg"
    },
    "shop": {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j3",
      "shopName": "Fashion Store",
      "profileImage": "https://example.com/shop.jpg"
    },
    "lastMessage": {
      "content": "Hello, I'm interested in this product!",
      "messageType": "text",
      "senderId": "64f1a2b3c4d5e6f7g8h9i0j1",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    "unreadCount": {
      "buyer": 0,
      "seller": 2
    },
    "isActive": true,
    "createdAt": "2024-01-15T10:00:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

### 3. Get or Create Chat Room
**POST** `/chat/get-or-create`

Gets existing chat room or creates new one if it doesn't exist.

**Request Body:**
```json
{
  "buyerId": "64f1a2b3c4d5e6f7g8h9i0j1",
  "sellerId": "64f1a2b3c4d5e6f7g8h9i0j2",
  "shopId": "64f1a2b3c4d5e6f7g8h9i0j3"
}
```

**Response:**
```json
{
  "chatRoomId": "64f1a2b3c4d5e6f7g8h9i0j4"
}
```

---

## 💬 Message Management

### 4. Send Message
**POST** `/chat/message`

Sends a message in a chat room.

**Request Body:**
```json
{
  "chatRoomId": "64f1a2b3c4d5e6f7g8h9i0j4",
  "senderId": "64f1a2b3c4d5e6f7g8h9i0j1",
  "receiverId": "64f1a2b3c4d5e6f7g8h9i0j2",
  "messageType": "text",
  "messageContent": "Hello, I'm interested in this product!",
  "mediaUrl": "https://example.com/image.jpg",
  "replyTo": "64f1a2b3c4d5e6f7g8h9i0j5",
  "metadata": {
    "fileName": "product_image.jpg",
    "fileSize": 1024000,
    "duration": 30,
    "thumbnail": "https://example.com/thumb.jpg"
  }
}
```

**Message Types:**
- `text` - Text message
- `image` - Image message
- `video` - Video message  
- `file` - File attachment
- `voice` - Voice message

**Response:**
```json
{
  "success": true,
  "messageId": "64f1a2b3c4d5e6f7g8h9i0j6",
  "message": "Message sent successfully"
}
```

### 5. Get Messages
**GET** `/chat/messages/:chatRoomId`

Gets all messages in a chat room.

**Response:**
```json
[
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j6",
    "chatRoomId": "64f1a2b3c4d5e6f7g8h9i0j4",
    "sender": {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "name": "John Doe",
      "fullName": "John Doe",
      "profilePic": "https://example.com/profile.jpg"
    },
    "receiver": {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
      "name": "Jane Smith",
      "fullName": "Jane Smith",
      "profilePic": "https://example.com/seller.jpg"
    },
    "messageType": "text",
    "messageContent": "Hello, I'm interested in this product!",
    "mediaUrl": "",
    "isRead": false,
    "readAt": null,
    "replyTo": null,
    "metadata": {},
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

### 6. Mark Messages as Read
**POST** `/chat/messages/:chatRoomId/read`

Marks all messages in a chat room as read for the current user.

**Response:**
```json
{
  "success": true,
  "message": "Messages marked as read"
}
```

### 7. Delete Message
**POST** `/chat/message/:messageId/delete`

Deletes a message (soft delete).

**Response:**
```json
{
  "success": true,
  "message": "Message deleted successfully"
}
```

### 8. Get Unread Count
**GET** `/chat/unread-count/:userId`

Gets total unread message count for a user.

**Response:**
```json
{
  "unreadCount": 5
}
```

### 9. Deactivate Chat Room
**POST** `/chat/room/:chatRoomId/deactivate`

Deactivates a chat room.

**Response:**
```json
{
  "success": true,
  "message": "Chat room deactivated"
}
```

---

## 🔌 WebSocket Events

### Connection
Connect to WebSocket namespace: `/chat`

**Authentication:**
```javascript
const socket = io('http://192.168.18.32:3101/chat', {
  auth: {
    token: 'your-jwt-token'
  }
});
```

### Client Events (Send to Server)

#### 1. Join Chat Room
```javascript
socket.emit('join_chat_room', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4'
});
```

#### 2. Leave Chat Room
```javascript
socket.emit('leave_chat_room', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4'
});
```

#### 3. Send Message
```javascript
socket.emit('send_message', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4',
  senderId: '64f1a2b3c4d5e6f7g8h9i0j1',
  receiverId: '64f1a2b3c4d5e6f7g8h9i0j2',
  messageType: 'text',
  messageContent: 'Hello!'
});
```

#### 4. Typing Start
```javascript
socket.emit('typing_start', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4',
  userId: '64f1a2b3c4d5e6f7g8h9i0j1'
});
```

#### 5. Typing Stop
```javascript
socket.emit('typing_stop', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4',
  userId: '64f1a2b3c4d5e6f7g8h9i0j1'
});
```

#### 6. Mark Messages Read
```javascript
socket.emit('mark_messages_read', {
  chatRoomId: '64f1a2b3c4d5e6f7g8h9i0j4'
});
```

### Server Events (Receive from Server)

#### 1. New Message
```javascript
socket.on('new_message', (message) => {
  console.log('New message:', message);
  // Update UI with new message
});
```

#### 2. User Typing
```javascript
socket.on('user_typing', (data) => {
  console.log('User typing:', data);
  // Show typing indicator
});
```

#### 3. Messages Read
```javascript
socket.on('messages_read', (data) => {
  console.log('Messages read:', data);
  // Update read status
});
```

#### 4. Chat Room Update
```javascript
socket.on('chat_room_update', (chatRoom) => {
  console.log('Chat room updated:', chatRoom);
  // Update chat room list
});
```

#### 5. Unread Count Update
```javascript
socket.on('unread_count_update', (data) => {
  console.log('Unread count:', data.unreadCount);
  // Update unread badge
});
```

#### 6. Connection Events
```javascript
socket.on('joined_chat_room', (data) => {
  console.log('Joined chat room:', data.chatRoomId);
});

socket.on('left_chat_room', (data) => {
  console.log('Left chat room:', data.chatRoomId);
});

socket.on('error', (error) => {
  console.error('Socket error:', error);
});
```

---

## 🗄️ Database Schema

### ChatRoom Collection
```javascript
{
  _id: String,
  buyerId: String (ref: User),
  sellerId: String (ref: User),
  shopId: String (ref: Shop),
  lastMessage: {
    content: String,
    messageType: String,
    senderId: String,
    timestamp: Date
  },
  unreadCount: {
    buyer: Number,
    seller: Number
  },
  isActive: Boolean,
  participants: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Message Collection
```javascript
{
  _id: String,
  chatRoomId: String (ref: ChatRoom),
  senderId: String (ref: User),
  receiverId: String (ref: User),
  messageType: String,
  messageContent: String,
  mediaUrl: String,
  isRead: Boolean,
  readAt: Date,
  isDeleted: Boolean,
  deletedAt: Date,
  replyTo: String (ref: Message),
  metadata: {
    fileName: String,
    fileSize: Number,
    duration: Number,
    thumbnail: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚀 Frontend Integration Example

### React/JavaScript Example
```javascript
import io from 'socket.io-client';

class ChatService {
  constructor() {
    this.socket = null;
    this.token = localStorage.getItem('authToken');
  }

  connect() {
    this.socket = io('http://192.168.18.32:3101/chat', {
      auth: { token: this.token }
    });

    this.socket.on('connect', () => {
      console.log('Connected to chat server');
    });

    this.socket.on('new_message', (message) => {
      // Handle new message
      this.onNewMessage(message);
    });

    this.socket.on('user_typing', (data) => {
      // Handle typing indicator
      this.onUserTyping(data);
    });
  }

  joinChatRoom(chatRoomId) {
    this.socket.emit('join_chat_room', { chatRoomId });
  }

  sendMessage(messageData) {
    this.socket.emit('send_message', messageData);
  }

  startTyping(chatRoomId, userId) {
    this.socket.emit('typing_start', { chatRoomId, userId });
  }

  stopTyping(chatRoomId, userId) {
    this.socket.emit('typing_stop', { chatRoomId, userId });
  }
}
```

---

## 🔒 Security Features

- ✅ JWT Authentication required for all endpoints
- ✅ User authorization checks (users can only access their own data)
- ✅ Input validation and sanitization
- ✅ Rate limiting (recommended to implement)
- ✅ CORS configuration for WebSocket connections

---

## 📝 Error Handling

### Common Error Responses
```json
{
  "statusCode": 400,
  "message": "Bad request - Invalid data",
  "error": "Bad Request"
}
```

### Error Codes
- `400` - Bad Request (Invalid data)
- `401` - Unauthorized (Missing/invalid token)
- `403` - Forbidden (Access denied)
- `404` - Not Found (Resource doesn't exist)
- `409` - Conflict (Chat room already exists)
- `500` - Internal Server Error

---

## 🧪 Testing

### Test Chat Room Creation
```bash
curl -X POST http://192.168.18.32:3101/chat/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "buyerId": "64f1a2b3c4d5e6f7g8h9i0j1",
    "sellerId": "64f1a2b3c4d5e6f7g8h9i0j2",
    "shopId": "64f1a2b3c4d5e6f7g8h9i0j3"
  }'
```

### Test Send Message
```bash
curl -X POST http://192.168.18.32:3101/chat/message \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "chatRoomId": "64f1a2b3c4d5e6f7g8h9i0j4",
    "senderId": "64f1a2b3c4d5e6f7g8h9i0j1",
    "receiverId": "64f1a2b3c4d5e6f7g8h9i0j2",
    "messageType": "text",
    "messageContent": "Hello, I am interested in this product!"
  }'
```

---

## 📋 Implementation Checklist

### Backend ✅
- [x] Chat room schema and model
- [x] Message schema and model  
- [x] Chat service with all methods
- [x] Chat controller with REST endpoints
- [x] WebSocket gateway for real-time messaging
- [x] JWT authentication integration
- [x] Error handling and validation
- [x] Database indexes for performance

### Frontend (To be implemented)
- [ ] Chat UI components
- [ ] WebSocket client integration
- [ ] Message list and input components
- [ ] Typing indicators
- [ ] Read receipts
- [ ] Unread count badges
- [ ] Chat room list
- [ ] Media message support

---

## 🎯 Next Steps

1. **Frontend Integration**: Implement chat UI in Flutter app
2. **Media Upload**: Integrate with existing media upload service
3. **Push Notifications**: Add push notifications for new messages
4. **Message Search**: Implement message search functionality
5. **File Sharing**: Add support for file attachments
6. **Voice Messages**: Implement voice message recording/playback
7. **Message Encryption**: Add end-to-end encryption (optional)

---

*This documentation covers the complete Chat API implementation. The system is ready for frontend integration and testing.*

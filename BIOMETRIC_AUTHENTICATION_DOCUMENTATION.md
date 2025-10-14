# Biometric Authentication API Documentation

## Overview
This document describes the biometric authentication feature that allows users to enable/disable biometric authentication for their accounts.

## Database Schema Changes

### User Model Updates
The User model has been updated to include a new field:

```typescript
// Biometric Authentication field
isBiometric: { type: Boolean, default: false }
```

## API Endpoints

### Update Biometric Status
**Endpoint:** `PUT /auth/biometric-status`  
**Authentication:** Required (Bearer Token)  
**Description:** Enable or disable biometric authentication for the authenticated user.

#### Request Body
```json
{
  "isBiometric": true
}
```

#### Request Parameters
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| isBiometric | boolean | Yes | Enable (true) or disable (false) biometric authentication |

#### Response Format
```json
{
  "success": true,
  "message": "Biometric authentication enabled successfully",
  "data": {
    "isBiometric": true
  }
}
```

#### Response Codes
- **200 OK**: Biometric status updated successfully
- **400 Bad Request**: Invalid input data
- **401 Unauthorized**: Invalid or missing authentication token
- **404 Not Found**: User not found

## Usage Examples

### Enable Biometric Authentication
```bash
curl -X PUT http://localhost:3101/auth/biometric-status \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"isBiometric": true}'
```

### Disable Biometric Authentication
```bash
curl -X PUT http://localhost:3101/auth/biometric-status \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"isBiometric": false}'
```

## Implementation Details

### Files Modified/Created

1. **User Schema** (`src/schema/user/user.schema.ts`)
   - Added `isBiometric` field with default value `false`

2. **User Interface** (`src/interface/user/user.interface.ts`)
   - Added `isBiometric: boolean` property

3. **Biometric DTO** (`src/auth/dto/biometric.dto.ts`)
   - `UpdateBiometricStatusDTO`: Request validation
   - `BiometricResponseDTO`: Response structure

4. **Auth Service** (`src/auth/auth.service.ts`)
   - Added `updateBiometricStatus()` method

5. **Auth Controller** (`src/auth/auth.controller.ts`)
   - Added `PUT /auth/biometric-status` endpoint

### Validation Rules
- `isBiometric` must be a boolean value
- User must be authenticated
- User must exist in the database

### Security Considerations
- Endpoint is protected by JWT authentication
- Only authenticated users can update their biometric status
- Input validation prevents invalid data types

## Testing

### Test Script
A test script is provided at `test-biometric.js` that demonstrates:
- Enabling biometric authentication
- Disabling biometric authentication
- Error handling for invalid inputs

### Running Tests
```bash
node test-biometric.js
```

## Integration with Mobile Apps

### Flutter/Dart Example
```dart
// Enable biometric authentication
Future<Map<String, dynamic>> enableBiometric() async {
  final response = await http.put(
    Uri.parse('$baseUrl/auth/biometric-status'),
    headers: {
      'Authorization': 'Bearer $token',
      'Content-Type': 'application/json',
    },
    body: jsonEncode({'isBiometric': true}),
  );
  
  return jsonDecode(response.body);
}
```

### React Native Example
```javascript
// Update biometric status
const updateBiometricStatus = async (isEnabled) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/biometric-status`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isBiometric: isEnabled }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating biometric status:', error);
  }
};
```

## Future Enhancements

1. **Biometric Login Endpoint**: Create a dedicated login endpoint that requires biometric verification
2. **Biometric Data Storage**: Store encrypted biometric templates (if needed)
3. **Audit Logging**: Log biometric authentication attempts
4. **Device Binding**: Associate biometric settings with specific devices
5. **Fallback Options**: Provide alternative authentication methods when biometric fails

## Error Handling

### Common Error Scenarios
1. **Invalid Token**: User must re-authenticate
2. **User Not Found**: Database inconsistency
3. **Invalid Input**: Client-side validation should prevent this
4. **Network Issues**: Implement retry logic in mobile apps

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

## Security Best Practices

1. **Token Validation**: Always validate JWT tokens on the server
2. **Input Sanitization**: Validate all input data
3. **Rate Limiting**: Implement rate limiting for authentication endpoints
4. **Audit Trail**: Log all biometric status changes
5. **Encryption**: Consider encrypting biometric-related data in transit and at rest

---

**Note**: This biometric authentication system provides the foundation for mobile app integration. The actual biometric verification (fingerprint, face recognition, etc.) should be handled by the mobile device's native biometric APIs.


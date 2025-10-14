# Poll Voting System - Frontend Integration Guide

## Overview
This guide explains how to integrate the poll voting system in your frontend application. The API now returns voting information that helps you display polls differently before and after a user votes.

## Key Features

### Before User Votes
- Show only option text without percentages
- Hide vote counts
- Display vote button/option selectors
- No indication of which option has more votes

### After User Votes
- Show vote percentages for each option
- Show vote counts
- Highlight the user's selected option
- Disable voting (user already voted)

## API Response Structure

### Question Post Response (Before Voting)
When a user **hasn't voted yet**:

```json
{
  "success": true,
  "message": "Posts retrieved successfully",
  "data": {
    "id": "post123",
    "type": "question",
    "question": "What is your favorite color?",
    "hasVoted": false,
    "votedOptionId": null,
    "options": [
      {
        "id": "option1",
        "text": "Red",
        "voteCount": 10,
        "percentage": 50,
        "isVotedByCurrentUser": false
      },
      {
        "id": "option2",
        "text": "Blue",
        "voteCount": 6,
        "percentage": 30,
        "isVotedByCurrentUser": false
      },
      {
        "id": "option3",
        "text": "Green",
        "voteCount": 4,
        "percentage": 20,
        "isVotedByCurrentUser": false
      }
    ],
    "totalVotes": 20
  }
}
```

### Question Post Response (After Voting)
When a user **has voted**:

```json
{
  "success": true,
  "message": "Posts retrieved successfully",
  "data": {
    "id": "post123",
    "type": "question",
    "question": "What is your favorite color?",
    "hasVoted": true,
    "votedOptionId": "option1",
    "options": [
      {
        "id": "option1",
        "text": "Red",
        "voteCount": 11,
        "percentage": 52,
        "isVotedByCurrentUser": true
      },
      {
        "id": "option2",
        "text": "Blue",
        "voteCount": 6,
        "percentage": 29,
        "isVotedByCurrentUser": false
      },
      {
        "id": "option3",
        "text": "Green",
        "voteCount": 4,
        "percentage": 19,
        "isVotedByCurrentUser": false
      }
    ],
    "totalVotes": 21
  }
}
```

## Frontend Implementation Examples

### React Example

```jsx
import React from 'react';

const PollPost = ({ post }) => {
  const handleVote = async (optionId) => {
    try {
      const response = await fetch(`/api/posts/${post.id}/vote`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ optionId })
      });
      
      const result = await response.json();
      // Update the post with new data
      updatePost(result.data);
    } catch (error) {
      console.error('Failed to vote:', error);
    }
  };

  return (
    <div className="poll-post">
      <h3>{post.question}</h3>
      
      {/* Before voting: Show clickable options */}
      {!post.hasVoted && (
        <div className="poll-options">
          {post.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              className="poll-option"
            >
              {option.text}
            </button>
          ))}
          <p className="poll-info">{post.totalVotes} votes</p>
        </div>
      )}
      
      {/* After voting: Show results with percentages */}
      {post.hasVoted && (
        <div className="poll-results">
          {post.options.map((option) => (
            <div
              key={option.id}
              className={`poll-result ${option.isVotedByCurrentUser ? 'voted' : ''}`}
            >
              <div className="option-text">
                {option.text}
                {option.isVotedByCurrentUser && <span className="checkmark">✓</span>}
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${option.percentage}%` }}
                />
              </div>
              <div className="vote-stats">
                {option.percentage}% ({option.voteCount} votes)
              </div>
            </div>
          ))}
          <p className="poll-info">{post.totalVotes} total votes</p>
        </div>
      )}
    </div>
  );
};
```

### Flutter/Dart Example

```dart
class PollPost extends StatelessWidget {
  final Post post;
  final Function(String) onVote;

  const PollPost({required this.post, required this.onVote});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              post.question,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 16),
            
            // Before voting: Show clickable options
            if (!post.hasVoted)
              ...post.options.map((option) => 
                GestureDetector(
                  onTap: () => onVote(option.id),
                  child: Container(
                    margin: EdgeInsets.only(bottom: 8),
                    padding: EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.blue),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(option.text),
                  ),
                ),
              ).toList(),
            
            // After voting: Show results with percentages
            if (post.hasVoted)
              ...post.options.map((option) => 
                Container(
                  margin: EdgeInsets.only(bottom: 12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            option.text,
                            style: TextStyle(
                              fontWeight: option.isVotedByCurrentUser 
                                ? FontWeight.bold 
                                : FontWeight.normal,
                            ),
                          ),
                          if (option.isVotedByCurrentUser)
                            Icon(Icons.check_circle, color: Colors.green),
                          Text('${option.percentage}%'),
                        ],
                      ),
                      SizedBox(height: 4),
                      LinearProgressIndicator(
                        value: option.percentage / 100,
                        backgroundColor: Colors.grey[300],
                        valueColor: AlwaysStoppedAnimation<Color>(
                          option.isVotedByCurrentUser 
                            ? Colors.blue 
                            : Colors.grey,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        '${option.voteCount} votes',
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                    ],
                  ),
                ),
              ).toList(),
            
            Text(
              '${post.totalVotes} total votes',
              style: TextStyle(color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Vue.js Example

```vue
<template>
  <div class="poll-post">
    <h3>{{ post.question }}</h3>
    
    <!-- Before voting: Show clickable options -->
    <div v-if="!post.hasVoted" class="poll-options">
      <button
        v-for="option in post.options"
        :key="option.id"
        @click="handleVote(option.id)"
        class="poll-option"
      >
        {{ option.text }}
      </button>
      <p class="poll-info">{{ post.totalVotes }} votes</p>
    </div>
    
    <!-- After voting: Show results with percentages -->
    <div v-else class="poll-results">
      <div
        v-for="option in post.options"
        :key="option.id"
        :class="['poll-result', { voted: option.isVotedByCurrentUser }]"
      >
        <div class="option-text">
          {{ option.text }}
          <span v-if="option.isVotedByCurrentUser" class="checkmark">✓</span>
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${option.percentage}%` }"
          />
        </div>
        <div class="vote-stats">
          {{ option.percentage }}% ({{ option.voteCount }} votes)
        </div>
      </div>
      <p class="poll-info">{{ post.totalVotes }} total votes</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  methods: {
    async handleVote(optionId) {
      try {
        const response = await fetch(`/api/posts/${this.post.id}/vote`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ optionId })
        });
        
        const result = await response.json();
        // Emit event to update the post
        this.$emit('update-post', result.data);
      } catch (error) {
        console.error('Failed to vote:', error);
      }
    }
  }
};
</script>
```

## API Fields Explanation

### Post Level Fields
- **`hasVoted`** (boolean): `true` if the current user has voted on this poll, `false` otherwise
- **`votedOptionId`** (string | null): The ID of the option the current user voted for, or `null` if they haven't voted
- **`totalVotes`** (number): Total number of votes across all options

### Option Level Fields
- **`id`** (string): Unique identifier for the option
- **`text`** (string): The option text to display
- **`voteCount`** (number): Number of users who voted for this option
- **`percentage`** (number): Percentage of total votes (0-100)
- **`isVotedByCurrentUser`** (boolean): `true` if the current user voted for this option

## Best Practices

### 1. Conditional Rendering
```javascript
// Only show percentages after user votes
if (post.hasVoted) {
  // Show results with percentages
} else {
  // Show clickable options without results
}
```

### 2. Visual Feedback
- Highlight the user's selected option with a different color or checkmark
- Use progress bars to visualize percentages
- Disable voting button after user votes

### 3. Real-time Updates
After a user votes:
```javascript
// The vote API returns the updated post with new percentages
const response = await voteOnPost(postId, optionId);
// Update your local state with the new data
setPost(response.data);
```

### 4. Handle Anonymous Users
```javascript
// For unauthenticated users, hasVoted will be false
// and all isVotedByCurrentUser will be false
if (!userIsAuthenticated) {
  // Show "Login to vote" message
  // Or hide vote counts and percentages entirely
}
```

## CSS Example

```css
/* Before voting */
.poll-option {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.poll-option:hover {
  border-color: #007bff;
  background: #f0f8ff;
}

/* After voting */
.poll-result {
  margin: 12px 0;
  padding: 12px;
  border-radius: 8px;
  background: #f5f5f5;
}

.poll-result.voted {
  background: #e3f2fd;
  border: 2px solid #2196f3;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
}

.progress-fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.5s ease;
}

.poll-result.voted .progress-fill {
  background: #2196f3;
}

.checkmark {
  color: #4caf50;
  font-weight: bold;
  margin-left: 8px;
}
```

## Testing the API

### Get Posts (with voting status)
```bash
# If authenticated
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3101/posts?type=question

# Without authentication (won't show voting status)
curl http://localhost:3101/posts?type=question
```

### Vote on a Poll
```bash
curl -X POST http://localhost:3101/posts/post123/vote \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"optionId": "option1"}'
```

## Summary

The API now provides all the information you need to:
1. **Check if a user has voted**: Use `post.hasVoted`
2. **Find which option they voted for**: Use `post.votedOptionId`
3. **Highlight their selection**: Use `option.isVotedByCurrentUser`
4. **Show/hide results**: Based on `hasVoted` status
5. **Display vote statistics**: Use `voteCount` and `percentage`

This allows you to create a LinkedIn-style polling experience where users only see results after they vote!

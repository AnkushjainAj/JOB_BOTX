# Google Drive API Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Google Cloud Console Setup

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project** or select existing one
3. **Enable Google Drive API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

### Step 2: Create Credentials

#### API Key (for public access)
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key

#### OAuth 2.0 Client ID (for user authentication)
1. Click "Create Credentials" > "OAuth 2.0 Client ID"
2. Choose "Web application"
3. Add your domain to "Authorized JavaScript origins":
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
4. Copy the Client ID

### Step 3: Environment Variables

Create `.env.local` file in your project root:

```env
NEXT_PUBLIC_GOOGLE_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
```

### Step 4: Test the Setup

1. **Start your development server**: `npm run dev`
2. **Upload a resume** - it will prompt for Google sign-in
3. **Check Google Drive** - you should see a "Job BotX Resumes" folder with your file

## 🔧 How It Works

1. **User selects resume** → Triggers upload
2. **Google authentication** → User signs in to Google
3. **Direct upload** → File goes directly to Google Drive
4. **Get shareable link** → Returns `https://drive.google.com/open?id=...`
5. **Display link** → Shows in UI immediately

## ✅ Benefits vs Google Apps Script

- **No server needed** - Direct browser to Google Drive
- **Better error handling** - Clear error messages
- **Faster uploads** - No intermediate server
- **Real-time feedback** - Immediate upload status
- **More reliable** - Uses official Google APIs

## 🛠️ Troubleshooting

### "Authentication failed"
- Check if OAuth Client ID is correct
- Verify domain is in authorized origins
- Make sure user grants Drive permissions

### "Quota exceeded"
- Google Drive has daily upload limits
- Wait 24 hours or upgrade Google account

### "Network error"
- Check internet connection
- Verify API key is valid
- Ensure Google Drive API is enabled

## 🔒 Security Notes

- API keys are public (safe for frontend)
- OAuth handles secure authentication
- Files are uploaded to user's own Google Drive
- No server-side storage of credentials needed

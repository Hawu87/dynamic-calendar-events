# Deployment Guide

## Architecture
- **Backend**: Python FastAPI on Render
- **Frontend**: Static HTML/JS on Vercel

## Step 1: Deploy Backend (Render)

1. **Sign up at [render.com](https://render.com)**
2. **Connect your GitHub repository**
3. **Create new Web Service**:
   - Repository: `your-github-username/dynamic-calendar-events`
   - Branch: `main`
   - Root Directory: Leave empty
   - Runtime: `Python 3`
   - Build Command: `cd backend && pip install -r requirements.txt`
   - Start Command: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Set Environment Variables**:
   - Go to Environment tab
   - Add: `FINNHUB_API_KEY` = `your_api_key_from_finnhub.io`

5. **Get your backend URL** (will be something like `https://dynamic-calendar-backend-xxx.onrender.com`)

## Step 2: Update Frontend with Backend URL

Update `FRONTEND/index.js` line 9 with your actual Render backend URL:
```javascript
: 'https://your-actual-backend-url.onrender.com';
```

## Step 3: Deploy Frontend (Vercel)

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Vercel will auto-detect the configuration from `vercel.json`**
4. **Deploy!**

## Step 4: Get API Key

1. **Sign up at [finnhub.io](https://finnhub.io/)**
2. **Get your free API key**
3. **Add it to Render environment variables**

## Testing

- Backend health: `https://your-backend-url.onrender.com/api/ipos`
- Frontend: `https://your-frontend-url.vercel.app`
- Download test: Click "Download IPO Calendar" button

## Notes

- Backend may sleep on free tier (wakes up in ~30s on first request)
- Frontend deploys instantly on every git push
- Both services have generous free tiers
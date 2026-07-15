# Boomn website redesign

A responsive Next.js redesign for Boomn, ready for GitHub and Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with Vercel

1. Create a new GitHub repository and push this folder to it.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected framework as **Next.js** and deploy with the default settings.
4. Optionally add `NEXT_PUBLIC_SITE_URL` in Vercel to your final production URL, such as `https://www.boomn.com`.

No database or private environment variables are required.

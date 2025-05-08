# Refinery.AI Project Plan

## Project Goal
Build a simple, professional, deployable AI Text Assistant using **Next.js**, **Node.js**, **MongoDB**, and **OpenAI API**. Target: Show Fullstack + React experience for job applications.

## Tech Stack
- Frontend: Next.js (React)
- Backend: Next.js API routes (or small Node.js server if needed)
- Authentication: NextAuth.js
- Database: MongoDB Atlas
- AI Integration: OpenAI API (easiest first)
- Payments: Stripe (later stage)
- Deployment: Vercel (frontend + backend)

## Pages and Features

### Pages
- `/` — Landing Page (marketing)
- `/login` — Sign In / Sign Up
- `/app` — Main app (textarea + rewrite buttons)
- `/pricing` — Pricing plans (Free vs Pro)
- `/account` — Profile, billing info

### Core Features (MVP v1)
- User authentication (Sign up / Login / Logout)
- Simple input form:
  - Textarea
  - Buttons: Rewrite, Summarize, Formalize
- API call to backend -> Calls OpenAI -> Returns modified text
- Usage tracking per user (ex: 50 free uses/month)
- Upgrade to "Pro" with Stripe (unlimited uses)
- Error handling (empty input, API errors)

## Stretch Features (After MVP)
- Save user history (past rewrites)
- Tone changing options (casual, formal, persuasive)
- Dark mode toggle

## Suggested Project Structure
```
/pages
  /index.tsx       (Landing page)
  /login.tsx       (Login page)
  /app.tsx         (Main app)
  /pricing.tsx     (Pricing page)
  /account.tsx     (User profile)
/api
  /rewrite.ts      (API route to handle OpenAI calls)
  /auth/[...nextauth].ts (Auth config)
/components
  /Navbar.tsx
  /Footer.tsx
  /TextForm.tsx
/lib
  /mongodb.ts       (MongoDB connection helper)
  /openai.ts        (OpenAI API helper)
/styles
/public
```

## Milestone Plan

### Week 1
- Project repo + Vercel deployment
- Setup Next.js + TailwindCSS
- Authentication (NextAuth + MongoDB)

### Week 2
- Build TextForm component (input + buttons)
- Implement /api/rewrite backend route
- Connect OpenAI API
- Display AI responses

### Week 3
- Implement usage tracking
- Add Stripe payments (basic checkout session)
- Enforce free tier limits

### Week 4
- UI polish
- Mobile responsiveness
- README + Deployment

---

# Important Principles
- Keep MVP small and focused.
- Always deploy small working versions.
- Document all API endpoints and workflows.
- Code quality over feature quantity.

# Final Objective
Live deployable AI writing assistant showcasing:
- Fullstack Next.js skills
- Authentication & payments integration
- API and database integration
- Real-world SaaS experience

---

Made by Erik Cadieux. 🚀

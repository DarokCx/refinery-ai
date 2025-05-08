# 📝 Refinery.AI – AI Text Assistant

Refinery.AI is a lightweight SaaS app that rewrites, summarizes, and improves user-written text using AI.  
Built with **Next.js**, **MongoDB**, **Stripe**, and **OpenAI API**, it’s designed to showcase fullstack and AI integration skills for real-world job applications.

---

## ✨ Features

- 🔐 User authentication (NextAuth.js + MongoDB)
- 🧠 AI-powered rewriting, summarizing, tone-changing
- 📊 Usage tracking with free-tier limits
- 💳 Stripe integration for Pro upgrade
- 🚀 Deployed on Vercel with full CI/CD
- 🌓 Clean UI with TailwindCSS (mobile responsive)

---

## 📂 Tech Stack

| Layer        | Tech            |
|--------------|------------------|
| Frontend     | Next.js, React, TailwindCSS |
| Backend      | Node.js, API Routes |
| Auth         | NextAuth.js + MongoDB |
| Database     | MongoDB Atlas |
| AI API       | OpenAI (can swap Featherless/HuggingFace) |
| Payments     | Stripe |
| Hosting      | Vercel |

---

## 🛠️ Project Setup

```bash
git clone https://github.com/YOUR_USERNAME/refinery-ai.git
cd refinery-ai
npm install

Create a .env.local file:
OPENAI_API_KEY=your_openai_key
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLIC_KEY=your_stripe_public

Then start development:
npm run dev

```

🔍 Folder Structure
bash
Copy
Edit
/pages
  /app.tsx
  /login.tsx
  /pricing.tsx
  /api/rewrite.ts
  /api/auth/[...nextauth].ts
/components
  /TextForm.tsx
  /Navbar.tsx
/lib
  /openai.ts
  /mongodb.ts
  
🚧 Status
 Project planning complete ✅

 Auth integration

 AI rewrite form

 Stripe billing

 Final polish + deploy

👨‍💻 Author
Erik Cadieux
🔗 LinkedIn
💻 GitHub

📜 License
MIT License — use freely, contribute gladly!
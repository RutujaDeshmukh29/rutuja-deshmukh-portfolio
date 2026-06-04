# Rutuja Deshmukh — AI Engineer Portfolio

A premium, highly animated AI Engineer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18.17+ (check: `node -v`)
- npm or yarn

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
rutuja-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & fonts
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   ├── Hero.tsx            # Hero with typing effect & floating elements
│   ├── About.tsx           # About section with specialization cards
│   ├── TechStack.tsx       # Animated skill bars & tech groups
│   ├── Projects.tsx        # Projects with modal detail views
│   ├── Architecture.tsx    # AI architecture pipeline diagrams
│   ├── Experience.tsx      # Animated timeline for experience & education
│   ├── Achievements.tsx    # Achievement cards with hover effects
│   ├── Contact.tsx         # Glassmorphism contact section
│   ├── Footer.tsx          # Footer with social links
│   └── ui/
│       ├── ParticleBackground.tsx  # Animated canvas particles
│       └── GlowCard.tsx            # Reusable glow card with mouse tracking
├── lib/
│   └── utils.ts            # Tailwind class merging utility
├── public/
│   └── Rutuja_Deshmukh_Resume.pdf  # ← ADD YOUR RESUME HERE
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🖼️ Adding Your Photo & Resume

### Profile Photo
1. Add your photo to `/public/profile.jpg` (recommend 400×400px, professional headshot)
2. In `components/Hero.tsx`, uncomment the Image section:
```tsx
import Image from "next/image";
// Add inside the hero content area:
<Image
  src="/profile.jpg"
  alt="Rutuja Deshmukh"
  width={120}
  height={120}
  className="rounded-full border-2 border-indigo-500/30 mx-auto mb-6"
/>
```

### Resume
Place your resume PDF at: `public/Rutuja_Deshmukh_Resume.pdf`

---

## 🌐 Deploy to Vercel (Free — Recommended)

### Option 1: GitHub + Vercel (Easiest)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/rutuja-portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) → Sign up with GitHub
   - Click **"Add New Project"**
   - Import your repository
   - Click **"Deploy"** — done! 🎉

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Your site will be live at: `https://rutuja-portfolio.vercel.app`

**Pro tip**: Get a custom domain like `rutujadeshmukh.dev` (~$10/year on Namecheap) and connect it in Vercel settings.

---

## ✏️ Customization Checklist

- [ ] Add your resume PDF to `public/`
- [ ] Add your profile photo to `public/`
- [ ] Update email in `Contact.tsx`
- [ ] Add GitHub links to multi-agent workspace project when ready
- [ ] Add real screenshots of your projects (replace placeholders)
- [ ] Update certifications in `Experience.tsx`

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary Font | Syne (display/headings) |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |
| Primary Color | Indigo #6366f1 |
| Secondary | Purple #a855f7 |
| Accent | Cyan #06b6d4 |
| Background | Near-black #050a14 |

---

## 📸 Screenshot Suggestions for Projects

For best results, add real screenshots or these placeholder suggestions:
- **AI Learning Companion**: Screenshot of the Streamlit app chat interface
- **Multi-Agent Workspace**: Screenshot of the Next.js frontend with agent chat
- **AgroBot**: Photo of the physical mower / Android app UI

---

## 🧑‍💼 Mentor Tips — Getting Jobs

1. **Deploy TODAY** — A live URL on your resume > GitHub alone
2. **Add your photo** — Recruiters connect better with real people
3. **Link your live demo** prominently — Interviewers love to click
4. **Share on LinkedIn** — "Just deployed my AI portfolio" gets traction
5. **Customize for each application** — tweak the hero tagline per role

---

Built with ❤️ by Rutuja Deshmukh

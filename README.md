# Revathi Palla — Professional Portfolio Website

A modern, high-performance developer portfolio engineered for **Revathi Palla**, showcasing expertise across **Data Science, Machine Learning, FastAPI Backend Architecture, and Modern Full-Stack Systems**.

Built with **React, TypeScript, Vite, Tailwind CSS**, and custom interactive components.

---

## 🌟 Key Features

- **Grounded 100% on Verified Resume Data**: Reflects authentic background, 8.13 CGPA at Vignan's Institute of Engineering for Women, 3 internships, national hackathon 3rd place, and 6 verified credentials.
- **Interactive FraudShield Live Engine Simulator**: Interactive real-time risk scoring sandbox directly demonstrating the rule evaluation and OTP challenge architecture used in FraudShield.
- **Dual Project Showcase**: Comprehensive case studies for **FraudShield** (Python, FastAPI, SQL, React.js, JWT) and **Civix** (Python, FastAPI, Angular, SQL/MySQL, JWT).
- **Interactive Resume Modal & Direct Download**:
  - Direct download of the uploaded Word document (`Revathi_Palla_Resume.docx`).
  - Integrated browser-formatted resume viewer with dedicated Print / Save to PDF support.
- **Searchable & Filterable Skills Matrix**: Categorized across Programming Languages, Backend & APIs, Frontend, Data Science & ML, BI & Analytics, and Developer Tools.
- **Work History Timeline**: Visual timeline detailing 3 internships at K-Square Company (Power BI), DataValley (AI-Driven Analytics), and InternsVeda (Full-Stack).
- **Direct Contact Channel**: Direct email validation with pre-configured subject/body dispatch, phone dialing, and copyable email notification.
- **Mobile-First & High Accessibility**: Responsive layout across mobile, tablet, and desktop viewports with dark-mode aesthetic.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### 1. Installation
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 Managing & Updating Your Resume

1. The resume file is located in the `public/` directory:
   ```
   public/Revathi_Palla_Resume.docx
   ```
2. When you update your resume, simply place your new `.docx` or `.pdf` in `public/` with the same name, or update the reference path in `src/data/portfolioData.ts` (`resumePath: "/your-file.pdf"`).
3. The download button and modal preview will immediately link to the new file upon rebuild.

---

## 🌐 Deployment Instructions

### Option 1: Deploy with Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Revathi Palla portfolio"
   git remote add origin https://github.com/your-username/revathi-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain within 60 seconds!

### Option 2: Deploy with Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

### Option 3: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.ts`, set `base: '/repository-name/'`.
3. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run build && npm run deploy`.

---

## 🏷️ Connecting a Custom Domain (e.g. `revathipalla.dev`)

1. Purchase a domain from Namecheap, Google Domains (Squarespace), Cloudflare, or GoDaddy.
2. In Vercel or Netlify:
   - Navigate to **Project Settings > Domains**.
   - Enter your domain name (e.g., `www.revathipalla.com` or `revathipalla.dev`).
3. In your DNS registrar:
   - Add an **A record**: Point `@` to `76.76.21.21` (for Vercel) or the IP provided by your host.
   - Add a **CNAME record**: Point `www` to `cname.vercel-dns.com` (for Vercel) or your host's CNAME.
4. SSL certificates are provisioned automatically within minutes.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   └── Revathi_Palla_Resume.docx    # Uploaded source resume file
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Glassmorphic header with active scroll tracking
│   │   ├── Hero.tsx                  # Hero section with interactive terminal telemetry
│   │   ├── MetricsBar.tsx            # Academic & career highlights bar
│   │   ├── About.tsx                 # Authentic background & 4 technical pillars
│   │   ├── Skills.tsx                # Filterable & searchable verified skills grid
│   │   ├── Projects.tsx              # FraudShield & Civix deep dives with modal
│   │   ├── InteractiveFraudSimulator.tsx # Real-time fraud engine risk scoring demo
│   │   ├── Experience.tsx            # Internship timeline (K-Square, DataValley, InternsVeda)
│   │   ├── Education.tsx             # Academic records (B.Tech at VIEW, Intermediate, SSC)
│   │   ├── Certifications.tsx        # Hackathon awards (HACKERS 2025) & 6 certifications
│   │   ├── Contact.tsx               # Direct channels & validated inquiry dispatch
│   │   ├── Footer.tsx                # Minimal footer with quick nav & social links
│   │   ├── Icons.tsx                 # Clean vector icons (GitHub, LinkedIn)
│   │   └── ResumeModal.tsx           # Formatted in-browser resume view & print engine
│   ├── data/
│   │   └── portfolioData.ts          # Central source of truth (isolated content)
│   ├── types/
│   │   └── index.ts                  # Strong TypeScript interfaces
│   ├── App.tsx                       # Master application component
│   ├── main.tsx                      # React root entry point
│   └── index.css                     # Tailwind directives, theme & custom utilities
├── index.html                        # Semantic HTML with SEO & Open Graph meta
├── package.json                      # Scripts & dependencies
├── tailwind.config.js                # Design token configurations
├── tsconfig.json                     # Strict TypeScript compiler options
└── vite.config.ts                    # Vite build configuration
```

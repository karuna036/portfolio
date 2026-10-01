# Karunakaran G — Full Stack Developer Portfolio

A modern, high-performance, production-ready personal portfolio website for **Karunakaran G**, Full Stack Developer (2+ years of professional experience), specialized in **React.js, Laravel, PHP, MySQL, REST APIs, Firebase, and DNS Management with Lua**.

Built with **React.js**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, designed specifically to impress technical recruiters and engineering managers.

---

## ⚡ Highlights & Key Features

* **Developer-Centric Modern Aesthetic**: Clean slate/cyan styling, terminal code card, subtle glowing accents, and zero tacky animations.
* **Dark / Light Theme System**: Smooth persistent toggle with `localStorage` memory and system-aware defaults.
* **Separation of Concerns**: All profile data, skills, projects, workflow, and experience are isolated in `src/data/` files for effortless updates without touching UI markup.
* **In-Browser Interactive Resume**: Recruiters can view, print, or download the developer's resume on-screen with zero broken links or 404s.
* **Complete Form Validation**: Client-side validated contact form with error messaging, loading state, success banner, and optional webhook/endpoint connection (`VITE_CONTACT_ENDPOINT`).
* **Sticky Navigation & Active Scroll Spy**: Sticky backdrop blur header with dynamic active indicator tracking the current section on scroll.
* **Production-Grade Performance**: Optimized Vite build splitting React vendor code and icons, resulting in sub-3-second production builds and minimal asset weight (~82 kB app bundle).
* **Full SEO & Social Sharing Suite**: Pre-configured with meta tags, Open Graph card, Twitter card, canonical URL, `robots.txt`, `sitemap.xml`, and branded favicon.
* **100% Mobile Responsive & Accessible**: Semantic HTML tags, ARIA attributes, keyboard navigation support, and mobile drawer menu.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React.js](https://react.dev/) (v18.3)
* **Build Tool**: [Vite](https://vitejs.dev/) (v5)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3) + PostCSS + Autoprefixer
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Google Fonts (*Inter* & *JetBrains Mono*)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg               # Tech monogram SVG icon
│   ├── og-image.png              # High-resolution social share banner
│   ├── robots.txt                # Search crawler configuration
│   ├── sitemap.xml               # Search index XML map
│   └── resume/
│       └── Karunakaran_G_FullStack_Resume.pdf  # Downloadable PDF
│
├── src/
│   ├── components/
│   │   ├── Navbar/Navbar.jsx     # Sticky navbar with theme switch & mobile drawer
│   │   ├── Hero/Hero.jsx         # Terminal code card & hero CTAs
│   │   ├── About/About.jsx       # Narrative & technical focus areas
│   │   ├── Skills/Skills.jsx     # Categorized skills (no fake percentages)
│   │   ├── Experience/Experience.jsx # Full-stack timeline & 12 confirmed points
│   │   ├── Projects/Projects.jsx # Featured project cards & live/repo links
│   │   ├── Expertise/Expertise.jsx   # 4 technical domains & capabilities
│   │   ├── Workflow/Workflow.jsx # 10-step software engineering methodology
│   │   ├── Resume/Resume.jsx     # Resume call-to-action section
│   │   ├── Contact/Contact.jsx   # Validated contact form & copyable details
│   │   ├── Footer/Footer.jsx     # Footer navigation & social profiles
│   │   └── common/
│   │       ├── ThemeToggle.jsx   # Dark / light switcher
│   │       ├── ScrollToTop.jsx   # Floating back-to-top button
│   │       ├── SectionHeading.jsx# Consistent section badge & title
│   │       └── ResumeModal.jsx   # In-browser printable resume modal
│   │
│   ├── data/
│   │   ├── profile.js            # Personal info, contact details, links
│   │   ├── skills.js             # Categorized skills & descriptions
│   │   ├── projects.js           # Project portfolio data & features
│   │   ├── experience.js         # Professional experience & responsibilities
│   │   ├── expertise.js          # Detailed capabilities & specialties
│   │   └── workflow.js           # 10-step development methodology
│   │
│   ├── hooks/
│   │   ├── useTheme.js           # Theme state & localStorage hook
│   │   └── useScrollSpy.js       # Active section tracking on scroll
│   │
│   ├── utils/
│   │   └── helpers.js            # Form validation & clipboard copy helper
│   │
│   ├── App.jsx                   # Root application component
│   ├── index.css                 # Tailwind directives & custom utilities
│   └── main.jsx                  # React DOM mount point
│
├── .env.example                  # Environment variable template
├── .env                          # Local environment variables
├── index.html                    # SEO metadata, Open Graph, fonts
├── tailwind.config.js            # Tailwind theme, colors & font families
├── vite.config.js                # Vite build & chunk splitting configuration
├── vercel.json                   # Vercel SPA routing configuration
└── netlify.toml                  # Netlify redirect & header configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed:

```bash
node -v
npm -v
```

*(Note for Windows PowerShell: If you encounter an execution policy prompt with `npm`, invoke `npm.cmd`)*

### 1. Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

### 2. Configure Environment Variables

Duplicate `.env.example` to `.env` and fill in your details:

```bash
cp .env.example .env
```

Available environment variables:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Production website URL | `https://karunakaran-dev.vercel.app` |
| `VITE_DEVELOPER_NAME` | Developer's full name | `Karunakaran G` |
| `VITE_DEVELOPER_ROLE` | Professional role | `Full Stack Developer` |
| `VITE_DEVELOPER_EMAIL` | Contact email address | `karunakaran.dev.contact@gmail.com` |
| `VITE_DEVELOPER_PHONE` | Contact phone number | `+91 98765 43210` |
| `VITE_GITHUB_URL` | Public GitHub profile | `https://github.com/karunakaran-dev` |
| `VITE_LINKEDIN_URL` | Public LinkedIn profile | `https://linkedin.com/in/karunakaran-dev` |
| `VITE_RESUME_URL` | Path to PDF resume | `/resume/Karunakaran_G_FullStack_Resume.pdf` |
| `VITE_CONTACT_ENDPOINT` | Optional webhook/backend endpoint (Formspree, Web3Forms, etc.) | `""` *(uses simulated feedback by default)* |

### 3. Run Development Server

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) to view the live website.

---

## 🎨 How to Customize Content

All website data is completely decoupled from React presentation logic. You can easily customize any section by editing the corresponding file in `src/data/`:

* **Personal Details & Social Links**: Edit `src/data/profile.js`
* **Skills List**: Edit `src/data/skills.js`
* **Projects & Repositories**: Edit `src/data/projects.js`
* **Work Experience**: Edit `src/data/experience.js`
* **Engineering Expertise**: Edit `src/data/expertise.js`
* **Development Workflow**: Edit `src/data/workflow.js`
* **Resume PDF**: Replace the file at `public/resume/Karunakaran_G_FullStack_Resume.pdf`

---

## 📦 Building for Production

Compile and optimize the project for production deployment:

```bash
npm run build
```

This creates an optimized, minified `dist/` directory with code splitting:

```text
✓ built in ~2.8s
dist/index.html                         ~2.9 kB
dist/assets/index.css                   ~42 kB (gzip ~7.1 kB)
dist/assets/lucide-icons.js             ~24 kB (gzip ~6.6 kB)
dist/assets/index.js                    ~82 kB (gzip ~18.3 kB)
dist/assets/react-vendor.js             ~133 kB (gzip ~43 kB)
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Set any custom environment variables from `.env.example`.
6. Click **Deploy**.
*(The included `vercel.json` ensures all routes and assets are correctly served).*

### Option 2: Deploy to Netlify

1. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site"** &rarr; **"Import an existing project"**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.
*(The included `netlify.toml` handles routing and caching automatically).*

### Option 3: Deploy to GitHub Pages

1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Add a deploy script to `package.json`:
   ```bash
   npm install -D gh-pages
   ```
   Add to `scripts`: `"deploy": "npm run build && gh-pages -d dist"`
3. Run `npm run deploy`.

---

## 📄 License

Created for **Karunakaran G**. All rights reserved &copy; 2026.

# 🤖 Snehaba Parmar — AI/ML & Web Developer Portfolio

An interactive, high-performance, futuristic **AI/ML & Full-Stack Developer Portfolio** built for **Snehaba Parmar** (M.Sc. IT Student). Features a 3D particle constellation background, glassmorphism UI design, interactive project/skills/certificates showcases, Jarvis AI chatbot assistant, ATS original resume viewer, and direct background contact form email delivery.

![React](https://img.shields.io/badge/React-18.2-00f0ff?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-7000ff?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)

---

## ✨ Features Highlight

- 🌌 **3D Particle Constellation Background**: Interactive 2D/3D Canvas particle system with magnetic mouse pull and glowing node network.
- 🖼️ **Cyber Morphing Portrait Frame**: Futuristic glowing blob container featuring Snehaba Parmar's photograph.
- 💻 **5 Flagship Projects Showcase**:
  - 🎨 **CustomArtistry Platform**: Full-stack artwork marketplace with original UI screenshot.
  - 🧠 **LLM-Based Smart Support Ticket Management**: GenAI ticket classification & response via **Google Gemini API** & **FastAPI**.
  - 🏢 **AssetFlow – Enterprise Asset Management System**: Full-stack enterprise platform built for **Odoo Hackathon 2026**.
  - 🎭 **Mood Room - Emotion-Aware AI App**: Emotion detection ML models with NLP, speech recognition & chatbot.
  - 🚦 **Smart Traffic Signal Optimization System**: OpenCV computer vision vehicle density system with Fuzzy Logic.
- 🛠️ **Skill Matrix with Tech Icons**: Categorized competencies with interactive icons (Python, OpenCV, Gemini API, FastAPI, React, Node.js, MongoDB, SQL, C++, Java, VS Code, Git, etc.).
- 📜 **5 Authentic Verified Certificates**:
  - *Internshala Trainings*: Machine Learning with AI (with IITM Pravartak)
  - *Microsoft*: Microsoft Azure AI Fundamentals
  - *Let's Upgrade*: Python Bootcamp (NSDC & ITM)
  - *Sololearn*: Social Media Marketing with AI
  - *Sololearn*: Introduction to SQL
- 🔒 **Modal Top Layer (`z-[100]`), Frosted Glass Blur & Body Scroll Locking**: Fixed top layer modals for certificate previews, projects deep-dive, and resume with automatic background blur and body scroll locks.
- 📄 **ATS Original Resume Viewer & PDF Download**: Interactive view of Snehaba's original resume document with one-click direct PDF download.
- 🤖 **Jarvis AI Chatbot Assistant**: Floating sci-fi chatbot widget tuned to answer visitor questions about Snehaba's background, education, projects, and contact info.
- 📬 **Direct Background Email Sending**: Contact form sends emails directly to **`snp087210@gmail.com`** behind the scenes with zero popups or mail client popups.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 18 (TypeScript), Vite 5 |
| **Styling & Design System** | Tailwind CSS v3, Glassmorphism, Custom Sci-Fi Glow Utilities |
| **Animations & FX** | Framer Motion, HTML5 Canvas 2D/3D, Canvas Confetti |
| **Icons** | Lucide React |
| **Email Backend API** | FormSubmit AJAX API (`https://formsubmit.co/ajax/snp087210@gmail.com`) |
| **Deployment** | Vercel Ready (`vercel.json`) |

---

## 📂 Project Structure

```text
c:/Portfolio/
├── public/
│   ├── photo.jpg                      # Snehaba Parmar's Real Photo
│   ├── custom_artistry.png            # CustomArtistry UI Screenshot
│   ├── Snehaba_Parmar_Resume.pdf      # Official Original Resume PDF
│   ├── resume_original.png            # Rendered Original Resume Document Image
│   └── certificates/                  # Authentic Certificate Document Images
│       ├── internshala_ml.png
│       ├── microsoft_azure_ai.png
│       ├── letsupgrade_python.png
│       ├── sololearn_social_media_ai.jpg
│       └── sololearn_sql.jpg
├── src/
│   ├── assets/                        # Static Assets
│   ├── components/                    # UI Components
│   │   ├── About.tsx                  # Bio Summary & Education Timeline
│   │   ├── AIChatWidget.tsx           # Floating Jarvis AI Chatbot
│   │   ├── Certificates.tsx           # Verified Certificates & Image Modal
│   │   ├── Contact.tsx                # Direct Email Contact Form
│   │   ├── Footer.tsx                 # Footer & System Status Indicator
│   │   ├── Hero.tsx                   # Main Hero Banner & Cyber Avatar Frame
│   │   ├── Navbar.tsx                 # Translucent Glass Navigation Bar
│   │   ├── ParticleBackground.tsx     # Canvas Particle Constellation Network
│   │   ├── Projects.tsx               # Projects Showcase & Architecture Modal
│   │   ├── ResumeModal.tsx            # Fullscreen Original Resume Viewer Modal
│   │   └── Skills.tsx                 # Technology Icons Skill Matrix
│   ├── data/
│   │   └── portfolioData.ts           # Central Structured Portfolio Dataset
│   ├── App.tsx                        # Main App Container Component
│   ├── main.tsx                       # React Entrypoint
│   └── index.css                      # Tailwind Directives & Custom Glass Classes
├── index.html                         # Base HTML Document with Google Fonts & SEO
├── package.json                       # Project Dependencies & Build Scripts
├── tailwind.config.js                 # Cyber-Futuristic Tailwind Design System
├── tsconfig.json                      # TypeScript Configuration
├── vercel.json                        # Vercel SPA Deployment Rewrites
└── vite.config.ts                     # Vite Bundler Configuration
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/SnehabaParmar/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
```
Production assets will be generated in the `dist/` directory.

---

## 🔗 Vercel Deployment Guide

This project is pre-configured with `vercel.json` for zero-configuration single-page app (SPA) routing on **Vercel**.

1. Push your repository to GitHub (`SnehabaParmar/Portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository `Portfolio`.
4. Click **Deploy**. Vercel will automatically build and host your portfolio with your own shareable URL!

---

## 👤 Personal Information & Contact

- **Developer**: Snehaba Parmar
- **Education**: Master of Science in Information Technology (M.Sc. IT Student)
- **Location**: Surendranagar, Gujarat, India
- **Email**: [snp087210@gmail.com](mailto:snp087210@gmail.com)
- **Phone**: +91 9228281903
- **LinkedIn**: [snehaba-parmar-9b553b339](https://www.linkedin.com/in/snehaba-parmar-9b553b339/)
- **GitHub**: [@SnehabaParmar](https://github.com/SnehabaParmar)

---

*Made with ❤️ for Snehaba Parmar*

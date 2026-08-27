# ⚡ Mrityunjay Dwivedi – Futuristic 3D Developer Portfolio & AI Engineering Dashboard

[![GitHub Pages Deployment](https://github.com/Mrityunjaydwived/portfolio-3d/actions/workflows/deploy.yml/badge.svg)](https://github.com/Mrityunjaydwived/portfolio-3d/actions/workflows/deploy.yml)
[![Live Portfolio](https://img.shields.io/badge/Live_Demo-GitHub_Pages-06b6d4?style=flat&logo=github)](https://mrityunjaydwived.github.io/portfolio-3d/)
[![LeetCode Profile](https://img.shields.io/badge/LeetCode-Mrityunjay__dwivedi-FFA116?style=flat&logo=leetcode)](https://leetcode.com/u/Mrityunjay_dwivedi/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mrityunjaydwivedi09-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/mrityunjaydwivedi09)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

> **Live Standard URL:** [https://mrityunjaydwived.github.io/portfolio-3d/](https://mrityunjaydwived.github.io/portfolio-3d/)  
> **Full Engineering Walkthrough:** [WALKTHROUGH.md](./WALKTHROUGH.md)

---

## 🌟 Executive Overview
A high-performance, futuristic 3D multi-page portfolio and engineering dashboard designed for **Mrityunjay Dwivedi**:
- 🥇 **Gold Medal Winner (8.66 CGPA)** – Rewa Engineering College (B.Tech CSE, 2021-25)
- 🔬 **UG-Inbound Research Scholar** – Indian Institute of Technology (IIT), Indore (Jan 2025 – May 2025, Top 5 Rank)
- 👨‍🏫 **Technical Trainer in Computer Science Engineering** – Symbiosis Foundation / Symbiosis University of Applied Sciences (Sept 2025 – Present)

Built across four core engineering pillars:
1. **⚡ MERN Stack Developer** – High-concurrency React, Node.js, Express, MongoDB, WebRTC peer video streaming, and Socket.io.
2. **🧠 AI / Machine Learning Engineer** – Deep Learning CNNs in PyTorch (97.92% train accuracy on ISIC skin cancer lesion dataset), Grad-CAM heat maps, and Gemini Generative AI.
3. **🛡️ Cybersecurity Engineer** – Network reconnaissance, port scanning (Nmap), packet inspection (Wireshark), OWASP Top 10 hardening, and zero-trust cryptographic protocols.
4. **📊 Data Analyst** – Quantitative market modeling, RFM behavioral cohort analysis, exploratory data analysis, and Power BI / Tableau dashboards.

---

## 🚀 Key Features & Highlights

### 🪐 1. 3D WebGL Experiences (Three.js & React Three Fiber)
- **Interactive 3D Workstation:** Rotating engineering desk with dynamic lighting, terminal screens, and floating holographic markers on the Home page.
- **3D Celestial Skills Universe:** Interactive galaxy with 95+ non-duplicate skills mapped to 3D celestial coordinates with orbital energy halos.
- **3D Git Commit Cosmos:** Real-time rotating GitHub orbital commit matrix on `/github` with raycast hover commit metadata.
- **3D Algorithmic Binary Search Tree:** Glowing algorithm graph on `/leetcode` demonstrating tree traversals and complexity metrics.
- **3D Card Parallax Tilt:** Gyroscopic 3D tilting on all 10 major project cards.

### 🔄 2. Real-Time Dynamic API Synchronization
- **Live GitHub Universe (`/github`):** Automatically queries the GitHub REST API (`/users/mrityunjaydwived` and `/repos`), displaying live repository cards, language tags, stars, forks, and a 52-week contribution heatmap.
- **Live LeetCode Telemetry (`/leetcode`):** Real-time integration displaying genuine problem-solving metrics (9 problems solved: 6 Easy, 2 Medium, 1 Hard), ranking, contribution points, and recent submissions.

### 📧 3. Automated Contact Form Backend
- Contact form dispatches AJAX JSON POST requests directly to `dwivedibandhavesh@gmail.com` via FormSubmit API with zero backend server maintenance.
- Triggers celebratory confetti bursts, futuristic audio chimes, and instant confirmation toasts.

### 🧭 4. Command Palette & Navigation
- **Command Palette (`Ctrl+K` / `Cmd+K`):** Instant fuzzy search indexing all 10 pages, projects, and social profiles.
- **Synthesized Audio Effects:** Subtle futuristic UI sounds (clicks, transitions, chimes) with global mute control.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, Vite 8, React Router (HashRouter) |
| **Styling & Design** | Tailwind CSS v4, Glassmorphism, Neon Glow Shaders, Space Grotesk & JetBrains Mono Fonts |
| **3D Graphics & WebGL** | Three.js, @react-three/fiber, @react-three/drei, Custom Particle Emitters |
| **Motion & Interaction** | Framer Motion, Canvas Confetti, Web Audio API Sound Synthesizer |
| **Live Telemetry APIs** | GitHub REST API, LeetCode Live GraphQL/REST Proxy, FormSubmit Email Gateway |
| **CI/CD Deployment** | GitHub Actions (`deploy.yml`), GitHub Pages Static Hosting |

---

## 📦 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/Mrityunjaydwived/portfolio-3d.git

# 2. Navigate to directory
cd portfolio-3d

# 3. Install dependencies
npm install

# 4. Launch Vite dev server
npm run dev

# 5. Open browser at http://localhost:5173/
```

---

## 🚢 Production Build & Deployment

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

Automated deployment is pre-configured with **GitHub Actions**. Any commit pushed to the `main` branch triggers `.github/workflows/deploy.yml` which builds and deploys to **GitHub Pages** automatically!

---

## 📄 License
Released under the [MIT License](LICENSE). Designed and engineered with precision by **Mrityunjay Dwivedi**.

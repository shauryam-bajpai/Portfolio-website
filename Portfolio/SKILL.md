---
name: portfolio-migration
description: Procedure and architectural blueprint for migrating Shauryam Bajpai's design-component portfolio (Main.dc.html) into a production-grade Next.js React application.
---

# Portfolio Migration & Development Skill

This skill defines the specifications, design tokens, data structures, and implementation procedures for converting the reference mockup in `Main.dc.html` into a modern Next.js / React application in the `Portfolio/` directory.

---

## 1. Source Context & Architecture

### Source Files
- [Main.dc.html](file:///c:/Users/Shauryam%20Bajpai/Desktop/template/Main.dc.html): Artboard containing all UI layout, inline styles, design tokens, copy, and keyframe animations.
- [support.js](file:///c:/Users/Shauryam%20Bajpai/Desktop/template/support.js): Standalone `<x-dc>` runtime engine (not needed in production Next.js).
- [vendor/](file:///c:/Users/Shauryam%20Bajpai/Desktop/template/vendor): Standalone UMD React 18 scripts (superseded by `package.json` dependencies).
- [README.md](file:///c:/Users/Shauryam%20Bajpai/Desktop/template/README.md): Design reference instructions.

### Target Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18/19 with TypeScript
- **Styling**: Modern CSS modules or Tailwind CSS utilizing the exact design token palette
- **Fonts**: `next/font/google` for `Geist`, `Geist Mono`, and `Monsieur La Doulaise`

---

## 2. Design System Tokens & Typography

### CSS Custom Properties
```css
:root {
  --bg: #0a0a0a;
  --fg: #fafafa;
  --fg2: #d4d4d8;
  --muted: #a1a1aa;
  --subtle: #71717a;
  --subtle2: #52525b;
  --border: #27272a;
  --border2: #1c1c1f;
  --border3: #3f3f46;
  --card: #0c0c0e;
  --accent: #818cf8;
}
```

### Typography Hierarchy
- Primary Sans: **Geist** (`font-sans`)
- Monospace / Badges / Labels: **Geist Mono** (`font-mono`)
- Signature Accent: **Monsieur La Doulaise** (Cursive handwriting effect)

### Micro-Animations & FX
- **Grid Background**: 44px x 44px linear gradient grid with radial gradient masks.
- **Hero Rise**: Smooth ease entrance (`@keyframes rise`).
- **Text Shine**: Linear gradient moving background text clip on "I build AI-powered backends".
- **Signature Stroke**: Clip-path reveal animation (`@keyframes sign`).
- **Marquee**: Infinite horizontal ticker for tech skills.
- **3D Card Flip**: `perspective(1400px) rotateX(90deg)` transition between GitHub and LeetCode activity grids.
- **Project Cards**: Subtle hover lift (`translateY(-4px)`), top glowing border line (`.tl`), dot-matrix mask (`.dots`), and glowing arrow button transition.

---

## 3. Content Inventory & Components

### 1. Navigation (`components/Navbar.tsx`)
- Floating pill-shaped navbar centered at top (`top: 24px`).
- Links: `Home`, `About`, `Experience`, `Projects`, `Contact` (solid pill button).

### 2. Hero Section (`components/Hero.tsx`)
- Badge: `B.Tech CS · Manipal Institute of Technology` with pulsing green dot (`#4ade80`).
- Headline: "Shauryam Bajpai. I build AI-powered backends."
- Sub-headline: "Software engineering intern and CS student building RAG systems, distributed storage and scalable APIs."
- Action Buttons: `View my work` (pill with accent glow) and `GitHub ↗`.
- Cursive Signature: Animated "Shauryam" logo rotated by `-3deg`.

### 3. About Section (`components/About.tsx`)
- Bio description regarding systems engineering, full-stack development, and applied AI.
- Structured Tech Stack Matrix:
  - **Languages**: C, C++, Java, Python, JavaScript, TypeScript, Go
  - **Frameworks**: React, Next.js, Node.js, FastAPI, Spring Boot, Express, gRPC, Tailwind CSS
  - **AI / ML**: RAG, Vector DBs, Embeddings, LLMs, Ollama, OpenAI API
  - **Databases**: PostgreSQL, MySQL, MongoDB, Redis, Qdrant, Oracle SQL
  - **Dev Tools**: Git, GitHub, Docker, Postman, VS Code

### 4. Experience Section (`components/Experience.tsx`)
- Vertical timeline with glowing accent nodes.
- **Software Engineering Intern** at *NetProphets Cyberworks Private Limited* (May 2026 - July 2026):
  - FastAPI backend microservices & Agile delivery.
  - LLM inference & vector search integration with Next.js/TypeScript.
  - Structured logging, validation, and resilience debugging.
- **Full Stack Developer Intern** at *Robotronix and Scalable Technologies (RAST)*:
  - Virtual materials testing platform (frontend & backend).
  - Platform QA, performance verification, and data accuracy.

### 5. Projects Section (`components/Projects.tsx`)
1. **LocalMind** (Local-First AI):
   - Tags: Python, FastAPI, Next.js, Qdrant, Ollama
   - Metrics: `42% FASTER QUERIES`, `100% OFFLINE`
2. **PeerLink Storage** (Distributed Systems):
   - Tags: Go, gRPC, Protobuf
   - Metrics: `P2P RAW TCP`, `AES ENCRYPTED`
3. **Customer Retention Engine** (Machine Learning):
   - Tags: Python, Scikit-Learn, Pandas, Seaborn
   - Metrics: `7,000 RECORDS`, `SMOTE BALANCING`
4. **Capital Guardian** (FinTech · Full Stack):
   - Tags: Next.js 14, TypeScript, Appwrite, Plaid, Dwolla, Tailwind
   - Metrics: `12,000+ BANKS VIA PLAID`, `ACH TRANSFERS`, `RSC SERVER-FIRST`
5. **SplitLedger** (FinTech · Backend):
   - Tags: Java, Spring Boot, React, PostgreSQL, Docker
   - Metrics: `17 REST APIS`, `9 TABLES`, `3 SPLIT MODES`
6. **StreamPulse** (Backend + AI):
   - Tags: Node.js, Redis, OpenAI API
   - Metrics: `JWT AUTH`, `AI TAGGING`
- "More on GitHub" link card.

### 6. Built With Marquee (`components/TechMarquee.tsx`)
- Infinite animated marquee showing core shipping technologies with left/right fade masks.

### 7. Activity Heatmap (`components/ActivityCalendar.tsx`)
- 3D flip card switching between:
  - **GitHub**: 132 contributions, 52-week green commit heatmap, link to `github.com/shauryam-bajpai`.
  - **LeetCode**: 400+ problems solved, 52-week amber activity calendar, link to `leetcode.com/u/bajpai_shauryam/`.

### 8. Contact Section (`components/Contact.tsx`)
- "Let's build something." headline.
- Email CTA button: `shaurya04112@gmail.com`.
- Links to GitHub, LinkedIn, LeetCode.
- Location badge: `Manipal Institute of Technology · Bengaluru`.

---

## 4. Setup & Execution Guide (Windows Environment)

> **Important**: On Windows PowerShell where script execution may be restricted (`PSSecurityException`), always execute commands using `npm.cmd` and `npx.cmd` rather than `npm` or `npx`.

### Initialization Commands
```powershell
# Inside Portfolio/ folder:
npx.cmd -y create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

### Dev Server
```powershell
npm.cmd run dev
```

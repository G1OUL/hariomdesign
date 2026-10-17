# Premium Freelance Hospitality Web Design Portfolio

A complete, production-ready personal portfolio website for an independent freelance website designer specializing in vacation rentals, boutique villas, heritage homestays, holiday cottages, and hospitality stays in India.

Built with **React 19**, **TypeScript**, **Vite**, and **Vanilla CSS** following a warm, editorial hospitality aesthetic.

---

## 🌟 Creative Direction & Aesthetic

- **Color Palette**: Warm ivory (`#FAF8F5`) and soft sand (`#EDE6DC`) backgrounds, deep forest green (`#1A2F23`) and charcoal typography, muted olive accents (`#546650`), and restrained terracotta details (`#B85D3B`).
- **Typography**: Editorial display serif (*Playfair Display* and *Cormorant Garamond*) paired with a clean modern sans-serif (*Plus Jakarta Sans*).
- **Hospitality Atmosphere**: Generous whitespace, refined property photography compositions, subtle micro-interactions, responsive without horizontal scroll, and strict adherence to `prefers-reduced-motion`.
- **Honest Positioning**: No invented client numbers, fake awards, or deceptive claims. All three featured projects are clearly badged as **"Concept Project"** case studies to showcase your design thinking and direct-booking conversion strategy with complete integrity.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/                     # Static assets & public files
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Sticky navigation with accessible mobile drawer & CTA
│   │   ├── Hero.tsx            # Editorial 2-column hero with property image & badges
│   │   ├── SelectedWork.tsx    # 3 concept stays with interactive case study triggers
│   │   ├── CaseStudyModal.tsx  # In-depth case study modal with interactive device simulator
│   │   ├── Services.tsx        # 3 service packages (from ₹3,000 / ₹5,000) & disclaimer
│   │   ├── Process.tsx         # 4-step workflow tailored for non-technical stay owners
│   │   ├── About.tsx           # Authentic studio narrative & hospitality principles
│   │   ├── Contact.tsx         # Interactive inquiry builder (mailto & WhatsApp chat)
│   │   └── Footer.tsx          # Brand summary, navigation anchors & sitemap
│   ├── config/
│   │   └── portfolio.ts        # Centralized brand, pricing, contact & project data
│   ├── App.tsx                 # Main application layout & modal state management
│   ├── index.css               # Editorial design system tokens & responsive styles
│   └── main.tsx                # Application entry point
├── index.html                  # SEO metadata, Open Graph tags, Google Fonts, SVG favicon
├── package.json
├── tsconfig.json
├── vite.config.ts              # Vite configured for project base path ('/hariomdesign/')
└── README.md                   # Setup, customization & deployment guide
```

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production & Lint Check
```bash
# Type-check and produce production bundle in /dist
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

---

## 👤 Professional Details

The portfolio is configured with Hariom Upadhyay's professional details in **`src/config/portfolio.ts`**:

- **Name**: Hariom Upadhyay
- **Title**: Independent Hospitality Website Designer
- **Email**: `uhariom914@gmail.com`
- **Phone / WhatsApp**: `+91 7276516075` (`https://wa.me/917276516075`)
- **GitHub**: [https://github.com/G1OUL](https://github.com/G1OUL)
- **LinkedIn**: [https://www.linkedin.com/in/hariom-upadhyay-b07848317](https://www.linkedin.com/in/hariom-upadhyay-b07848317)
- **Live Website**: [https://g1oul.github.io/hariomdesign/](https://g1oul.github.io/hariomdesign/)

---

## 🚀 Publishing to GitHub Pages (Free Hosting)

This project is pre-configured to deploy automatically to **GitHub Pages** as a project site using GitHub Actions at:
```text
https://g1oul.github.io/hariomdesign/
```

### Step 1: Remote Repository
The repository is hosted at:
```text
https://github.com/G1OUL/hariomdesign
```

### Step 2: Push Local Files
From the project root directory in your terminal:

```bash
# Link remote repository (if not already linked)
git remote add origin https://github.com/G1OUL/hariomdesign.git

# Push main branch to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages Publishing Source
1. Open your repository on GitHub: `https://github.com/G1OUL/hariomdesign`
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select:
   ```text
   GitHub Actions
   ```
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger, build the React project, and deploy the `/dist` bundle to your live URL!
5. Once the GitHub Actions workflow finishes, visit your live website at:
   ```text
   https://g1oul.github.io/hariomdesign/
   ```

### Step 4: Making Updates in the Future
Whenever you update code, add new case studies, or modify pricing in `src/config/portfolio.ts`, simply run:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
GitHub Actions will automatically rebuild and redeploy your website within minutes.

---

## 📋 Quality Assurance & Accessibility

- **Keyboard Navigation**: Full tab navigation with visible focus outlines and a "Skip to main content" link.
- **Escape & Focus Trap**: The mobile drawer and case study dialog can be closed with the <kbd>Escape</kbd> key or outside click.
- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<article>`, `<dialog>`, and `<footer>` landmarks with unique IDs.
- **Responsive Layout**: Fluid CSS grid and flexbox tested across 320px–375px (small smartphones), 768px (tablets), and 1200px+ (desktop displays) with zero horizontal overflow.
- **Motion Accessibility**: Full support for `prefers-reduced-motion` media query.

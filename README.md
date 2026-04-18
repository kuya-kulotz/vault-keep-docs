# VaultKeep Cinematic Website 🛡️

Welcome to the **VaultKeep Web** repository! This project hosts the immersive, cinematic landing page for **VaultKeep** — a mobile application designed for privacy-first, offline asset and warranty management. 

VaultKeep empowers users to scan receipts, track warranties, and analyze spending habits using entirely **on-device local AI processing**. No cloud required, ensuring 100% data privacy.

This website serves as the premium marketing page representing VaultKeep's core capabilities, features, and privacy-first philosophy.

## 🚀 Tech Stack

- **Angular**: Latest stable
- **GSAP & ScrollTrigger**: Cinematic scroll-based animations
- **Chart.js**: Interactive on-device analytics showcase
- **SCSS**: Premium dark-mode-first styling with glassmorphism
- **Lucide Icons**: Modern, crisp iconography

## 🏗 Architecture

The site is built as a series of modular components to ensure performance and maintainability:

- \`HeroComponent\`: Cinematic entrance with animated device mockups.
- \`ProblemComponent\`: Contextualizing the need for offline-first privacy.
- \`HowItWorksComponent\`: A 4-step animated flow showcasing the capture pipeline.
- \`FeaturesComponent\`: A cinematic grid of VaultKeep's core capabilities.
- \`AnalyticsComponent\`: Interactive dashboard demo showing local insight generation.
- \`PrivacyComponent\`: Deep-dive into the privacy-first architecture and onboarding.
- \`LegalModalComponent\`: Dynamic glassmorphic modal overlay handling Terms, Privacy, and Data Safety documents.

## 🏃‍♂️ How to Run the Website Locally

To view and edit the landing page on your local machine, follow these steps:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
3. **Run the development server**:
   \`\`\`bash
   npm start
   \`\`\`
4. **View the application**: Open your web browser and navigate to \`http://localhost:4200/\`. The application will automatically reload if you change any of the source files.

## 📦 Build for Production

To compile the site into static files for deployment (e.g. to GitHub Pages, Firebase Hosting, Vercel, or Netlify):
\`\`\`bash
npm run build
\`\`\`
The build artifacts will be stored in the \`dist/\` directory.

---
*Note: The core mobile app repository documentation can be found in [MOBILE_APP_README.md](./MOBILE_APP_README.md).*

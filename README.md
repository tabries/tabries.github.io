# Interactive 3D Portfolio

A modern, interactive portfolio website built with React, Three.js, and advanced animations. Featuring a dynamic hero section, 3D elements, smooth transitions, and a customizable theme system.

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.174-000000?style=flat-square&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)

## Features

- **3D Interactive Hero Section** - Stunning Three.js-powered hero with camera animations
- **Smooth Transitions** - GSAP-powered animations and transitions throughout
- **Theme Customization** - 6+ built-in theme options with live switching
- **Project Carousel** - Interactive carousel showcasing your projects with navigation arrows
- **Responsive Design** - Fully responsive across all devices
- **Performance Optimized** - Fast load times with Vite's instant module replacement
- **Accessibility** - Built with semantic HTML and accessibility best practices
- **Dark Mode Compatible** - Adapts to system preferences

## Tech Stack

### Frontend Framework
- **React** 19.0 - UI library
- **Vite** 6.2 - Lightning-fast build tool
- **TypeScript** - Type-safe configuration

### 3D & Animation
- **Three.js** 0.174 - 3D graphics library
- **React Three Fiber** 9.1 - React renderer for Three.js
- **React Three Drei** 10.0 - Useful helpers for React Three Fiber
- **GSAP** 3.12 - Professional animation library
- **Motion** 12.23 - Animation library for React

### Styling & UI
- **Tailwind CSS** 4.0 - Utility-first CSS framework
- **Chroma.js** 3.1 - Color utility library
- **Leva** 0.10 - Debug UI for parameters

### Additional Libraries
- **Blobity** 0.2 - Interactive blob cursor effect
- **React Globe.gl** 2.27 - Interactive 3D globe component
- **React Responsive** 10.0 - Responsive design utilities

## Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

### Development

```bash
# Start local dev server with HMR
npm run dev

# Start dev server accessible on network
npm run dev:network

# Run ESLint
npm run lint
```

### Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## Customization

### Changing Themes

Edit `src/constants/colorPalettes.js` to modify existing themes or add new ones:

```javascript
export const colorPalettes = {
  yourTheme: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
    // ... more colors
  }
}
```

### Updating Content

- **About** - Edit `src/sections/About.jsx`
- **Experience** - Edit `src/sections/Experience.jsx`
- **Projects** - Edit `src/sections/Projects.jsx` and update carousel cards
- **Education** - Edit `src/sections/Education.jsx`
- **Contact** - Edit `src/sections/Contact.jsx`

### 3D Models & Assets

Place custom 3D models, fonts, and images in:
- Models: `src/assets/models/`
- Fonts: `src/assets/fonts/`
- Icons: `src/assets/icons/`

## Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# The dist/ folder is ready to deploy
```

Push the `dist/` folder contents to the `gh-pages` branch or configure GitHub Actions.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy dist/ folder to Netlify
```

## 🔧 Configuration

### Vite Configuration
- Modify `vite.config.js` for build optimization
- Configure `@vitejs/plugin-react` for JSX transformation

### ESLint
- Rules defined in `eslint.config.js`
- Includes React and React Hooks linting

### Tailwind CSS
- Configure in `tailwind.config.js`
- Global styles in `src/index.css`

## 🎥 Features Breakdown

### Interactive Hero
- 3D camera animations on scroll
- Responsive canvas sizing
- Smooth transitions

### Theme System
- 6 built-in themes (Cyberpunk, OceanBlue, Sunset, MintFresh, NeonGreen, GoldenTwilight, RetroWave)
- Live theme switching with context API
- Persistent theme selection

### Responsive Design
- Mobile-first approach
- `react-responsive` for breakpoints
- Tailwind CSS utility classes

### Performance
- Code splitting with Vite
- Image optimization
- Lazy loading for components

## License

This project is open source and available under the MIT License.

## Contact

- GitHub: [@tabries](https://github.com/tabries)
- LinkedIn: [Gabriel Martínez Ayala](https://www.linkedin.com/in/gabriel-martinez-ayala/)
- Email: [gamartinezayala@gmail.com](mailto:gamartinezayala@gmail.com)

---

Made with ❤️ using React, Three.js, and lots of coffee ☕

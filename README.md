# foo-rum

A modern social media platform built with React, featuring authentication, post composition, and social feed functionality.

## ✨ Features

- 🔐 **Authentication System** - Sign in/sign up with client-side storage
- 📝 **Post Composer** - Rich text editor with formatting tools
- 📱 **Social Feed** - Interactive posts with like, comment, share buttons
- 🎨 **Modern UI** - Beautiful design with TailwindCSS
- 📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast** - Built with Vite for optimal performance

## 🚀 Live Demo

Visit the live application: https://atlys-code.netlify.app/

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3 + Custom theme
- **Icons**: Lucide React
- **State**: React Context + localStorage
- **Build**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Himanshusinghofficial/atlys-code-himanshu.git
   cd foo-rum
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

## 🏗️ Build

```bash
npm run build
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run format.fix` - Format code with Prettier

## 🔧 Project Structure

```
$client/                 # React frontend source
├── components/        # React components
├── contexts/         # React contexts (auth)
├── pages/            # Route pages
└── global.css        # TailwindCSS styles

```

## 🎨 Customization

### Theme

Edit `client/global.css` to customize the color scheme and design tokens.

### Components

All components are in `client/components/` and built with TailwindCSS.

### Routing

Add new routes in `client/App.tsx` using React Router.

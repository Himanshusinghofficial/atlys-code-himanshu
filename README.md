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

Visit the live application

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
   git clone [https://github.com/your-username/foo-rum.git](https://github.com/Himanshusinghofficial/atlys-code-himanshu.git)
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

4. **Open your browser:**
   Navigate to `http://localhost:8080`

## 🏗️ Build

```bash
npm run build
```

The built files will be in the `dist/spa` directory.

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository to your GitHub account**

2. **Update the configuration:**

   - In `package.json`, update the `homepage` URL to match your repository
   - In `vite.config.ts`, the base path is already configured for GitHub Pages

3. **Enable GitHub Pages:**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

4. **Deploy:**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy your app
   - Your site will be available at `https://your-username.github.io/foo-rum/`

### Manual Deployment:

If you prefer manual deployment:

```bash
npm run build
# Then upload the contents of dist/spa to your web server
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run format.fix` - Format code with Prettier

## 🔧 Project Structure

```
├── client/                 # React frontend source
│   ├── components/        # React components
│   ├── contexts/         # React contexts (auth)
│   ├── pages/            # Route pages
│   └── global.css        # TailwindCSS styles
├── .github/workflows/    # GitHub Actions
└── dist/spa/            # Built application (after build)
```

## 🎨 Customization

### Theme

Edit `client/global.css` to customize the color scheme and design tokens.

### Components

All components are in `client/components/` and built with TailwindCSS.

### Routing

Add new routes in `client/App.tsx` using React Router.

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note**: This is a frontend-only application with client-side authentication for demo purposes. For production use, implement proper backend authentication and data persistence.

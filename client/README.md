# linuxCV - Desktop Experience Portfolio

A modern, Linux-inspired portfolio built with React, TypeScript, and Framer Motion. Featuring a "liquid glass" window management system with drag-and-drop capabilities.

## 🏗 Architecture Overview

The project is architected as a mini-operating system within a web page.

### 1. State Management (`OSContext.tsx`)

The core "OS logic" resides in a React Context. It manages:

- **Window Registry**: Tracking which windows are open, minimized, or closed.
- **Z-Index Management**: Dynamically updating the stacking order to ensure the active window is always on top.
- **Window Controls**: Global functions to open, close, focus, and minimize windows.

### 2. Draggable Window System (`Window.tsx`)

Utilizes `framer-motion` for high-performance gestures and animations.

- **Drag Handling**: Native-feeling drag with constraints to prevent windows from leaving the viewport.
- **Glassmorphism**: Advanced CSS `backdrop-filter` techniques to create a "liquid glass" effect that blurs the desktop background.
- **Focus Logic**: Automated z-index elevation when a user interacts with a window.

### 3. Desktop Environment (`App.tsx`)

- **Icon Grid**: Dynamic layout of applications/folders.
- **WindowManager**: Integrated into the main view to orchestrate the lifecycle of multiple windows.

## 🎨 Design System

The project uses Vanilla CSS with CSS Variables for consistent styling:

- `--glass-bg`: Semi-transparent background for windows.
- `--glass-blur`: Viewport-dependent blur intensity.
- `--glass-border`: Subtle borders for that "glass" edge look.

## 🛠 Tech Stack

- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Modern CSS 3)

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Mobile Support

On mobile devices, the environment transitions from a multi-window desktop to a "fullscreen modal" approach, ensuring the best user experience on small touch screens.

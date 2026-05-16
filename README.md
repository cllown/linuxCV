# linuxCV

An interactive portfolio/.resume that simulates a Linux-like desktop environment right in your browser — complete with draggable windows, a taskbar, glassmorphism effects, and AI-powered chat.

Live demo: <https://cllown.github.io/linuxCV/>

## Features

- **Desktop Experience** — Window manager with drag-and-drop, z-index stacking, minimize/focus/restore, and a "liquid glass" UI (CSS `backdrop-filter`)
- **AI Assistant** — Built-in chat powered by Gemini / OpenRouter with session history
- **Contact Form** — Visitors can reach out; admin panel to review submissions
- **Responsive** — Transitions to fullscreen modals on mobile
- **Admin Mode** — Access via `Ctrl+Alt+A` shortcut

## Apps

| App          | Description                               |
| ------------ | ----------------------------------------- |
| AI Assistant | Conversational AI chat about your profile |
| About Me     | Bio and personal info                     |
| Experience   | Work history                              |
| Education    | Academic background                       |
| Tech Stack   | Technologies and tools                    |
| Contact      | Message form                              |
| Admin Panel  | View contact submissions (auth-gated)     |

## Architecture

```
linuxCV/
├── client/          # React 19 + TypeScript + Vite
│   └── src/
│       ├── core/    # OS context (window registry, z-index state)
│       ├── ui/      # Window, DesktopIcon, Taskbar, TopBar
│       ├── features/# AboutMe, Experience, Chat, Contact, Admin
│       └── config/  # App registry
├── server/          # Express 5 + TypeScript + SQLite
│   └── src/
│       ├── routes/  # /api/contact, /api/chat, /api/admin
│       ├── controllers/
│       └── services/
└── data/            # SQLite database
```

## Tech Stack

**Client:** React 19 · TypeScript · Vite · Framer Motion · Lucide React · Vanilla CSS

**Server:** Express 5 · TypeScript · SQLite · Gemini API · OpenRouter

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Quick Start

```bash
# Install all dependencies
make install

# Run client (localhost:5173) and server (localhost:5000) simultaneously
make dev
```

### Available Commands

```bash
make dev          # Run client + server in dev mode
make server       # Run server only
make build        # Build client for production
make lint         # Run ESLint
make deploy       # Build and deploy client to GitHub Pages
make clean        # Remove dist/ and node_modules/
```

### Environment Variables

**Server** (`server/.env`):

```env
PORT=5000
DATABASE_URL=data/database.sqlite
GEMINI_API_KEY=your_key_here
OPENROUTER_API_KEY=your_key_here
ADMIN_TOKEN=your_secret_token
```

**Client** (`client/.env`):

```env
VITE_API_URL=http://localhost:5000   # for local dev
# VITE_API_URL=https://linuxcv.onrender.com  # for production
```

## Deployment

- **Client** → GitHub Pages via `gh-pages` package (`make deploy`)
- **Server** → Render (<https://linuxcv.onrender.com>)

## License

ISC

# NextNews - A Modern News Website

A full-featured news website built with Next.js 16, React 19, and TypeScript, designed to deliver concise and unbiased news content with a clean, modern interface.

## 🚀 Features

### Core Functionality
- **Homepage**: Welcome page with site introduction and navigation
- **News Listing**: Display all available news articles with thumbnails
- **Individual News Pages**: Detailed view of each news article
- **Image Gallery**: Modal-based image viewing for news articles
- **News Archive**: Browse news by year and month with filtering capabilities

### Technical Features
- **Server Components**: Optimized with Next.js App Router
- **Modal Routes**: Parallel routes for image modals without page navigation
- **Loading States**: Suspense boundaries for better UX during data fetching
- **Error Handling**: Custom error pages and not-found handling
- **SQLite Database**: Local database for news storage and retrieval
- **Responsive Design**: Mobile-first design with TailwindCSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Database**: SQLite with better-sqlite3
- **Runtime**: Node.js

## 📁 Project Structure

```
course-resources/
├── app/                          # Next.js App Router
│   ├── (content)/               # Content route groups
│   │   ├── archive/             # News archive section
│   │   │   ├── @archive/        # Parallel routes
│   │   │   └── [[...filter]]/   # Dynamic archive filtering
│   │   └── news/                # News section
│   │       └── [slug]/          # Dynamic news pages
│   │           ├── @modal/      # Modal routes for images
│   │           └── image/       # Image detail pages
│   ├── (markting)/             # Marketing/marketing pages
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                  # Reusable React components
│   ├── main-header.tsx         # Site header with navigation
│   ├── news-list.tsx           # News article list
│   ├── nav-link.tsx            # Navigation link component
│   └── modal-backdrop.tsx      # Modal backdrop component
├── lib/                        # Utility functions
│   └── news.js                 # Database operations
├── public/                     # Static assets
│   └── images/news/            # News article images
├── data.db                     # SQLite database
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd course-resources
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📊 Database Schema

The application uses SQLite with a `news` table containing:
- `id`: Primary key
- `slug`: URL-friendly identifier
- `title`: Article title
- `content`: Full article content
- `date`: Publication date
- `image`: Image filename

## 🎯 Key Features Explained

### Parallel Routes
The news section uses Next.js parallel routes (`@modal`) to display images in modals without navigating away from the current page.

### Archive System
The archive section allows filtering news by year and month using dynamic routes `[[...filter]]` that accept optional parameters like `/archive/2024` or `/archive/2024/01`.

### Loading & Error States
- Custom loading components for different sections
- Error boundaries with fallback UI
- Suspense for data fetching states

### Database Operations
All database queries include artificial delays (2 seconds) to simulate real-world API calls and demonstrate loading states.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The application uses TailwindCSS 4 for styling with custom CSS variables and responsive design principles. Styles are organized in:
- `app/globals.css` - Global styles and Tailwind imports
- Component-specific styling using Tailwind classes

## 🌐 Deployment

This Next.js application can be deployed on Vercel, Netlify, or any platform supporting Node.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Learning Resources

This project demonstrates modern Next.js patterns:
- App Router and file-based routing
- Server and Client Components
- Parallel routes and intercepting routes
- Loading states and error handling
- Database integration with SQLite
- TypeScript integration

## 📄 License

This project is part of a Next.js course and is intended for educational purposes.

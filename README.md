# ReelGrabber
# ReelGrabber (Instagram Video & Photo Downloader)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, fast, and user-friendly Instagram downloader built with Next.js 15. 
Download Instagram videos, photos, reels, and carousel posts with ease. 
Features multi-language support, modern UI design, and comprehensive SEO optimization.

**Disclaimer:** This tool is intended for educational purposes only. Downloading
content from Instagram may violate their Terms of Service. Please respect
copyright laws and the platform's policies. Use this tool responsibly and only
for content you have the right to download.

🌐 **Live Demo:** [ReelGrabber.app](https://reelgrabber.app)

![website preview](https://github.com/user-attachments/assets/74e5db68-b5b5-425b-8734-81bbaedeb3c4)

## ✨ Features

- **📹 Instagram Video Downloads:** Download Instagram videos in high quality MP4 format
- **📸 Instagram Photo Downloads:** Download Instagram photos in high quality JPG format  
- **🎠 Carousel Support:** Download multiple photos/videos from Instagram carousel posts
- **📱 Instagram Reels:** Download Instagram Reels and short videos
- **🌍 Multi-Language Support:** Available in 5 languages (English, Spanish, German, French, Russian)
- **🎨 Modern UI Design:** Beautiful purple/pink gradient theme with glass morphism effects
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Mode:** Automatic theme switching with user preference support
- **⚡ Fast Performance:** Built with Next.js 15 and optimized for speed
- **🔍 SEO Optimized:** Complete SEO implementation with structured data and sitemaps
- **📝 Blog System:** Built-in blog for SEO content and user guides
- **⚖️ Legal Compliance:** Complete legal framework with Privacy Policy, Terms of Service, etc.
- **📊 Analytics Ready:** Google Analytics integration for tracking and insights
- **🔧 Type-Safe:** Written entirely in TypeScript for better development experience
- **📋 Paste Functionality:** One-click paste from clipboard for quick URL input
- **🎯 Form Validation:** Robust input validation using React Hook Form and Zod
- **🚀 Modern Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Shadcn/ui components

## 📚 Educational Goals

This project serves as a learning resource for understanding:

- **Next.js Fundamentals:** App Router, Server Components, Client Components,
  API Routes (if implemented for backend logic), SSR/SSG concepts.
- **UI Development:** Building composable and accessible UI components with
  Shadcn/ui, Radix UI primitives, and Tailwind CSS utility classes.
- **State Management:** Managing server state, caching, and background updates
  with TanStack Query.
- **Form Management:** Implementing complex forms with validation using React
  Hook Form and Zod.
- **API Integration:** Fetching data from external sources or custom backend
  endpoints. (The specifics of interacting with Instagram are a key learning
  challenge).
- **TypeScript:** Leveraging static typing in a full-stack React framework.
- **Modern Styling:** Using Tailwind CSS v4 features and utilities like `clsx`
  and `tailwind-merge`.
- **Internationalization:** Setting up and managing translations with
  `next-intl`.
- **Project Structure & Tooling:** Organizing a Next.js application, using
  ESLint and Prettier for code quality.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15+)
- **UI Library:** [Shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Component Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching:**
  [TanStack Query (React Query)](https://tanstack.com/query/latest) (v5)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) (v7)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Linting/Formatting:** ESLint, Prettier
- **Package Manager:** Yarn

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/riad-azz/instagram-video-downloader.git
   ```

   ```bash
   cd instagram-video-downloader
   ```

2. **Install dependencies:**

   ```bash
   yarn install # or npm install
   ```

3. **Run the development server:**

   - This project uses Turbopack for faster development builds.

   ```bash
   yarn dev # or npm run dev
   ```

   - The application should now be running on
     [http://localhost:3000](http://localhost:3000).

4. **Build for production:**

   Ensures Locales are up to date, must be run every time you add/edit a locale
   file for production _(no need to run for development)_.

   ```bash
   yarn build:locales # or npm run build:locales
   ```

   ```bash
   yarn build # or npm run build
   ```

5. **Start the production server:**

   ```bash
   yarn start # or npm run start
   ```

## 💡 Usage

1. Open the application in your web browser.
2. Find the Instagram video you wish to download and copy its URL.
3. Paste the URL into the input field on the application's main page.
4. Click the "Download" button.
5. If successful, a download link or button for the video file should appear.

## 🤝 Contributing

As this is primarily an educational project, contributions might focus on
improving code clarity, adding explanations, fixing bugs, or exploring
alternative approaches to the problems tackled.

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the `LICENSE.md` file for
details.

---

Happy Coding! Remember to use this project responsibly and focus on the learning
aspects.

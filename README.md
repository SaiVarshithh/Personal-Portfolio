# Janagani Sai Varshith Portfolio

Premium personal portfolio for Janagani Sai Varshith, built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, local shadcn-style primitives, and Lucide React.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Deploy

This app is ready for Vercel or any platform that supports Next.js.

## Push To GitHub

After creating an empty GitHub repository, run:

```bash
git add .
git commit -m "Initial portfolio build"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

For Vercel:

1. Push this repository to GitHub.
2. Import the GitHub repo in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

## Project Structure

```text
app/                 App Router pages, layout, metadata, global styles
components/          Portfolio sections and reusable UI components
components/ui/       Local shadcn-style primitives
lib/                 Data and utility helpers
public/              Static metadata assets
```

## Useful Commands

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # run production build
npm run lint     # lint checks
```

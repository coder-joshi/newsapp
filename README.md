# NewsApp

A modern, responsive news application built with React and Vite. Stay updated with the latest news across various categories including General, Entertainment, Sports, Business, and Science.

## Features

- **Categorized News**: Browse news by different categories (General, Entertainment, Sports, Business, Science).
- **Infinite Scrolling**: Seamlessly load more news articles as you scroll down the page.
- **Top Loading Bar**: Visual indicator showing the progress of news fetching.
- **Responsive Design**: Beautiful and responsive UI built with Tailwind CSS.
- **Fast and Optimized**: Powered by Vite for lightning-fast development and optimized production builds.

## Technologies Used

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/) for routing
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)
- [React Top Loading Bar](https://www.npmjs.com/package/react-top-loading-bar)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher is recommended)
- npm or yarn

## Installation

1. Clone the repository (or download the source code):
   ```bash
   git clone <repository-url>
   cd newsapp-repo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Environment Variables

If the application requires an API key to fetch news (e.g., from NewsAPI), you may need to set up environment variables. 
Create a `.env` file in the root directory and add your API key:
```env
VITE_NEWS_API_KEY=your_api_key_here
```
*(Check the `.env` file in the project for specific variable names if required).*

## How to Run

To start the development server, run:
```bash
npm run dev
```

The application will typically be available at `http://localhost:5173`.

## Build for Production

To create a production-ready build, run:
```bash
npm run build
```

To preview the production build, run:
```bash
npm run preview
```

## Linting

To run ESLint to find and fix problems in your JavaScript code:
```bash
npm run lint
```

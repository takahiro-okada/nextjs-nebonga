# NeBonga Project

NeBonga is a production company that provides end-to-end services for planning, filming, directing, and editing for businesses and organizations. This project is built using Next.js and uses WordPress as a headless CMS.

## Overview

This project leverages the power of Next.js for building a fast and scalable frontend, while WordPress serves as the backend CMS for managing content. Key features include:

- Dynamic page generation
- Category-based content filtering
- Optimized and lazy-loaded images
- Mobile-friendly responsive design

## Technologies Used

- Next.js: A React-based framework for building fast and scalable web applications.
- WordPress: Used as a headless CMS to manage content via its GraphQL API.
- GraphQL: For fetching data from WordPress.
- Tailwind CSS: For styling the application.

## Getting Started

Follow these steps to set up the project locally:

Prerequisites
Ensure you have the following installed on your system:

- Node.js (v16 or later)
- pnpm (or npm/yarn)

Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nebonga.git
cd nebonga
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
   Create a .env file in the root directory and add the following:

4. Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to view the application.

Scripts
The following scripts are available in the package.json file:

- pnpm dev: Starts the development server.
- pnpm build: Builds the application for production.
- pnpm start: Starts the production server.
- pnpm lint: Runs the linter to check for code quality issues.

Project Structure
The project is organized as follows:

Environment Variables
The project requires the following environment variables:

- NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL: The URL of the WordPress GraphQL endpoint.
- NEXTJS_AUTH_REFRESH_TOKEN: JWT refresh token for authentication.
- NEXTJS_PREVIEW_SECRET: Secret key for enabling WordPress preview functionality.
- NEXTJS_REVALIDATION_SECRET: Secret key for triggering ISR (Incremental Static Regeneration).
- PREVIEW_KEY: Key for secure preview access.
- NEXT_DISABLE_NETLIFY_EDGE: Disables Netlify Edge for compatibility.

## Deployment

This project can be deployed to platforms like Vercel, Netlify, or any other hosting provider that supports Next.js. Ensure that the required environment variables are set in the hosting platform's environment settings.

Assignment Blueprint for frontend
===============================

## Project Overview
You'll be working on completing an existing Next.js application using the App Router. The project includes basic structures for login, register, profile, and blog pages. Your task is to complete the implemented features, add styling, and improve functionality.

## Task Requirements
Your main task is to finish the application features. While doing so, you are required to:

Implement authentication and localization. Enable i18n routing. Improve the current code to follow best practices.

## Getting Started
Follow these steps to set up the project locally:

#### Clone the repository:
```base
git clone git@github.com:msaaqcom/assignment-frontend-blueprint-blogpost.git
cd assignment-frontend-blueprint-blogpost
```

#### Install dependencies:

```base
npm install
```

#### Start the development server:
```base
npm run dev
```
## Project Structure

- `app/`
    - `[locale]/` - Dynamic route segment for internationalization
      - `(auth)/` - Grouped route for authentication-related pages
        - `login/page.tsx` - Login page
        - `register/page.tsx` - Register page
        - `profile/page.tsx` - Profile page
      - `blog/` - Blog-related pages
        - `[id]/page.tsx` - Blog post page
      - `fonts/` - Custom font files
      - `favicon.ico` - Website favicon
      - `globals.css` - Global CSS styles
      - `layout.tsx` - Root layout component
      - `page.module.css` - CSS module for the main page
      - `page.tsx` - Main page component
- `lib/`
    - `auth.ts` - Authentication utility functions
- `messages/`
    - `ar.json` - Arabic translations
    - `en.json` - English translations
- `i18n.ts` - Internationalization configuration
- `middleware.ts` - Next.js middleware
- `next.config.mjs` - Next.js configuration
- `next-env.d.ts` - TypeScript declarations for Next.js
- `package.json` & `package-lock.json`: Node.js package management
- `README.md`: Project documentation
- `tsconfig.json`: TypeScript configuration
## Your Tasks

### 1. Authentication
- Implement cookie-based authentication for the existing login and register pages. (you can use dummy data, to login/register the user)
- Implement form validation for the login/register forms
- Protect the profile page to be accessible only to authenticated users.
- Implement logout functionality.

### 2. Implement Internationalization
The project uses `next-intl` for internationalization. Your task is to:
- Complete the setup.
- Implement a language switcher component.
- Ensure proper Right-to-Left (RTL) support for Arabic language.

### 3. Use TailwindCSS to code Pixel Perfect Design
- Set up Tailwind CSS in the project.
- Use Tailwind CSS to design [this template for blog pages](https://www.figma.com/community/file/1216616090937021365/free-blog-template-modern-creative-design)
- Implement both light and dark modes as shown in the design.
- Ensure the design is responsive and works well on mobile devices.
- You can use a design of your choice for the login, register, and profile pages

### 4. Blog Functionality
- Complete the blog list page to display all blog posts.
- Implement the individual blog post page.
- Implement pagination for the blog list.
- Add a search functionality for blog posts.
- You can use [this Fake API](https://jsonplaceholder.typicode.com/guide/) to display a list of blogs or show a blog post by id

### 5. SEO and MetaData
- Ensure the application works perfectly with SEO.
- Implement appropriate metadata for all pages to enhance SEO.

### 6. Deployment (bonus task)
- deploy your project to Vercel

## Docs:
- you can always refer back to [Next.js](https://nextjs.org/docs), or [Next-Intel](https://next-intl-docs.vercel.app/docs/getting-started/app-router) if you find your self you need to.
- we recommend you start by following the [official nextjs tutorials](https://nextjs.org/learn )


## Submission
Once you have completed the task, submit your changes by pushing to a new branch and creating a pull request in your cloned repository. Include a detailed description of the changes you made and any additional improvements or features you implemented.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Project Name
Login and Profile Management System

Description
This project is a simple login and profile management system. Users are required to log in with a valid email and password. Upon successful authentication, they are redirected to their profile page, where they can view and update their personal information. Middleware is implemented to ensure that only authenticated users can access the profile page.

Features
User Authentication: Secure login system requiring a valid email and password.
Profile Management: View and update user information on the profile page.
Access Control: Middleware to restrict access to the profile page for unauthenticated users.

Usage
1- Navigate to the Login Page: Enter a valid email and password to log in.
2- Access the Profile Page: After logging in, you will be redirected to your profile page.
Here you can view your personal information and make any necessary updates.
3- Middleware Protection: Attempting to access the profile page without logging in will redirect you to the login page.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

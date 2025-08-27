import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import neuralBlogging from "@/public/neural-blogging.webp";
import eCommerce from "@/public/ecommerce.webp";
import priceseer from "@/public/scraping.webp";
import socialMedia from "@/public/socialmedia.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer",
    location: "Attributy",
    description:
      "Designed an interactive data visualization dashboard that provided real-time insights, enhancing client satisfaction and decision-making. Improved website performance and user experience by increasing page load speed by 30% with Server-side Rendering (SSR), boosting SEO and web traffic. Optimized algorithms to enhance efficiency by 12%, reduced bounce rates by 25%, and developed a more responsive interface to drive user engagement. ",
    icon: React.createElement(CgWorkAlt),
    date: "October 2022 - November 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Freelancer",
    description:
      "Developed a custom web scrapers for data analysis and reporting, and designed an employee scheduling system to automate shift assignments and improve workforce management. Advised on coding best practices and design patterns, enhancing software quality and ensuring alignment with project objectives.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Aug 2025",
  },
  {
    title: "Web Development Instructor",
    location: "London School & Logiscool",
    description:
      "Taught HTML & CSS fundamentals, including modern layouts (Flexbox, CSS Grid) and web animations (keyframes, transitions) to help students build interactive, responsive pages. Instructed JavaScript basics through CRUD operations and REST API integration—guiding students to fetch, display, and manipulate real data in browser-based projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 - Aug 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Neural Blogging",
    description:
      "This project is a Progressive Web App (PWA) designed to provide a seamless native app experience on mobile devices. It leverages ChatGPT and web APIs to assist users in creating blog posts. When a new blog post is published, all registered devices with notifications enabled will receive a notification, ensuring users stay updated with the latest content. The app combines the accessibility of a website with the functionality and engagement of a native application. For the moment I have disabled the notification feature",
    icons: ["logos:typescript-icon", "logos:nextjs-icon", "logos:react", "logos:framer", "logos:tailwindcss-icon", "logos:supabase-icon"],
    imageUrl: neuralBlogging,
    githubLink: "https://github.com/ErvinBehxheti/NeuralBlogging",
    urlLink: "https://neural-blogging.vercel.app/",
  },
  {
    title: "DigitalLove - eCommerce Store",
    description:
      "This project is a streamlined eCommerce platform built with Next.js, Sanity, and Stripe. It features a user-friendly interface where customers can browse products, view detailed descriptions, and make secure purchases. Sanity handles content management, allowing for easy updates to product listings and site content. Stripe for ensuring secure transactions. The platform provides a smooth shopping experience with fast loading times and responsive design, optimized for both desktop and mobile devices",
    icons: ["logos:typescript-icon", "logos:nextjs-icon", "logos:react", "devicon:tailwindcss", "devicon:sanity"],
    imageUrl: eCommerce,
    urlLink: "https://next-typescript-ecommerce-sanity-stripe-wggq.vercel.app/",
    githubLink:
      "https://github.com/ErvinBehxheti/next_typescript_ecommerce_sanity_stripe",
  },
  {
    title: "PriceSeer",
    description:
      "Using Next.js Server Actions, I created a web scraper that collects product information from the Amazon website and adds it to PriceSeer, a price-tracking platform. The scraper efficiently retrieves data such as product prices, descriptions, and availability. To enhance user experience, I also implemented cron jobs that run at scheduled intervals, automatically notifying subscribers whenever there are changes to the product's price or other key details (SCRAPING NOT WORKING MOMENTARILY)",
    icons: [
      "logos:javascript",
      "logos:typescript-icon",
      "logos:nextjs-icon",
      "devicon:mongodb",
      "devicon:tailwindcss",
    ],
    imageUrl: priceseer,
    githubLink: "https://github.com/ErvinBehxheti/priceseer",
    urlLink: "https://priceseer.vercel.app/",
  },
  {
    title: "Social Media App",
    description:
      "The website is a TikTok clone built using modern web development technologies. Developed with Next.js, the site ensures fast server-side rendering and optimized performance. Tailwind CSS is used to create a responsive and mobile-friendly user interface, that works effortlessly across devices.Sanity.io for the backend, allowing for content management and dynamic video uploads. The integration of Google authentication simplifies the login process, offering users a secure way to sign in or create accounts. Search filters are implemented to help users discover content easily.The file structure of the application is well-organized, promoting scalability and maintainability.",
      icons: ["logos:typescript-icon", "logos:nextjs-icon", "logos:react", "devicon:tailwindcss", "devicon:sanity"],
    imageUrl: socialMedia,
    githubLink:
      "https://github.com/ErvinBehxheti/next_typescript_googleauth_socialmedia",
    urlLink: "https://tiktik-03.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "NextJS",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Redux",
    icon: "logos:redux",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
] as const;

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Geni AI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developed and optimized web applications using React.js to deliver dynamic and interactive user experiences.",
      "Collaborated closely with cross-functional teams including designers, product managers, and back-end developers to build robust and scalable applications.",
      "Ensured responsive design implementation across various devices and ensured cross-browser compatibility for seamless user interactions.",
      "Contributed to code reviews, mentoring junior developers, and providing constructive feedback to ensure high-quality code and adherence to best practices.",
    ],
  },  
  {
    title: "Vue.js Developer",
    company_name: "Dashboard Professional",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Vue.js and related technologies to enhance user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to ensure the development of high-quality products that meet client needs.",
      "Implementing responsive design and ensuring cross-browser compatibility for optimal performance and a smooth user interface.",
      "Participating in code reviews and providing constructive feedback to improve code quality, performance, and reliability."
    ],
  },
  
  {
    title: "MERN Stack Developer",
    company_name: "ChatFlow",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining scalable web applications using React.js for the front-end and Node.js for the back-end.",
      "Building RESTful APIs and integrating third-party services to enhance application functionality.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality, user-centered products.",
      "Implementing best practices for performance optimization, responsive design, and cross-browser compatibility.",
      "Participating in code reviews, ensuring high code quality, and mentoring junior developers."
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ChatFlow",
    description:
      "ChatFlow is a web platform that simplifies car rentals by allowing users to search, book, and manage rentals from various providers, offering a convenient and efficient transportation solution.",
    tags: [
      {
        name: "React - Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "blue-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jenni AI",
    description:
      "A sleek web app interface for Jenni AI, showing job listings with salary estimates and a map for nearby opportunities, all in a clean, modern design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dashboard",
    description:
      "A user-friendly and interactive dashboard designed to provide easy access to all your key data and insights, with customizable features for a seamless experience.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

export const skills = {
  languages: {
    title: "Languages",
    data: [
      {
        imageUrl: "/logos/js.png",
        title: "Javascript",
      },
      {
        imageUrl: "/logos/ts.png",
        title: "Typescript",
      },
    ],
  },
  developmentPlatform: {
    title: "Development Platform",
    data: [
      {
        imageUrl: "/logos/github.png",
        title: "Github",
      },
      {
        imageUrl: "/logos/gitlab.png",
        title: "Gitlab",
      },
    ],
  },
  makeUpAndStyle: {
    title: "Make Up & Style",
    data: [
      {
        imageUrl: "/logos/sass.png",
        title: "SASS",
      },
      {
        imageUrl: "/logos/tailwind.png",
        title: "TailwindCss",
      },
      {
        imageUrl: "/logos/material-ui.png",
        title: "Material UI",
      },
    ],
  },
  librariesAndFrameworks: {
    title: "Libraries & Frameworks",
    data: [
      {
        imageUrl: "/logos/react.svg",
        title: "ReactJs",
      },
      {
        imageUrl: "/logos/nextjs.png",
        title: "NextJs",
      },
      {
        imageUrl: "/logos/nestjs.png",
        title: "NestJs",
      },
      {
        imageUrl: "/logos/expressjs.png",
        title: "ExpressJs",
      },
    ],
  },
  databases: {
    title: "Databases",
    data: [
      {
        imageUrl: "/logos/mongodb.png",
        title: "MongoDB",
      },
    ],
  },
  deployment: {
    title: "CI/CD & Deployment",
    data: [
      {
        imageUrl: "/logos/docker.png",
        title: "Docker",
      },
    ],
  },
};

export const projects = [
  {
    title: "Spreed - Plejd",
    description:
      "Building features and fixing bugs for SPREED project.  Refactoring the source code, making it more readable and maintainable.  Optimization the performance of the application through reducing re-rendering, memorization, code splitting and so on . Increasing user experience faster and smother, helping tester save a lot of time to check the quality of the products",
    imageUrl: "/images/spreed-plejd.png",
    tech: ["React", "Typescript", "Material UI", "Docker", "NestJs", "MongoDB"],
    link: "",
  },
  {
    title: "Companions - Final Exam Project",
    description:
      "Our Companions Application aims to provide a convenient and eco-friendly solution for commuters to share rides , reducing traffic congestion, carbon emissions and transportation costs. Build with NextJS , NodeJS and MongoDB , our platform offers a seamless experience for both drivers and passengers, facilitating easy coordination and communication.\
Implemented CI/CD pipelines for the project to automatically deploy Frontend on Vercel and Backend Source on Render by Docker Image. (The link might not be available) ",
    imageUrl: "/images/companions.png",
    tech: ["NextJs", "Typescript", "SCSS", "ExpressJs", "MongoDB", "Docker"],
    link: "https://companions-app-client-sigma.vercel.app/",
  },
];

export const educations = [
  {
    education: "Bachelor's degree in Azure Devops Engineer",
    finish: true,
    time: "4/2024 - 6/2024",
    land: "Sweden",
    tech: [
      "Docker",
      "Azure",
      "CI/CD",
      "Kubernetes",
      "Jenkins",
      "Github Actions",
      "Gitlab CI",
    ],
  },
  {
    education:
      "Bachelor's degree in Fullstack Software Engineering , focusing on Javascript",
    time: "8/2022 - 6/2024  ",
    finish: true,
    land: "Sweden",
    tech: [
      "Javascript",
      "React",
      "Typescript",
      "MongoDB",
      "ExpressJs",
      "Docker",
      "CI/CD",
      "Amazon Web Services",
    ],
  },
];

export const experiences = [
  {
    position: "Web developer (Internship - Full-time)",
    company: "Plejd AB, Gothenburg, Sweden",
    date: "",
    finish: true,
    description:
      "Building features and fixing bugs for SPREED project. Refactoring the source code, making it more readable and maintainable. Optimization the performance of the application through reducing re-rendering, memorization, code splitting and so on. Increasing user experience faster and smother, helping tester save a lot of time to check the quality of the products",
    tech: ["React", "Typescript", "Material UI", "Docker", "NestJs", "MongoDB"],
  },
  {
    position: "Frontend developer (Self-employed)",
    company: "Ecomx, Vietnam",
    date: "",
    finish: true,
    description:
      "Managed a team of 3 developers to build an E-commerce project that sells technology accessories, for instance, keyboards and computer mice, mobile accessories, etc.. Sometimes I help to improve or create new Apis.",
    tech: [
      "React",
      "Typescript",
      "Material UI",
      "NextJs",
      "MongoDB",
      "ExpressJs",
      "SCSS",
      "TailwindCss",
      "Docker",
    ],
  },
  {
    position: "Frontend developer (Freelancer)",
    company: "Ecomx, Vietnam",
    date: "",
    finish: true,
    description:
      "Building UI the same as designing and maintaining existing one's applications and systems. Collaborates with testers to ensure a seamless and high-quality user experience",
    tech: ["React", "Typescript", "Material UI"],
  },
];

export const filterLogos = () => {
  const keys = Object.keys(skills);

  const result: {
    imageUrl: string;
    title: string;
  }[] = [];
  keys.forEach((key: string) => {
    const data = skills[key as keyof typeof skills].data;
    result.push(...data);
  });

  return result;
};

export const getTech = (tech: string) => {
  return filterLogos().find((item) => item.title === tech) || null;
};

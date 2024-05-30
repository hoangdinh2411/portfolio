export const logos = {
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
        title: "Material-UI",
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
};

export const filterLogos = () => {
  const keys = Object.keys(logos);

  const result: {
    imageUrl: string;
    title: string;
  }[] = [];
  keys.forEach((key: string) => {
    const data = logos[key as keyof typeof logos].data;
    result.push(...data);
  });

  return result;
};

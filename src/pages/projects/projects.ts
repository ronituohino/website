type Project = {
  title: string;
  organization?: string;
  year: string;
  description: string;
  technologies: Technology[];
  demoUrl?: string;
  googlePlayUrl?: string;
  githubUrl?: string;
  slug: string;
  // first is chosen as hero image
  images: ImageFile[];
  seo: {
    description: string;
  };
  shown?: "featured" | "frontlist";
};

type ImageFile = {
  file: string;
  alt: string;
};

type Technology = string;

export const projects = [
  {
    title: "Ruutu",
    organization: "Sanoma",
    year: "2023",
    description: `Finnish over-the-top video streaming service, 
      with live event capabilities. Very similar to Netflix 
      in many ways.`,
    technologies: [
      "Next",
      "React",
      "Storybook",
      "Docker",
    ] satisfies Technology[],
    demoUrl: "https://ruutu.fi",
    slug: "ruutu",
    images: [{ file: "", alt: "" }] satisfies ImageFile[],
    seo: {
      description: "",
    },
    shown: "featured",
  },
  {
    title: "Doodle Design",
    organization: "University of Helsinki",
    year: "2022",
    description: `This is an e-commerce store for an imaginary clothing 
      brand. You can create an account and place orders with a 
      full checkout process. Admins can manage categories, 
      products and accounts on a separate application. 
      The entire app, and development environment, is containerized.`,
    technologies: [
      "React",
      "MUI",
      "TypeScript",
      "Node",
      "Express",
      "GraphQL",
      "MongoDB",
      "Docker",
    ] satisfies Technology[],
    demoUrl: "https://recom-pnxd5duksa-lz.a.run.app/",
    githubUrl: "https://github.com/ronituohino/doodle-design",
    slug: "doodle-design",
    images: [] satisfies ImageFile[],
    seo: {
      description: `Project overview of Doodle Design, a demo of a clothing 
        brand store.`,
    },
    shown: "featured",
  },
  {
    title: "Chroniconnect",
    organization: "Junction",
    year: "2023",
    description: `48-hour-long hackathon project for Tietoevry, 
      a Finnish med-tech company.`,
    technologies: ["React", "Vite", "MUI"] satisfies Technology[],
    slug: "chroniconnect",
    images: [] satisfies ImageFile[],
    seo: {
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "SCAS",
    year: "2023",
    description: `A cryptocurrency security auditing tool.`,
    technologies: [
      "Tauri",
      "Vite",
      "TypeScript",
      "Radix",
    ] satisfies Technology[],
    slug: "scas",
    images: [] satisfies ImageFile[],
    seo: {
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "Battle Sheep",
    organization: "University of Helsinki",
    year: "2022",
    description: `Web version of the popular board game with the same name.`,
    technologies: ["React", "Vite", "TypeScript"] satisfies Technology[],
    demoUrl: "https://battle-sheep-game.web.app/",
    githubUrl: "https://github.com/ronituohino/battle-sheep",
    slug: "battle-sheep",
    images: [] satisfies ImageFile[],
    seo: {
      description: `Project overview of Battle Sheep, a university algorithms project.`,
    },
    shown: "frontlist",
  },
  {
    title: "Viitevarasto",
    organization: "University of Helsinki",
    year: "2022",
    description: `This is a BibTeX references management system. 
      It is a group project for a software production course. 
      The idea is that the user can upload their BibTeX references 
      onto the application and select which ones to compile into 
      a references file for whatever document they are working on. 
      This avoids having to manually manage the BibTeX file and 
      updating the references throughout the document, and it also 
      makes adding new references easier.`,
    technologies: ["Python", "Flask", "Postgres"] satisfies Technology[],
    demoUrl: "https://viitevarasto.fly.dev/",
    githubUrl: "https://github.com/ronituohino/viitevarasto",
    slug: "viitevarasto",
    images: [] satisfies ImageFile[],
    seo: {
      description: `Project overview of Viitevarasto, a references 
        management system.`,
    },
    shown: "frontlist",
  },
  {
    title: "GParticles",
    year: "2021",
    description: "Mobile art project ",
    technologies: ["Unity", "C#"] satisfies Technology[],
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.Tuohino.GParticles",
    githubUrl: "https://github.com/ronituohino/gparticles",
    slug: "gparticles",
    images: [] satisfies ImageFile[],
    seo: {
      description: `Project overview of GParticles,
      a mobile art project.`,
    },
    shown: "frontlist",
  },
] satisfies Project[];

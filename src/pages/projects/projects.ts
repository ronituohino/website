type Project = {
  title: string;
  organization: string;
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
    description: "",
    technologies: [] satisfies Technology[],
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
    description:
      "Ecommerce store demo for selling a clothing brand. Create an account and place orders with a full checkout process. Admins can manage categories, products and accounts on a separate application.",
    technologies: [
      "React",
      "MUI",
      "TypeScript",
      "Node",
      "Express",
      "GraphQL",
      "MongoDB",
    ] satisfies Technology[],
    demoUrl: "https://recom-pnxd5duksa-lz.a.run.app/",
    githubUrl: "https://github.com/ronituohino/doodle-design",
    slug: "doodle-design",
    images: [] satisfies ImageFile[],
    seo: {
      description:
        "Project overview of Doodle Design, a demo of a clothing brand store.",
    },
    shown: "featured",
  },
  {
    title: "Supla",
    organization: "Sanoma",
    year: "2023",
    description: "",
    technologies: [] satisfies Technology[],
    demoUrl: "https://supla.fi",
    slug: "supla",
    images: [] satisfies ImageFile[],
    seo: {
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "Chroniconnect",
    organization: "Junction 2023",
    year: "2023",
    description: "",
    technologies: [] satisfies Technology[],
    slug: "chroniconnect",
    images: [] satisfies ImageFile[],
    seo: {
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "SCAS",
    organization: "",
    year: "2023",
    description: "",
    technologies: [] satisfies Technology[],
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
    description: "",
    technologies: ["React", "Vite", "TypeScript"] satisfies Technology[],
    demoUrl: "https://battle-sheep-game.web.app/",
    githubUrl: "https://github.com/ronituohino/battle-sheep",
    slug: "battle-sheep",
    images: [] satisfies ImageFile[],
    seo: {
      description:
        "Project overview of Battle Sheep, a university algorithms project.",
    },
    shown: "frontlist",
  },
  {
    title: "Viitevarasto",
    organization: "University of Helsinki",
    year: "2022",
    description: "",
    technologies: ["Python", "Flask", "Postgres"] satisfies Technology[],
    demoUrl: "https://viitevarasto.fly.dev/",
    githubUrl: "https://github.com/ronituohino/viitevarasto",
    slug: "viitevarasto",
    images: [] satisfies ImageFile[],
    seo: {
      description:
        "Project overview of Viitevarasto, a references management system.",
    },
    shown: "frontlist",
  },
  {
    title: "GParticles",
    organization: "",
    year: "2021",
    description: "",
    technologies: ["Unity", "C#"] satisfies Technology[],
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.Tuohino.GParticles",
    githubUrl: "https://github.com/ronituohino/gparticles",
    slug: "gparticles",
    images: [] satisfies ImageFile[],
    seo: {
      description: "Project overview of GParticles, a mobile art project.",
    },
    shown: "frontlist",
  },
] satisfies Project[];

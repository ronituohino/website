type Project = {
  title: string;
  organization: string;
  year: string;
  description: string;
  techonologies: string[];
  demoUrl?: string;
  googlePlayUrl?: string;
  githubUrl?: string;
  slug: string;
  images: string[];
  seo: {
    title: string;
    description: string;
  };
  shown?: "featured" | "frontlist";
};

export const projects = [
  {
    title: "Ruutu",
    organization: "Sanoma",
    year: "2023",
    description: "",
    techonologies: [],
    demoUrl: "https://ruutu.fi",
    slug: "ruutu",
    images: [],
    seo: {
      title: "Ruutu - Roni Tuohino",
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
    techonologies: [
      "React",
      "MUI",
      "TypeScript",
      "Node",
      "Express",
      "GraphQL",
      "MongoDB",
    ],
    demoUrl: "https://recom-pnxd5duksa-lz.a.run.app/",
    githubUrl: "https://github.com/ronituohino/doodle-design",
    slug: "doodle-design",
    images: [],
    seo: {
      title: "Doodle Design - Roni Tuohino",
      description:
        "Project overview of Doodle Design, a demo of a clothing brand store",
    },
    shown: "featured",
  },
  {
    title: "Supla",
    organization: "Sanoma",
    year: "2023",
    description: "",
    techonologies: [],
    demoUrl: "https://supla.fi",
    slug: "supla",
    images: [],
    seo: {
      title: "Supla - Roni Tuohino",
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "Chroniconnect",
    organization: "",
    year: "2023",
    description: "",
    techonologies: [],
    slug: "chroniconnect",
    images: [],
    seo: {
      title: "Chroniconnect - Roni Tuohino",
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "SCAS",
    organization: "",
    year: "2023",
    description: "",
    techonologies: [],
    slug: "scas",
    images: [],
    seo: {
      title: "SCAS - Roni Tuohino",
      description: "",
    },
    shown: "frontlist",
  },
  {
    title: "Battle Sheep",
    organization: "University of Helsinki",
    year: "2022",
    description: "",
    techonologies: ["React", "Vite", "TypeScript"],
    demoUrl: "https://battle-sheep-game.web.app/",
    githubUrl: "https://github.com/ronituohino/battle-sheep",
    slug: "battle-sheep",
    images: [],
    seo: {
      title: "Battle Sheep - Roni Tuohino",
      description:
        "Project overview of Battle Sheep, a university algorithms project",
    },
    shown: "frontlist",
  },
  {
    title: "Viitevarasto",
    organization: "University of Helsinki",
    year: "2022",
    description: "",
    techonologies: ["Python", "Flask", "Postgres"],
    demoUrl: "https://viitevarasto.fly.dev/",
    githubUrl: "https://github.com/ronituohino/viitevarasto",
    slug: "viitevarasto",
    images: [],
    seo: {
      title: "Viitevarasto - Roni Tuohino",
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
    techonologies: ["Unity", "C#"],
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.Tuohino.GParticles",
    githubUrl: "https://github.com/ronituohino/gparticles",
    slug: "gparticles",
    images: [],
    seo: {
      title: "GParticles - Roni Tuohino",
      description: "Project overview of GParticles, a mobile art project.",
    },
    shown: "frontlist",
  },
] satisfies Project[];

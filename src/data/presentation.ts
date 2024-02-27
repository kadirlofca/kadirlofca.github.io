type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kadirlofca@outlook.com",
  title: "Hi, I'm Kadir",
  profile: "/profile.webp",
  description:
    "I'm a software engineer in North Carolina. I make games, hang out with my cat Kroger ❤️ and eat profiteroles 😌",
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/kadirlofca",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kadirlofca",
    },
    {
      label: "kadirlofca@outlook.com",
      link: "mailto:kadirlofca@outlook.com",
    },
  ],
};

export default presentation;

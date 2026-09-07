export const siteConfig = {
  name: "Ooi Say Chong",
  title: "Senior Game Developer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "saychong1991@hotmail.com",
    linkedin: "https://www.linkedin.com/in/say-chong-ooi-040412b0/",
    github: "https://github.com/MewEight",
  },
  aboutMe:
    "Senior Game Developer with 10+ years of experience making games. I have worked on title that are published on multiple platforms (Android, iOS, and PC). My main stack is mainly Unity, but I am always learning more and experimenting more with other game engines, like Godot, and Unreal. I have built games that are prototypes, to full on production games that are played by millions.",
  skills: ["Unity", "Godot", "Solar2D", "C/C++/C#", "JavaScript", "Python", "Lua", "Typescript"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Linx Interactive, Netherlands",
      title: "Senior Game Developer",
      dateRange: "August 2025 - July 2026",
      bullets: [
        "Built a game in 3 months. It consists of networking, physics/control systems, third-party platform API integration, and analytics",
        "Ported a game from a legacy engine to a newer propreitary engine",
        "Built reusable, modular systems that ended up becoming the standard for gameplay interactions",
        "Built internal AI tooling and worked out best practices for using generative AI in development",
        "Reviewed code and mentored junior developers on our codebase and internal tooling",
        "Helped bring CI/CD into the team to make builds more stable and predictable, and worked with production to streamline delivery timelines",
        "Wrote delivery processes that ended up getting adopted company-wide"
      ],
    },
    {
      company: "Chimpworks, Netherlands",
      title: "Senior Game Developer • Game Designer • Product Owner",
      dateRange: "July 2019 - August 2025",
      bullets: [
        "Took over as lead developer on a legacy codebase, migrating it to a modern engine while still shipping releases along the way",
        "Ran sprint planning for the dev team, owning timelines and advising on technical feasibility and risk for big features",
        "Worked with data and marketing to hook up analytics, surfacing user-behavior insights that shaped acquisition strategy",
        "Built internal tooling, shaders, and modular systems used company-wide, including a custom level editor that sped up content production",
        "Built AI behaviour system, that is easily expandable to include more behaviours",
        "Optimized the game, to make sure that it runs smoothly and also conserves battery",
        "Standardized how we integrated third-party SDKs by building reusable packages used across every active project",
        "Owned the CI/CD pipeline end-to-end. Kept builds reliable, on-time, and accessible for the whole team",
        "Built an extensible state-behavior framework for AI-driven agents, so designers could iterate independently without engineering support",
        "Cut load times and package size through asset streaming and bundling",
        "Prototyped several projects in a matter of weeks to test feasibility before committing further",
      ],
    },
    {
      company: "Gamelobb Berhad, Malaysia",
      title: "Lead Game Developer",
      dateRange: "June 2018 - June 2019",
      bullets: [
        "Owned a cross-platform product start to finish, leading the team to a 3-month launch on a codebase that later became a training reference for new engineers",
        "Led tech on a networking project, and building the real-time networking systems from the ground up",
        "Built editor tooling that sped up the design-to-engine pipeline",
        "Mentored junior engineers and interns, and helped interview new hires",
        "Helped land investor funding and rebuilt core systems to be more robust long-term",
        "Prototyped a game as a mod in the dota 2 engine, to test out the game idea before full implementation on Unity"
      ],
    },
    {
      company: "Appxplore Sdn Bhd, Malaysia",
      title: "Game Developer",
      dateRange: "Mar 2016 - June 2018",
      bullets: [
        "Was the sole engineer taking a mobile release from legacy IP to a modern product, shipping iOS and Android in 9 months alongside one artist",
        "Built an endless runner puzzle game, that was the first product using Unity built in system instead of third party tools",
        "Built an internal sdk to serve cross-promo ads. Worked a little on the backend and the native sdk",
        "Built two full meta-progression systems, an audio pipeline, and implemented visual effects",
        "Set the company standard for a third-party animation pipeline and built an internal SDK used to centralize integrations across every project",
        "Led a UX overhaul and technical QA, using telemetry and analytics to track down and fix high-priority issues.",
        "Prototyped a game as a mod in the dota 2 engine, to test out the game idea before full implementation on Unity"
      ],
    }
  ],
  education: [
    {
      school: "KDU University College",
      degree: "Bachelor of Game Development",
      dateRange: "2012 - 2015",
      achievements: [
        "First Class Honors",
        "Top Student Award",
        "Industry Award For Excellence",
      ],
    }
  ],
};

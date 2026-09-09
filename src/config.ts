import pizzaKitchenImg from "../src/images/pizzakitchen.png"
import pileUpImg from "../src/images/pileup.png"
import riderImg from "../src/images/Rider.jpg"
import riderWorldsImg from "../src/images/RiderWorlds.jpg"
import heroesBattleImg from "../src/images/HeroesBattle.jpg"
import shootnlootImg from "../src/images/shootnloot.jpg"
import bounceAHeadImg from "../src/images/BounceAhead.png"
import battleOfTheRimImg from "../src/images/BattleOfTheRim.png"
import lightAWayImg from "../src/images/LightAway.jpg"
import caveboyGoImg from "../src/images/CaveboyGO.jpg"
import profilePicture from "../src/images/profile.jpg"

export const siteConfig = {
  name: "Ooi Say Chong",
  title: "Senior Game Developer",
  profilePicture: profilePicture,
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "saychong1991@hotmail.com",
    linkedin: "https://www.linkedin.com/in/say-chong-ooi-040412b0/",
    github: "https://github.com/MewEight",
  },
  aboutMe:
    "I have 10+ years of experience making games. I have worked on title that are published on multiple platforms (Android, iOS, and PC). My main stack is mainly Unity, but I am always learning more and experimenting more with other game engines, like Godot, and Unreal. I have built games that are prototypes, to full on production games that are played by millions.",
  skills: ["Unity", "Godot", "Solar2D", "C/C++/C#", "JavaScript", "Python", "Lua", "Typescript"],
  projects: [
    {
      name: "Pizza Kitchen",
      image: pizzaKitchenImg,
      role: "Senior Game Developer",
      description:
        "A VR game on the Horizon Worlds platform. Role play as anything you wish for in a pizza island.",
      bullets:
        [
          "Ported the game over to a new engine",
          "Worked with a custom ui engine that is similar to noesis gui",
          "Implemented gameplay features with VR and mobile interactions in mind",
        ],
        links: [
          { label: "Horizon", url: "https://horizon.meta.com/world/489075530784006/" },
        ],
      skills: ["Horizon Editor", "PC"],
      trailer: "https://www.youtube.com/watch?v=KkUDyE7KxLw",
    },
    {
      name: "Pile Up",
      image: pileUpImg,
      role: "Lead Game Developer",
      description:
        "A cozy, object stacking puzzle game with playful physics - every object matters. Work together with a friend, plan each move carefully, enchant objects with unique traits, and master balance and strategy to build the tallest pile imaginable!",
      bullets:
        [
          "Implemented mirror networking and steam integrations",
          "Sole developer on the project",
          "Created tools to speed up development",
          "Done in 3 months",
        ],
      links: [
        { label: "Steam", url: "https://store.steampowered.com/app/3994220/Pile_Up/" },
      ],
      skills: ["Unity", "Steam", "PC"],
      trailer: "https://www.youtube.com/watch?v=4sJaake_-jA",
    },
    {
      name: "Rider",
      image: riderImg,
      role: "Lead Game Developer / Senior Game Developer / Product Owner",
      description:
        "A 2D physics based endless runner.",
      bullets:
        [
          "Primary developer for the project before it moved to Unity",
          "Implemented core meta systems, like daily login, achievements, progressions, and competitions",
          "Developed shader and vfx integrations",
          "Optimized the game and reduced draw calls",
          "Integrated 3rd party sdks",
        ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/us/app/rider-stunt-bike-racing/id1229618961" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.ketchapp.rider" },
      ],
      skills: ["Unity", "Solar2D", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=5_yiVYxrcII",
    },
    {
      name: "Rider Worlds",
      image: riderWorldsImg,
      role: "Senior Game Developer",
      description:
        "A sequel to the original Rider game. Now in 3D and more obstacles",
      bullets:
        [
          "Implemented main progression systems",
          "Implemented addressable system.",
          "Built tools to help accelerate level and gameplay design",
          "Implemented 3rd party sdk",
          "Guided other developers on system integration and planning"
        ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/us/app/rider-worlds-neon-bike-races/id6449429925" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.ketchapp.rider.evolution.world.race.car.bike.flip" },
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=VmrPbJTQInQ",
    },
    {
      name: "Heroes Battle",
      image: heroesBattleImg,
      role: "Game Designer",
      description:
        "A tactical RPG and Autobattler",
      bullets:
        [
          "Implemented the IAP framework that was later adopted across all projects in the company",
          "Refined AI behaviour",
          "Created tooling to quickly playtest units",
        ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/nl/app/heroes-battle-auto-battler-rpg/id1497855667" },
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=yRkd_QnzwlI",
    },
    {
      name: "Shoot N Loot",
      image: shootnlootImg,
      role: "Game Developer",
      description:
        "A action hero adventure game with roguelike elements. Heavily insprired by Archero",
      bullets:
        [
          "Implemented enemy AI behaviour. Create a system that is easy to expand on",
          "Created a level editor for designers to create levels, and quickly test them",
          "Optimized the game to reduce performance impact because of the amount of level and resources needed",
          "Implemented general optimization techniques for UI and objects",
        ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/gb/app/shoot-n-loot-action-rpg/id1479961209" },
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=oNrdm_KMYIk",
    },
    {
      name: "Bounce AHead",
      image: bounceAHeadImg,
      role: "Lead Game Developer / Product Owner",
      description:
        "A physics based game, with hyper casual gameplay in mind.",
      bullets:
        [
          "Implemented core function of the game and the progression system",
          "Game later used as the testbed for junior developers",
          "Secured a local grant for the game after 1 month of development",
        ],
      links: [
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=LbnPBt1zDTE",
    },
    {
      name: "Battle of The Rim",
      image: battleOfTheRimImg,
      role: "Lead Game Developer",
      description:
        "A MOBA game with a twist of having a single boss as the main victory condition. Heavily inspired by Dota",
      bullets:
        [
          "Prototyped the game on the dota engine",
          "Recreated the prototype on Unity with photon networking",
          "Created tools to fasten development iteration on skills",
          "Optimized networking elements to improved responsiveness",
        ],
      links: [
      ],
      skills: ["Unity", "PC", "Source2"],
      trailer: "https://www.youtube.com/watch?v=NJNsJFoqaAo",
    },
    {
      name: "Light A Way",
      image: lightAWayImg,
      role: "Game Developer",
      description:
        "Idle game where you are gifted with the magical Staff of Flare, you must set on a path to restore the Light back to the world and rid the darkness that has tainted the very lands that you step on",
      bullets:
      [
        "Implemented core progression system like rebirth and constellation system",
        "Implemented VFX and Spine animation",
        "Build UI and tweening transitions to improve game feel",
        "Supported back-end to build internal SDK for cross-promo",
      ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/us/app/light-a-way/id1228576904" },
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=-9b9fGXzByI",
    },
    {
      name: "Caveboy GO",
      image: caveboyGoImg,
      role: "Game Developer",
      description:
        "A 2d puzzle game with match 3 elements",
      bullets:
      [
        "Converted a legacy game to a new modern take",
        "Implemented all the systems, and integrated a new UI workflow",
        "Solo developer on the project with one artist and a designer",
        "Brought concept to life, within 9 months",
      ],
      links: [
        { label: "iOS", url: "https://apps.apple.com/us/app/caveboy-go/id1148826821" },
      ],
      skills: ["Unity", "Android", "iOS"],
      trailer: "https://www.youtube.com/watch?v=lskJ1a9toLY",
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

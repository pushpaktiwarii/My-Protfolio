// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Pushpak Tiwari",
  initials: "PT",
  avatar: {
    asset: {
      url: "/me.jpg",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "B.Tech AIML Student | Google Student Ambassador | Community Builder",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I’m Pushpak Tiwari, a B.Tech AIML student driven by curiosity and the thrill of building things that matter. I work at the intersection of AI, web development, and creative technology exploring how digital experiences can become smarter, more intuitive and more human.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I currently serve as a Google Student Ambassador, lead the GDG Prayagraj Core Team, and coordinate E-Cell UCER to strengthen the entrepreneurial culture on campus. My journey kicked off as a GDG volunteer, grew through developer events and DevFest projects and shaped the way I lead teams, solve problems, and move fast under pressure.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Along the way, I also worked as a Web Development & SEO intern, building responsive interfaces and real product improvements.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "What truly excites me is this mix of tech + creativity + community. I love exploring new ideas, experimenting on projects, and pushing myself to build things that make an actual difference.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Still learning. Still improving. Still building. Always.",
        },
      ],
    },
  ],
  location: "Naini, Prayagraj",
  skills: [
    "Team Leadership",
    "Responsive Web Design",
    "AWS",
    "AI/ML",
    "Community Management",
    "SEO",
    "WordPress",
    "Elementor",
    "React",
    "Web Technologies",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/pushpaktiwari/",
    email: "pushpaktiwari6@gmail.com",
    github: "https://github.com/pushpaktiwarii",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "GDG Prayagraj",
    title: "Core Team Lead",
    location: "Prayagraj, Uttar Pradesh",
    startDate: "Dec 2025",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Leading the core team, organizing events, and fostering the developer community in Prayagraj.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "Google",
    title: "Student Ambassador",
    location: "Prayagraj, Uttar Pradesh",
    startDate: "Nov 2025",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Representing Google technologies on campus and organizing workshops and sessions.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-3",
    company: "E-Cell, UCER Prayagraj",
    title: "Overall Coordinator",
    location: "Prayagraj, Uttar Pradesh",
    startDate: "July 2025",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Building the entrepreneurial ecosystem and coordinating E-Cell activities.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-4",
    company: "GDG Prayagraj",
    title: "Community Volunteer",
    location: "Prayagraj, Uttar Pradesh",
    startDate: "Aug 2025",
    endDate: "Dec 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Worked in the report team, supported multiple GDG events, and later selected for the DevFest core team. Organized T-Hunt hackathon and assisted in DevFest operations.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-5",
    company: "ReWorks.in",
    title: "Web Development & SEO Intern",
    location: "Prayagraj, Uttar Pradesh",
    startDate: "June 2025",
    endDate: "July 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Designed and developed responsive websites using WordPress and Elementor. Handled web hosting, AWS, and domain configurations. Applied SEO techniques to improve search visibility.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "United Group of Institutions",
    degree: "B.Tech, CSE (AIML)",
    startDate: "Sep 2024",
    endDate: "Present",
  },
  {
    _id: "edu-2",
    school: "SMT D SINGH SSVMIC",
    degree: "Intermediate, PCM",
    startDate: "April 2022", // Approximate start based on end
    endDate: "April 2024",
  },
  {
    _id: "edu-3",
    school: "RRB PUBLIC SCHOOL",
    degree: "Highschool",
    startDate: "2020", // Approximate
    endDate: "April 2022",
  },
];

// Derived from work experience and provided screenshots
export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "E-Cell UCER Website",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Designed and developed the official website for E-Cell UCER. Showcases mission, initiatives, events, and engagement opportunities. Built with focus on UX, clarity, and student engagement.",
          },
        ],
      },
    ],
    technologies: ["React", "Next.js", "Web Development", "UI/UX"],
    image: {
      asset: {
        url: "/projects/ecell.png",
      },
    },
    links: [
      {
        title: "Live",
        url: "https://ecellucer.me",
        type: "demo",
      },
      {
        title: "GitHub",
        url: "https://github.com/pushpaktiwarii/ECELL-UCER",
        type: "code",
      },
    ],
  },
  {
    _id: "project-2",
    title: "ENIGMA 2025 Website",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Official website for ENIGMA, the annual cultural fest of United Group of Institutions. Central platform for event info, schedules, and registration. Features smooth transitions and optimized performance.",
          },
        ],
      },
    ],
    technologies: ["React", "Web Development", "Event Management"],
    image: {
      asset: {
        url: "/projects/enigma.png",
      },
    },
    links: [
      {
        title: "Live",
        url: "https://enigmaugi.netlify.app/",
        type: "demo",
      },
      {
        title: "GitHub",
        url: "https://github.com/pushpaktiwarii/enigma",
        type: "code",
      },
    ],
  },
];

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
          text: "I'm Pushpak Tiwari, a B.Tech AIML student passionate about AI, web technologies, and community-driven innovation. I currently serve as a Google Student Ambassador, work with GDG Prayagraj as Core Team Lead, and contribute to building the entrepreneurial ecosystem as the Overall Coordinator of E-Cell UCER.",
        },
        {
          _type: "span",
          text: " My journey began as a GDG volunteer, supporting multiple developer events and later joining the DevFest core team—an experience that strengthened my management, teamwork, and real-time problem-solving skills. I've also completed a Web Development & SEO internship, where I worked on responsive design, optimization, and hands-on project execution. I'm deeply curious about how AI, development, and creative content can come together to build better digital experiences and solve real-world problems. Always exploring. Always learning. Always building.",
        }
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

import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Career Goals",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services: TService[] = [
  {
    title: "Filter Design + DSP",
    icon: web,
  },
  {
    title: "Circuit Analysis",
    icon: mobile,
  },
  {
    title: "Digital Logic Design",
    icon: backend,
  },
  {
    title: "Embedded Systems",
    icon: creator,
  },
  {
    title: "MATLAB",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Get more DSP experience",
    companyName: "Goal #1",
    icon: "network.png",
    iconBg: "#383E56",
    date: "Initial Step",
    points: [
      "Prioritize applying + participating in signal processing internships.",
      "Continue involvement in Ultrasound Signal Processing research lab.",
      "Read literature and network with individuals in this field.",
      "Continue to take Georgia Tech's DSP classes, like ECE 4270.",
    ],
  },
  {
    title: "Network Hard",
    companyName: "Goal #2",
    icon: "network.png",
    iconBg: "#E6DEDD",
    date: "Key Step",
    points: [
      "Attend Georgia Tech Student Alumni Association Networking Events.",
      "Attend GT IEEE networking events with ECE-centered companies.",
      "Attend and get contact information of companies at ECE career fairs.",
      "Form solid relationships with companies and recruiters while interning.",
    ],
  },
  {
    title: "Be a Reputiable Brand",
    companyName: "Goal #3",
    icon: "reliability.png",
    iconBg: "#383E56",
    date: "Identity-building Step",
    points: [
      "Take and do well in Georgia Tech's tough classes. Don't shy away from hard.",
      "Impress on future internships.",
      "Work hard and deliver for future employers.",
      "Prioritize being a team-player in clubs, in internships, in classes.",
    ],
  },
  {
    title: "Publish my Work to the World",
    companyName: "Goal #4",
    icon: "reliability.png",
    iconBg: "#E6DEDD",
    date: "Culminating Step",
    points: [
      "Develop and deliver for internships and employers on consistent basis.",
      "Discuss design ideas with others to validate or pivot .",
      "Construct valuable skillset to develop interesting points of conversation.",
      "Create dialogue in classes, with professors, with peers in hopes of sparking ideas.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Andromeda - Ethical Hospital Restraint",
    description:
      "YOLO + OpenCV powered, Bluetooth Serial via ESP32 ethical medical restraint for a hackathon competition. Won first in track and commendation from judges and doctors.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "ESP32",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: "medtech.png",
    sourceCodeLink: "https://docs.google.com/document/d/1T-9zL5T7oU4ubCKu54AQyTmCsgLC6JZctn7N_osXBsY/edit?tab=t.0#bookmark=id.ni5bkq3pdist",
  },
  {
    name: "Ultrasound Imaging CVP measurement",
    description:
      "Ongoing research to test hyptothesis that emerging field of ultrasound elastography can accurately measure central venous pressure in a noninvasive manner.",
    tags: [
      {
        name: "Signal Processing",
        color: "blue-text-gradient",
      },
      {
        name: "Research Lab",
        color: "green-text-gradient",
      },
      {
        name: "Cutting-edge medical tech",
        color: "pink-text-gradient",
      },
    ],
    image: "us.png",
    sourceCodeLink: "https://docs.google.com/document/d/1T-9zL5T7oU4ubCKu54AQyTmCsgLC6JZctn7N_osXBsY/edit?tab=t.0#bookmark=kix.a0lku441tbg6",
  },
  {
    name: "ECE 1100 Discovery Project",
    description:
      "An intro to ECE project where I used a Raspberry Pi 4 to run a speech recognition algorithm. Click on the black icon to learn more!",
    tags: [
      {
        name: "Raspberry Pi",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "1100.jpg",
    sourceCodeLink: "https://docs.google.com/document/d/1T-9zL5T7oU4ubCKu54AQyTmCsgLC6JZctn7N_osXBsY/edit?tab=t.0#bookmark=kix.5qqg823vefen",
  },
];

export { services, technologies, experiences, testimonials, projects };

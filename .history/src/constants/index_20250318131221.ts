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
      "Chris is truly one who works hard and passionately, perseveres, and delivers products that are not just good enough, but something he and his team can be proud of. ",
    name: "Adityan Swaminathan",
    designation: "Undergraduate Researcher",
    company: "EE @ Georgia Tech",
    image: "adityan.jpeg",
  },
  {
    testimonial:
      "Quote from Amaya",
    name: "Amaya Labrador",
    designation: "Mentor",
    company: "Georgia Tech Alumna",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Ishan quote!",
    name: "Ishan Gajjar",
    designation: "Undergraduate Researcher",
    company: "ECE @ Rutgers",
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
    image: "public/medtech3.png",
    sourceCodeLink: "https://rb.gy/8v52os",
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
    image: "ultrasound.png",
    sourceCodeLink: "https://rb.gy/8v52os",
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
        name: "Speech Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: "1100.png",
    sourceCodeLink: "https://rb.gy/8v52os",
  },
];

export { services, technologies, experiences, testimonials, projects };

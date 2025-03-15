type TSection = {
  p: string;
  h2: string;
  content?: string;
  link?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    Resume: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Christopher Tava — 3D Portfolio",
    fullName: "Christopher Tava",
    email: "ctava3@gatech.edu",
  },
  hero: {
    name: "Christopher Tava",
    p: ["Electrical Engineering @ Georgia Tech"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me.",
      content: `1. first-year electrical engineering major @ Georgia Tech
                2. based in Atlanta + NYC area 
                3. my interests: human-centric design. DSP + ML. Circuit design.
                4.current plans: looking for a summer 2026 internship!
`,
      link: "Tava_Resume_1100.pdf",
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Take a look at some of my more recent projects!`,
      link: ""
    },
    Resume: {
      p: "My Resume",
      h2: "Resume.",
      link: "/Tava_Resume_1100.pdf" // Link to the resume file in the public directory
      ,
      content: "Click on 'Resume' in order to download my resume."
    }
  },
};

type TSection = {
  p: string;
  h2: string;
  content?: string | string[];
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
    p: ["electrical engineering @ georgia tech", "based in atlanta + nyc area", "interests: dsp + ml. circuit design.", "", "looking for a summer 2026 internship!"],
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
      content: [`Call me Chris. Some years ago—never mind how long precisely—I realized that human-centric engineering was my thing; that what I cared about in life was relatively simple.`, '', 'I want to reduce the struggles, pain, and trauma of others.','', 'Those are the guiding principles of my education and career. For now, I am a first-year electrical engineering student at Georgia Tech, with threads/concentrations in Digital Signal Processing + AI and Circuit Technology. My expected graduation is December 2026.', '', 'If you have an idea about a project, another point of collaboration, feel free to reach out. I am always open to new opportunities!', '', 'To look at my resume, download from the navigation bar above!'],
      link: "Tava_Resume_1100.pdf",
    },
    experience: {
      p: "my future path and goals",
      h2: "Career Goals.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: [`Take a look at some of my more recent projects!`, 'Click the black icon in the top right corner of each card to see more project information.'],
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

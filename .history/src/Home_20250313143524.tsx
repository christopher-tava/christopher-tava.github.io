// src/pages/Home.tsx (or in components, as you prefer)
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas } from "./components";
import { Navbar } from "./components"; // if Navbar is part of Home, otherwise keep it in App

const Home = () => {
  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />  {/* You can also keep Navbar in App if you want it on all pages */}
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;

// @ts-nocheck
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";
import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Experience from "./sections/Experience";
import Works from "./sections/Works";
import Feedbacks from "./sections/Feedbacks";
import Contact from "./sections/Contact";
import CanvasLoader from "./layout/Loader";
// Add this line to your components/index.js file
export { default as Resume } from './Resume';

export {
  Hero,
  Navbar,
  About,
  Tech,
  Resume,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};

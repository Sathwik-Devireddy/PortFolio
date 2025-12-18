import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactSection from "./components/ContactSection";
export default function App() {
  useEffect(() => {
    //very very very imp
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <div></div>
      <Header />
      <Hero />
      <CustomCursor />
      <About />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

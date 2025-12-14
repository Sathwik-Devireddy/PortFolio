import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <>
      <div></div>
      <Header />
      <Hero />
      <CustomCursor />
      <About />
      <ProjectSection />
    </>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <div></div>
      <Header />
      <Hero />
      <CustomCursor />
    </>
  );
}

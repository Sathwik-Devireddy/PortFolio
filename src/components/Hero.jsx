import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div>
        <section
          className="h-screen bg-gradient-to-b from-violet-900 to-black flex 
        xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 
        relative overflow-hidden"
        >
          {/* Left Section */}
          <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold z-10 mb-6"
            >
              Building Fast <br />
              Reliable Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.7,
                duration: 1.5,
              }}
              className="text-xl md:text-xl lg:text-1xl text-purple-200 max-w-2xl"
            >
              I’m a front-end developer focused on building clean, responsive,
              and interactive web interfaces using modern technologies like
              React and Tailwind CSS. I enjoy understanding the structure and
              behavior behind UI components, from layout systems to animations
              and user interactions.
            </motion.p>
          </div>
          <Spline
            className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
            scene="https://prod.spline.design/XyWlRZaAUnELtyXX/scene.splinecode"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;

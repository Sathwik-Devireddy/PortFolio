import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    cleanup();

    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        preventsOverlaps: true,
      },
    });

    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.2,
      },
      0.1
    );

    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0.5
    );

    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.2,
      },
      0.7
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative h-screen"
      style={{ overscrollBehavior: "none" }}
    >
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full
         bg-white flex items-center justify-center relative transition-shadow 
         duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl 
          absolute inset-0 flex items-center justify-center text-center"
        >
          Scroll Down
        </p>
        {/* final text*/}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center 
          justify-center opacity-0"
        >
          <h1
            className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] 
          sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5"
          >
            Step With ME
          </h1>
          <p
            className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 
          mt-1 md:scale-[0.1] scale-[0.068]"
          >
            I build responsive, performance-focused UIs with attention to clean
            structure and usability. I am comfortable working with Tailwind CSS,
            GSAP animations, and component-based design systems. I understand
            how to integrate front-end applications with APIs and backend
            services.
          </p>
          <button
            className="px-10 py-2 rounded-xl bg-black hover:bg-white
           hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

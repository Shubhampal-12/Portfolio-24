import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mean from './SlideTabsExample.jsx'

gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  const mouseenter = () => {
    gsap.to(".leftnavtexts h1", {
      y: "-100%",
      duration: 0.5,
      ease: "expo.out",
    });
  };
  const mouseleave = () => {
    gsap.to(".leftnavtexts h1", {
      y: "0%",
      duration: 0.5,
      ease: "expo.out",
    });
  };

  useGSAP(() => {
  let lastScroll = 0;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      if (self.scroll() > lastScroll) {
        // Scroll Down -> Hide Navbar
        gsap.to(".navbar", {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Scroll Up -> Show Navbar
        gsap.to(".navbar", {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScroll = self.scroll();
    },
  });
});
  return (
    <div className="navbar w-full fixed top-0 left-0 flex items-center justify-between px-6 md:px-12 h-24 z-[999] transition-transform">
      <div className="leftnav">
        <div
          onMouseEnter={mouseenter}
          onMouseLeave={mouseleave}
          className="leftnavtexts cursor-pointer overflow-hidden h-16"
        >
          <h1 className="h-full flex items-center  w-full">
            <span className="text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[1.95vw] text-white font-[satoshilight] ">
              {" "}
             SHUBHAM PAL
            </span>
          </h1>
          <h1 className="h-full flex items-center  w-full">
            <span className="text-white text-[1.9vw]">Portfolio'24</span>
          </h1>
        </div>
      </div>
      <div className="rightnav">
        <div className="rightnavcontainer flex items-center gap-12 ">
           <Mean/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

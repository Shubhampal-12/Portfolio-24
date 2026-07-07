import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import bgImage7 from "../assets/Images/bgImage7.png";
import { useEffect } from "react";
import About from "./About";
function Landing({ finish }) {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline({ repeat: -1 });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pare",
      start: "top 0%",
      end: "top -110%",
      scrub: 2,
      ease: "linear",
      pin: true,
    },
  });
  useGSAP(() => {
    tl3.to(".aboutpage", {
      y: "0%",
    });
    tl2
      .to(".underline", {
        x: "0%",
        duration: 1.5,
        ease: "expo.out",
      })
      .to(".underline", {
        x: "100%",
        duration: 1.5,
        ease: "expo.out",
      });
  });
  useEffect(() => {
    if (finish === true) {
      tl.to(
        ".firstlandingtext h1 span",
        {
          delay: 0.2,
          opacity: 1,
          y: "0%",
          duration: 2,
          stagger: 0.052,
          ease: "expo.out",
        },
        "a",
      )
        .to(
          ".secondlandingtext p span",
          {
            delay: 0.2,
            opacity: 1,
            y: "0%",
            duration: 2,
            stagger: 0.052,
            ease: "expo.out",
          },
          "a",
        )
        .to(
          ".thirdlandingtext p span",
          {
            delay: 0.2,
            opacity: 1,
            y: "0%",
            duration: 2,
            stagger: 0.052,
            ease: "expo.out",
          },
          "a",
        );
    }
  }, [finish]);
  return (
    <div className="pare h-screen w-full">
      <div className="landingcontainer h-full relative w-full bg-black text-white ">
        <div className="abouttoscroll absolute left-[50%] bottom-[12%] lg:bottom-[7%] translate-x-[-50%] ">
          <div className="text overflow-hidden w-full text-white text-sm ">
            <h1 className="font-[satoshiregular]">
              Scroll down to uncover more
            </h1>
            <div className="underline translate-x-[-100%] h-[0.5vw] md:h-[0.2vw]"></div>
          </div>
        </div>
        <div className="overlaycontent px-6 md:px-12 flex  items-center  h-full w-full  absolute top-0 left-0">
          <div className="overlaycontainer w-full flex mt-24 flex-col justify-center lg:flex-row md:gap-0 md:justify-between ">
            <div className="firstlandingtext lg:self-end justify-self-end text-white leading-[0.9] text-[13vw] md:text-[11vw] lg:text-[7.5vw] ">
              <h1 className="overflow-hidden mb-[-5.8vw] md:mb-[-2.6vw] lg:mb-[-2.2vw]  py-3 ">
                <span className="inline-block opacity-1">Software</span>
              </h1>
              <h1 className=" py-5 flex items-end  overflow-hidden ">
                <span className="font-[helvetica] inline-block opacity-1  ">
                  Developer
                </span>
              </h1>
            </div>
            <div className="secondlandingtext text-center py-5 md:py-4 lg:py-5 flex justify-end flex-col">
              <p className="text-white overflow-hidden justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1  ">Building Fast,</span>
              </p>
              <p className="text-white  overflow-hidden justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 ">
                  Modern & Scalable Web Applications.
                </span>
              </p>
            </div>
            <div className="thirdlandingtext  py-2 md:py-1 lg:py-5 flex justify-end flex-col ">
              <p className="text-white overflow-hidden   justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1  font-[satoshiregular] ">
                  leaving a lasting
                </span>
              </p>
              <p className="text-white overflow-hidden  justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 font-[satoshiregular]   ">
                  impression with every
                </span>
              </p>
              <p className="text-white overflow-hidden  justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 font-[satoshiregular]  ">
                  pixel and line of code.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import bgImage1 from "../assets/Images/bgImage1.png";
import photo from "../assets/Images/pf4.png";

gsap.registerPlugin(ScrollTrigger);

function About({ finish }) {
  const aboutRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       aboutRef.current,
  //       {
  //         yPercent: 100,
  //       },
  //       {
  //         yPercent: 0,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           // trigger: ".pare",
  //           trigger: aboutRef.current,
  //           start: "top top",
  //           end: "top -110%",
  //           scrub: 2
  //         },
  //       },
  //     );

  //     gsap.from(".about-content",{

  //       opacity:0,

  //       y:100,

  //       duration:1,

  //       scrollTrigger:{

  //           trigger:aboutRef.current,

  //           start:"top 70%",

  //           toggleActions:"play none none reverse"

  //       }

  //   })

  //     const underlineTl = gsap.timeline({
  //       repeat: -1,
  //     });

  //     underlineTl
  //       .to(".underline", {
  //         x: "0%",
  //         duration: 1.5,
  //         ease: "expo.out",
  //       })
  //       .to(".underline", {
  //         x: "100%",
  //         duration: 1.5,
  //         ease: "expo.out",
  //       });

  //     return () => {
  //       underlineTl.kill();
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     };
  //   },
  //   { scope: aboutRef },
  // );

  // useEffect(() => {
  //   if (!finish) return;

  //   const tl = gsap.timeline();

  //   tl.to(".firstlandingtext h1 span", {
  //     opacity: 1,
  //     y: 0,
  //     stagger: 0.05,
  //     duration: 1,
  //     ease: "expo.out",
  //   })
  //     .to(
  //       ".secondlandingtext p span",
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.05,
  //         duration: 1,
  //         ease: "expo.out",
  //       },
  //       "<",
  //     )
  //     .to(
  //       ".thirdlandingtext p span",
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.05,
  //         duration: 1,
  //         ease: "expo.out",
  //       },
  //       "<",
  //     );

  //   return () => {
  //     tl.kill();
  //   };
  // }, [finish]);

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      ref={aboutRef}
      id="about"
      className=" pare about-content mb-5 mt-[10rem] relative w-full min-h-screen bg-black"
    >
      <div className="relative h-full w-full bg-black">
        <div className="relation inset-0 flex flex-col-reverse md:flex-row justify-between px-6 md:px-12">
          {/* Left Image */}

          <div className="flex w-full md:w-[30%] items-end md:items-start py-10">
            <motion.img
              src={photo}
              alt="Shubham Pal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="object-cover w-[48vw] h-[65vw] md:w-[30vw] md:h-[55vw] lg:w-[25vw] lg:h-[35vw]"
            />
          </div>

          {/* Right Content */}

          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-white w-full md:w-[55%] flex flex-col justify-end lg:justify-center"
          >
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-[15vw] md:text-[9vw] leading-none"
            >
              About
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-[6vw] md:text-[3vw] lg:text-[1.2vw]"
            >
              I am a motivated and enthusiastic Software Developer Intern with a
              Bachelor of Science (B.Sc.) in Information Technology. I have a
              strong foundation in HTML5, CSS3, JavaScript (ES6+), React.js,
              Bootstrap, Tailwind CSS, Git, and responsive web design. I enjoy
              creating modern, user-friendly, and responsive web applications
              that provide a smooth user experience across different devices. To
              strengthen my practical skills, I have developed several personal
              projects, including a responsive portfolio website, an e-commerce
              website with shopping cart functionality, and a Zerodha-inspired
              trading platform clone. These projects have helped me gain
              hands-on experience in building reusable React components,
              managing application state, integrating APIs, implementing
              responsive layouts, and writing clean, maintainable code. I am a
              quick learner with strong problem-solving abilities, a positive
              attitude, and a passion for continuous learning. I enjoy
              collaborating with teams, accepting feedback, and improving my
              technical skills through real-world development experience. As a
              fresher, I am eager to contribute to meaningful projects, learn
              from experienced developers, and grow into a skilled Frontend
              Developer while delivering high-quality work for the organization.
            </motion.p>

            <motion.div
              variants={parentVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-4"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

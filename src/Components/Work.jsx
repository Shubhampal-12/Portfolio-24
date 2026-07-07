import gsap from "gsap";
import { Flip } from "gsap/all";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import chitralok1 from "../assets/Images/shopmart2.png";
import chitralok2 from "../assets/Images/smartshop.png";
import exoape1 from "../assets/Images/Tradehub2.png";
import exoape2 from "../assets/Images/Tradehub1.png";
import obys1 from "../assets/Images/Netflix1.png";
import obys3 from "../assets/Images/Netflix2.png";
import beast1 from "../assets/Images/airbud1.png";
import beast2 from "../assets/Images/airbud2.png";
import mivi1 from "../assets/Images/mivi1.png";
import mivi2 from "../assets/Images/mivi3.png";
import mivi3 from "../assets/Images/mivi2.png";
import bgImage5 from "../assets/Images/bgImage5.png";

gsap.registerPlugin(Flip);

function Work() {
  const ref = useRef(null);

  gsap.defaults({
    ease: "cubic-bezier(0.625, 0.05, 0, 1)",
    duration: 0.725,
  });
  var titles = [
    "Shop-Smart website ",
    "TradeHub",
    "NetFlix Clone ",
    "AirBud",
    "Mivi Reimagine",
  ];
  const overcontent = [
    {
      description:
        "A full-stack responsive e-commerce web application built with React, Node.js, Express.js, and MongoDB. The platform allows users to browse products, search and filter items, manage a shopping cart, securely register and log in, make online payments, and track their orders in real time. It features a clean, modern UI, reusable React components, REST API integration, and a responsive design optimized for all devices.",
      tools: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "Razorpay",
      ],
      img1: chitralok1,
      img2: chitralok2,
      live: "https://kshopsmart.netlify.app/",
    },

    {
      description:
        "A TradeHub-inspired stock trading platform clone with responsive layouts, reusable components, routing, and a modern dashboard UI. This project helped strengthen my React fundamentals and frontend architecture skills.",
      tools: [
        "React.js",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
      ],
      img1: exoape1,
      img2: exoape2,
      live: " ",
    },

    {
      description:
        "An interactive movie discovery application that allows users to explore trending movies, TV shows, cast details, trailers, and ratings through API integration with a responsive and user-friendly interface.",
      tools: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Axios",
        "TMDB API",
        "JavaScript",
      ],
      img1: obys1,
      img2: obys3,
      live: " ",
    },
    {
      description:
        "A modern 3D portfolio website built using React, GSAP, and Framer Motion. It features smooth scrolling, premium animations, interactive UI, custom cursor, responsive design, and engaging user experiences inspired by award-winning websites.",
      tools: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      img1: beast1,
      img2: beast2,
      live: " ",
    },

    {
      description:
        "A premium BMW sports car landing page featuring cinematic animations, smooth scrolling, video backgrounds, and modern UI interactions inspired by luxury automotive websites.",
      tools: [
        "React.js",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "JavaScript",
      ],
      img1: mivi1,
      img2: mivi2,
      live: "",
    },
  ];

  var imgSrc = [chitralok2, exoape2, obys3, beast2, mivi3];
  const titlehandler = (idx) => {
    const imageItems = document.querySelectorAll(".main-img-items");
    gsap.set(imageItems, { autoAlpha: 0 });
    gsap.set(imageItems[idx], { autoAlpha: 1 });
  };
  const [num, setNum] = useState(0);
  const activeListItemRef = useRef(null);
  const openoverlay = (idx) => {
    setNum(idx);
    gsap.defaults({
      ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      duration: 0.725,
    });
    const items = document.querySelectorAll(".main-title-item");
    console.log("Items found:", items);
    var title;
    items.forEach((elem) => {
      elem.classList.remove("active");
      activeListItemRef.current = items[idx];
      if (activeListItemRef.current) {
        console.log("Active list item set:", activeListItemRef.current);
      } else {
        console.error("Failed to set activeListItem for index:", idx);
      }
      activeListItemRef.current.classList.add("active");
      title = activeListItemRef.current.querySelector(".main-title");
    });
    const titleState = Flip.getState(title, { props: "fontSize" });

    const imageItems = document.querySelectorAll(".main-img-items");
    const image = imageItems[idx].querySelector(".image");
    const imageState = Flip.getState(image);
    const overlayItems = document.querySelectorAll(".overlay-items");
    const overlayItem = overlayItems[idx];
    const content = overlayItem.querySelector(".overlay-row");
    gsap.set(overlayItem, { display: "block", autoAlpha: 110 });
    gsap.fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.5 });
    const textTarget = overlayItem.querySelector(
      "[data-overlay='text-target']",
    );
    const imgTarget = overlayItem.querySelector("[data-overlay='img-target']");
    textTarget.appendChild(title);
    imgTarget.appendChild(image);
    Flip.from(titleState);
    Flip.from(imageState);
    gsap.set(".overlay-nav", { display: "flex" });
    gsap.fromTo(
      "[data-overlay='nav-item']",
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        stagger: 0.1,
      },
    );

    gsap.set(imageItems, { autoAlpha: 0 });

    items.forEach((listItem, i) => {
      if (i !== idx) {
        const otherTitle = listItem.querySelector(".main-title");
        gsap.to(otherTitle, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.45,
          delay: 0.2 - i * 0.05,
        });
        gsap.to(".work", {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.45,
        });
      }
    });
  };
  const closeOverlay = () => {
    gsap.defaults({
      ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      duration: 0.525,
    });
    console.log(activeListItemRef.current);
    const items = document.querySelectorAll(".main-title-item");
    const overlayItems = document.querySelectorAll(".overlay-items");
    const index = Array.from(items).indexOf(activeListItemRef.current);
    const overlayItem = overlayItems[index];
    if (!overlayItem) {
      console.error("Overlay item not found for index:", index);
      return;
    }
    const title = overlayItem.querySelector(
      "[data-overlay='text-target'] .main-title",
    );
    console.log(title);
    const image = overlayItem.querySelector(
      "[data-overlay='img-target'] .image",
    );
    const overlayContent = overlayItem.querySelector(".overlay-row");
    const titleState = Flip.getState(title, { props: "fontSize" });
    const imageState = Flip.getState(image);
    const navItems = document.querySelectorAll("[data-overlay='nav-item']");
    const overlayNav = document.querySelector(".overlay-nav");
    gsap.to(navItems, {
      yPercent: 110,
      onComplete: () => {
        overlayNav.style.display = "none";
      },
    });
    gsap.to(overlayContent, {
      autoAlpha: 0,
      onComplete: () => {
        overlayItem.style.display = "none";
      },
    });
    activeListItemRef.current.appendChild(title);
    const imageItems = document.querySelectorAll(".main-img-items");
    imageItems[index].appendChild(image);
    gsap.set(imageItems[index], { autoAlpha: 1 });
    Flip.from(titleState);
    Flip.from(imageState);
    activeListItemRef.current.classList.remove("active");
    activeListItemRef.current = null;
    gsap.to(".main-title,.work,.main-title::after", {
      yPercent: 0,
      autoAlpha: 1,
      delay: 0.3,
      stagger: 0.05,
    });
  };

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div className="works relative min-h-screen w-full bg-black flex items-center justify-center">
      <div className="bgimage h-screen w-full mb-5 mt-5 ">
        <img
          className="h-full w-full object-cover mb-5 mt-5"
          src={bgImage5}
          alt=""
        />
      </div>
      <div className="page3container p-6  md:p-12 h-screen w-full top-0 left-0 z-[2] absolute ">
        <div className="main flex flex-col-reverse lg:flex-row  opacity-[1] h-full w-full   ">
          <div className="main-col h-[50%] w-full lg:h-full lg:w-[50%]   ">
            <div className="main-img-list relative h-[60vw] w-[46vw]  lg:h-[35vw] lg:w-[25vw] rounded-md  ">
              {imgSrc.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    className="main-img-items grayscale overflow-hidden z-[1] absolute h-full w-full "
                  >
                    <motion.img
                      initial={{
                        opacity: 0,
                        scale: 1.3,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="image h-full w-full object-cover"
                      src={elem}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="main-col h-[50%] w-full lg:h-full lg:w-[50%] ">
            <div className="main-title-list pr-12 flex flex-col h-full w-full justify-center items-start pr-0 lg:pr-8  ">
              <motion.h1 className="work text-white overflow-hidden text-[17vw] mb-4 md:mb-0 lg:text-[10vw] leading-[1.2]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  Work
                </motion.span>
              </motion.h1>
              {titles.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => openoverlay(idx)}
                    onMouseOver={() => titlehandler(idx)}
                    className="main-title-item relative active:scale-[0.98] leading-[1.35] lg:leading-[1.2] origin-left cursor-pointer text-white text-[6.5vw] md:text-[4.4vw] lg:text-[3.5vw]  "
                  >
                    <h2 className="main-title overflow-hidden  ">
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileInView={{ y: "0", opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block font-[helvetica]"
                      >
                        {elem}
                      </motion.span>
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="overlay  h-[140vh] lg:h-screen w-full pointer-events-none top-0 left-0 absolute z-[4] ">
          {overcontent.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="overlay-items h-full w-full   z-[3] pointer-events-none absolute hidden "
              >
                <div className="overlay-hero bg-[#091018] w-full flex flex-col items-center justify-start ">
                  <div
                    data-overlay="text-target"
                    className="overlay-text-wrap text-center leading-[1.05]  text-white text-[15vw] py-4 md:py-8 lg:py-12 md:text-[9vw] w-full h-[30%] flex items-center justify-center "
                  ></div>
                  <div
                    data-overlay="img-target"
                    className="overlay-img-wrap h-[100%] w-[80%] md:h-[75%] md:w-[60%] lg:h-[60%] lg:w-[30%]  "
                  ></div>
                </div>
                <div className="overlay-row px-6 md:px-12 pt-12 lg:pb-12 bg-[#091018] h-full w-full ">
                  <div className="rowpart h-[50%] w-full flex flex-col lg:flex-row item-center justify-end ">
                    <div className="rowchild flex flex-col md:flex-row items-start md:items-center justify-between text-white h-full w-full lg:w-[60%]">
                      <div className="textsection flex flex-col gap-3 justify-center h-[50%] mr-[10rem]  md:h-full w-full md:w-[50%] ">
                        <h1 className="text-4xl  lg:text-3xl">Description</h1>
                        <p className=" text-4xl lg:text-xl  md:text-xl font-[helvetica] ml-1 text-pretty leading-[1.3] md:leading-[1.15]">
                          {elem.description}
                        </p>
                      </div>
                      <div className="imgsection mt-8 md:mt-0 md:aspect-auto self-center h-[40%] md:h-[80%] md:self-left py-0 md:py-0 rounded-md w-[100%] md:w-[45%] flex items-center justify-end">
                        <img
                          className="h-full  w-full object-cover"
                          src={elem.img1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rowpart h-[25%] w-full flex item-center justify-start">
                    <div className="rowchild flex flex-col-reverse lg:flex-row mb-[20rem] items-start justify-end lg:items-center lg:justify-between text-white h-full w-full lg:w-[40%]">
                      <div className="imgsection h-[80vw] lg:h-[20vw] rounded-md w-[60%] lg:w-[35%] flex items-center justify-end">
                        <img
                          className="h-full w-full mb-5 mt-5 object-cover"
                          src={elem.img2}
                          alt=""
                        />
                      </div>
                      <div className="textsection text-left flex flex-col gap-5 justify-center  h-full w-[45%] md:w-[50%] ">
                        <h1 className="text-3xl lg:text-3xl md:text-5xl ">
                          Tools Used
                        </h1>
                        <ul className="text-white md:text-2xl font-[helvetica] ">
                          {elem.tools.map((e, id) => {
                            return <li key={id}>{e}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="overlay-nav mb-5 mt-60  pointer-events-auto  absolute px-12 z-[4] top-[38%]  lg:bottom-[10%] left-0 right-0 overflow-hidden flex items-center justify-between hidden ">
            <div
              className="relative inline-flex rounded-full border-2 border-white p-1"
              onMouseLeave={() =>
                setPosition((p) => ({
                  ...p,
                  opacity: 0,
                }))
              }
            >
              <div
                ref={ref}
                onMouseEnter={() => {
                  const { width } = ref.current.getBoundingClientRect();

                  setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                  });
                }}
                onClick={closeOverlay}
                className="relative z-10 px-6 py-3  cursor-pointer text-white mix-blend-difference"
              >
                Back to List
              </div>

              <motion.div
                animate={position}
                className="absolute top-1 bottom-1 rounded-full bg-white"
              />
            </div>

            {overcontent.map((e, id) => {
              if (id !== num) return null;

              return (
                <div
                  key={id}
                  className="relative inline-flex rounded-full border-2 border-white p-1"
                  onMouseLeave={() =>
                    setPosition((p) => ({
                      ...p,
                      opacity: 0,
                    }))
                  }
                >
                  <a
                    href={e.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={ref}
                    onMouseEnter={() => {
                      if (!ref.current) return;

                      const { width } = ref.current.getBoundingClientRect();

                      setPosition({
                        left: ref.current.offsetLeft,
                        width,
                        opacity: 1,
                      });
                    }}
                    className="relative z-10 px-8 py-3 cursor-pointer text-white mix-blend-difference"
                  >
                    Live Link
                  </a>

                  <motion.div
                    animate={position}
                    className="absolute top-1 bottom-1 rounded-full bg-white"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

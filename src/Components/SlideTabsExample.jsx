import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import resume from "../assets/Shubham_pal_26.pdf";


const SlideTabsExample = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {/* <Tab className='hidden' setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Project</Tab>
      <Tab setPosition={setPosition}>Content</Tab> */}
      <a href={resume} download>
        <div className=" flex w-fit text-center">
          <Tab setPosition={setPosition}>Resume</Tab>
        </div>
      </a>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  const handleClick = () => {
  const section = document.getElementById(children.toLowerCase());
  const contact = document.getElementById('#contact');

  console.log(contact);
};

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default SlideTabsExample;

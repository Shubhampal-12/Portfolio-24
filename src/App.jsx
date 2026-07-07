import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { SmoothScrollHero } from "./Components/SmoothScrollHero";


function App() {
  const [loaderFinish, setLoaderFinish] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className=" container relative">
      {!loaderFinish && <Loader func={setLoaderFinish} />}

      {loaderFinish && (
        <>
          <Navbar />
          <SmoothScrollHero/>
          <Work />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
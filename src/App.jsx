import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const prodRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 85%",
        end: "top 10%",
        scrub: 3,
      },
    });

    tl.to(prodRef.current, {
      x: -670,
      y: 620,
      scale: 0.77,
      duration: 1.3,
      ease: "power3.out",
    });

    tl.from(prodRef.current, {
      top: "120%",
      left: "-25%",
    });

    gsap.to(btnRef.current, {
      y: -10,
      duration: 1.2,

      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      <div className="main h-screen w-full flex  ">
        <div className="h-full w-full absolute bg-gradient-to-br from-black via-neutral-900 to-neutral-800  ">
          <Particles
            particleCount={210}
            particleSpread={12}
            speed={0.1}
            particleColors={["#06923E"]}
            moveParticlesOnHover
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={26}
            disableRotation={false}
          />
        </div>

        <Navbar></Navbar>

        <div className="content  h-full w-full flex select-none ">
          <div
            className=" leftCont   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            text-zinc-800  font-[font2] text-8xl
           sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0
           md:top-0 md:left-0 md:translate-x-0 md:translate-y-0
            lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0
            sm:text-2xl

            sm:relative sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-1/2 sm:mt-20 sm:p-4 sm:leading-18  sm:gap-7
          
            md:relative md:flex md:flex-col md:justify-center md:items-center md:w-1/2 md:mt-20 md:p-4 md:leading-18  md:gap-7
          
            lg:relative lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2 lg:mt-20 lg:p-4 lg:leading-13  lg:gap-3

            "
          >
            <h1 className="   text-[3rem] lg:text-[3vw] md:text-3xl text-zinc-100 sm:text-3xl">
              Where Purity{" "}
            </h1>
            <h1 className=" text-[3rem]  lg:text-[3vw] md:text-3xl sm:text-3xl    text-zinc-100">
              Meets
            </h1>
            <h1>
              <i
                className="ri-flashlight-fill sm:text-[4rem] md:text-[4rem]
                lg:text-[3rem] text-[4rem] ml-30 text-[#06923E]  "
              ></i>
            </h1>
            <h1 className="lg:text-[3vw] md:text-4xl sm:text-3xl text-zinc-100">
              Power
            </h1>
            <h1 className="lg:text-[3.6vw] md:text-3xl sm:text-2xl text-zinc-100">
              Evocus Black Water
            </h1>
            <button
              ref={btnRef}
              className="ctaBtn h-[10vh] w-[50vw] text-3xl  bg-[#06923E] rounded-lg mt-10
              p-2 shadow-2xl shadow-black active:scale-90 text-zinc-100 text-shadow-md text-shadow-black
              cursor-pointer
              sm:h-[8vh] sm:w-[30vw] sm:p-2 sm:text-4xl
              md:h-[8vh] md:w-[32vw] md:p-2 md:text-4xl
              lg:h-[12vh] lg:w-[17vw] lg:p-2 lg:text-4xl"
            >
              Order now
            </button>
          </div>

          <div className="rightContent  relative flex flex-col justify-center items-center w-1/2  mt-20">
            <div className="productImg  z-50 mt-3.5 ">
              <img
                ref={prodRef}
                src="./src/assets/btlimg.png"
                className="btl sm:scale-150 md:scale-110 lg:scale-90 scale-100 
                  drop-shadow-[0_0_12px_rgba(34,197,94,0.35)] z-50 "
              />
            </div>
            <div className="splash absolute">
              <img src="./src/assets/splash.png" className=" scale-95" />
            </div>
          </div>
        </div>
      </div>
      {/* Here page2 is begin */}
      <div
        className="page2 h-screen w-full flex  overflow-hidden text-white
        bg-gradient-to-br from-black via-neutral-900 to-neutral-800 "
      >
        <div className="leftSect relative h-full w-1/2 ">
          <div className="stoneWrapp relative h-full w-full">
            <img
              src="./src/assets/stone.png"
              className="scale-50 absolute top-[50%]
            sm:scale-50 sm:absolute sm:top-[50%]
              md:scale-75 md:absolute md:top-[50%]
              lg:scale-75 lg:absolute lg:top-[50%]
            drop-shadow-md drop-shadow-amber-50 "
            />

            <img
              src="./src/assets/grass.png "
              className="hidden  absolute 
              sm:hidden 
               md:block md:scale-50 md:absolute md:top-[38%] md:-left-[22%] 
                lg:block  lg:scale-50 lg:absolute lg:top-[30%] lg:-left-[22%]
              brightness-110 contrast-110 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] "
            />
          </div>
        </div>
        <div className="rightSect flex flex-col  h-full  w-1/2 items-center p-9 gap-7 ">
          <h1 className="text-4xl font-[font1]">
            More Than Water. A Smarter Hydration Choice.
          </h1>
          <h2 className="text-2xl font-[font1] ">What Makes It Special</h2>
          <p className="text-xl  text-white">
            Evocus Black Alkaline Water is infused with essential electrolytes
            and formulated with a high pH level to help neutralize acidity in
            the body. Its smooth taste and mineral composition make it ideal for
            athletes, professionals, and anyone who values clean hydration.
          </p>
          <h1 className="text-2xl text-white font-[font1]">Crafted with</h1>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-[#2B2730] text-amber-50 rounded-xl shadow-md shadow-[#2B2730]">
              Balanced alkaline minerals
            </div>
            <div className="p-4 bg-[#2B2730] text-amber-50 rounded-xl shadow-md shadow-[#2B2730]">
              Essential electrolytes
            </div>
            <div className="p-4 bg-[#2B2730] text-amber-50 rounded-xl shadow-md shadow-[#2B2730]">
              Trace nutrients for body support
            </div>
            <div className="p-4 bg-[#2B2730] text-amber-50 rounded-xl shadow-md shadow-[#2B2730]">
              Ultra-filtered water for purity
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

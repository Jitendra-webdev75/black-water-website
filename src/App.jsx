import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import "remixicon/fonts/remixicon.css";
function App() {
  return (
    <>
      <div className="main h-screen w-full flex ">
        <div className="h-full w-full absolute bg-white ">
          <Particles
            particleCount={200}
            particleSpread={12}
            speed={0.1}
            particleColors={["#100f0f"]}
            moveParticlesOnHover
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={2}
            cameraDistance={26}
            disableRotation={false}
          />
        </div>

        <Navbar></Navbar>

        <div className="content  h-full w-full flex ">
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
            <h1 className="   text-[3rem] lg:text-[3vw] md:text-3xl sm:text-3xl">
              Where Purity{" "}
            </h1>
            <h1 className=" text-[3rem]  lg:text-[3vw] md:text-3xl sm:text-3xl  ">
              Meets
            </h1>
            <h1>
              <i
                className="ri-flashlight-fill sm:text-[4rem] md:text-[4rem]
                lg:text-[3rem] text-[4rem] ml-30 text-[#06923E]  "
              ></i>
            </h1>
            <h1 className="lg:text-[3vw] md:text-4xl sm:text-3xl">Power</h1>
            <h1 className="lg:text-[3.6vw] md:text-3xl sm:text-2xl">
              Evocus Black Water
            </h1>
            <button
              className="ctaBtn h-[10vh] w-[50vw] text-5xl  bg-[#06923E] rounded-lg mt-10
              p-2 shadow-2xl shadow-black active:scale-90 text-white text-shadow-md text-shadow-black
              cursor-pointer
              sm:h-[8vh] sm:w-[30vw] sm:p-2 sm:text-4xl
              md:h-[8vh] md:w-[32vw] md:p-2 md:text-4xl
              lg:h-[12vh] lg:w-[17vw] lg:p-2 lg:text-4xl"
            >
              Order now
            </button>
          </div>

          <div className="rightContent  relative flex flex-col justify-center items-center w-1/2 overflow-hidden mt-20">
            <div className="productImg  z-10 mt-3.5 ">
              <img
                src="./src/assets/btlimg.png"
                className=" sm:scale-150 md:scale-110 lg:scale-90 scale-100 "
              />
            </div>
            <div className="splash fixed">
              <img src="./src/assets/splash.png" className=" scale-95" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

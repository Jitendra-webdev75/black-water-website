import Navbar from "./components/Navbar";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      <div className="main h-screen w-full ">
        <div className="h-full w-full relative bg-white ">
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

        <div className="content">
          <div className="leftContent absolute top-1/2 left-1/4 -translate-1/2 text-[4rem]  text-zinc-800  font-[font2] ">
            <h1>Where Purity Meets </h1>
            <h1>Power</h1>
            <h1>Evocus Black Water</h1>
          </div>

          <div className="rightContent">
            <div className="productImg absolute top-1/2 left-1/2 -translate-1/2 z-10 mt-3.5">
              <img src="./src/assets/btlimg.png" className=" scale-[85%] " />
            </div>
            <div className="splash absolute top-1/2 left-1/2 -translate-1/2">
              <img src="./src/assets/splash.png" className=" scale-95" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen bg-hero-img bg-no-repeat bg-cover bg-center">
        {/* <div className="w-full h-[39.7rem] bg-blackOverlay py-8"> */}
        <div className="container">
          <p className="text-white text-4xl lg:text-8xl font-bold translate-y-60">
            Buy Your <br /> <span className="pl-16">Dream Property</span>
          </p>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Hero;

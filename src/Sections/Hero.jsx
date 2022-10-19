import React from "react";
import chart from "../assets/chart.png"
function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto pt-4 pb-10 px-4">
        {/* logo */}
        <h1 className="text-center text-blue-700 font-extrabold text-2xl md:text-4xl">
          SCANZ
        </h1>
        {/* Text section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full lg:w-full text-center lg:text-left mt-8 lg:mt-16">
          <div className="w-[90%] lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold lg:w-[18ch]">Claim Your <span className="border-b">FREE</span> Scanz Subsription TODAY!</h1>
            <div className="text-sm md:text-base py-4">No catch. <span className="font-bold">No credit card</span></div>
            <a href="" className="inline-block font-bold bg-orange-600 py-2 px-4 rounded-sm">TRY NOW FOR 7 DAYS</a>
          </div>
          {/* Hero Image */}
          <img src={chart} alt="" className="w-[90%] lg:w-1/2"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;

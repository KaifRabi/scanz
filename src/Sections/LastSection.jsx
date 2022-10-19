import React from "react";
import Chart from "../assets/chart.png";
function LastSection() {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* Heading */}
        <div className="container mx-auto text-white text-center text-xl md:text-2xl font-bold py-4 ">
          Here's a breakdown of everything you'll get:
        </div>
      </div>

      {/* list container */}
      <div className="">
        {/* list */}
        <div className="flex flex-col items-center px-4 py-8">
          <h4 className="text-blue-800 font-bold text-lg md:text-xl">
            1. Unrestricted Access to Scan The ENTIRE Market in REAL-TIME
          </h4>
          <div className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ipsa veritatis praesentium amet nostrum hic. consectetur adipisicing
            elit. Impedit ipsa veritatis praesentium
          </div>
          <img src={Chart} alt="" className="w-[70%]  md:w-[50%] mt-6" />
        </div>

        {/* list */}
        <div className="flex flex-col items-center px-4 py-8 relative
        after:hidden after:lg:block after:content-[''] after:w-[200px] after:h-[200px] after:bg-blue-900 after:absolute after:top-10 after:right-[-100px] after:rounded-full">
          <h4 className=" font-bold ">
            <span className="text-blue-800 text-lg md:text-xl">
              {" "}
              2. Intraday blackout scanners{" "}
            </span>{" "}
            That show you how to get included in the BIGGEST plays of the
            day...automatically
          </h4>
          <img src={Chart} alt="" className="w-[70%]  md:w-[50%] mt-6" />
        </div>

        {/* list */}
        <div className="flex flex-col items-center  bg-gray-400 px-4 py-8">
          <h4 className="">
            <span className=" font-bold text-lg md:text-xl">
              {" "}
              3. Personalized Watchlists That Fir Your Criteria{" "}
            </span>{" "}
            so you can never miss out on a killer trade idea again.
          </h4>
          <img src={Chart} alt="" className="w-[70%]  md:w-[50%] mt-6" />
        </div>

        {/* list */}
        <div className="flex flex-col items-center px-4 py-8 relative
        after:hidden after:md:block after:content-[''] after:w-[200px] after:h-[200px] after:bg-blue-400 after:absolute after:bottom-0 after:left-[-100px] after:rounded-full">
          <h4 className="text-blue-800 font-bold text-lg md:text-xl">
            4. Unrestricted Access to Scan The ENTIRE Market in REAL-TIME
          </h4>
          <div className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ipsa veritatis praesentium amet nostrum hic. consectetur adipisicing
            elit. Impedit ipsa veritatis praesentium
          </div>
          <img src={Chart} alt="" className="w-[70%]  md:w-[50%] mt-6" />
        </div>

        {/* list */}
        <div className="flex flex-col items-center px-4 py-8">
          <h4 className="text-blue-800 font-bold text-lg md:text-xl">
            5. Unrestricted Access to Scan The ENTIRE Market in REAL-TIME
          </h4>
          <div className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ipsa veritatis praesentium amet nostrum hic. consectetur adipisicing
            elit. Impedit ipsa veritatis praesentium
          </div>
          <img src={Chart} alt="" className="w-[70%]  md:w-[50%] mt-6" />
        </div>
      </div>
    </div>
  );
}

export default LastSection;

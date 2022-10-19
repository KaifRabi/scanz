import React from "react";
import ProfilePic from "../assets/profile.png";
function Profile() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-around md:items-start gap-10 md:gap-0 py-16">
      {/* left side */}
      <div className="shadow-md">
        <img src={ProfilePic} alt="" className="h-[325px] w-[325px]" />
        <div className="text-xl p-4">
          Founder of <span className="font-bold">ABC</span>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col items-center justify-center md:items-start w-[90%] md:w-[50%] gap-2 md:mt-8 relative 
      after:content-['``'] after:w-4 after:h-4 after:text-7xl after:md:text-9xl after:absolute after:text-blue-500 after:-top-1 after:right-20
      ">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Nathan Michuad</h2>
        <div className="md:text-lg">
          World Class Daytrader and Educator. <br /> Using Scanz daily for over
          10 years.
        </div>
        <img
          src="https://www.kindpng.com/picc/m/710-7105732_transparent-five-star-png-png-download.png"
          className="w-20"
        />
        <div className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempore aut. Voluptatibus doloremque aut, sapiente voluptatum id
          itaque modi illum libero delectus harum excepturi quisquam, pariatur
          ab? Consequatur, ver nemo ut iure non maxime. A, laudantium quo.
        </div>
      </div>
    </div>
  );
}

export default Profile;
import React from "react";

function About() {
  return (
    <div className="">
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* Heading */}
        <div className="container mx-auto text-white text-center text-xl md:text-2xl font-bold py-4 ">
          You'll Gain Exclusive Access To The World's <br /> Most Powerful{" "}
          <span className="border-b">Trade-Finding</span> Platform!
        </div>
      </div>
      <div className="container mx-auto flex flex-col w-[90%] md:w-[80%] gap-4 py-12">
        <p className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio veniam
          pariatur, nulla modi voluptates odio autem molestias accusamus
          laudantium deleniti numquam earum fuga vitae magni maxime esse maiores
          sed omnis.
        </p>
        <p className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          sunt.
        </p>
        <p className="py-2">Lorem ipsum dolor sit amet.</p>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <p className="py-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          corrupti officia laboriosam tenetur atque repellat!
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non
          dolorem odit dolore est, esse sit provident corrupti iure voluptatem?
        </p>
      </div>
    </div>
  );
}

export default About;

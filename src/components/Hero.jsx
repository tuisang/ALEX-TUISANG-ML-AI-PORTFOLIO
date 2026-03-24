import React from "react";
import HeroImage from "../assets/alex.png";

export const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full pt-20 md:pt-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold">
            MACHINE LEARNING ENGINEER
          </h2>

          <p className="text-gray-400 max-w-md py-4 mx-auto md:mx-0">
            <p className="text-gray-400 max-w-md py-4 mx-auto md:mx-0">
  I design and build AI-powered solutions that turn data into intelligence. 
  With expertise in Machine Learning, Deep Learning, and NLP, I create 
  systems that are not only smart but practical, scalable, and impactful 
  in solving real-world challenges.
</p>
          </p>

          <div className="w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black cursor-pointer">
            <a href="/alex_resume.pdf" download>
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0">
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-lg"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
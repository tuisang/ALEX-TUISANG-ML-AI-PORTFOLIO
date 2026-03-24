import React from "react";
import python from "../assets/python.png";
import django from "../assets/django.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import cplusplus from "../assets/c-.png";
import js from "../assets/js.png";
import colab from "../assets/colab.png";
import jupyter from "../assets/jupyter.png";
import react from "../assets/react.png";

export const Experience = () => {
  const technology = [
    { id: 1, icon: python, title: "Python" },
    { id: 2, icon: django, title: "Django" },
    { id: 3, icon: github, title: "Github" },
    { id: 4, icon: js, title: "Javascript" },
    { id: 5, icon: react, title: "React JS" },
    { id: 6, icon: cplusplus, title: "C++" },
    { id: 7, icon: colab, title: "Google Colab" },
    { id: 8, icon: jupyter, title: "Jupyter Notebook" },
    { id: 9, icon: mysql, title: "MySQL" },
  ];

  return (
    <div
      name="experience"
      className="w-full md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        
        {/* Section Header */}
        <div className="pb-12 md:pb-16">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {/* Technology Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technology.map(({ id, icon, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 transition duration-300 py-6 rounded-lg shadow-yellow-500 flex flex-col items-center"
            >
              {/* Force all icons to the same size */}
              <img
                src={icon}
                alt={title}
                className="w-24 h-24 object-contain mx-auto" 
              />
              <p className="text-2xl mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
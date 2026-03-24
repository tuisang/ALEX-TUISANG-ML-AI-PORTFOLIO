import React from "react";
import preprocessing from '../assets/preprocessing.jpg';
import pytorch from '../assets/pytorch.jpg'; 
import insurance from '../assets/insurance.jpg';
import tumour from '../assets/tumour.jpg';
import regression from '../assets/regression.jpg';  
import tensorflow from '../assets/tensorflow.jpg';
import python from '../assets/python.jpg';
import numpy from '../assets/numpy.jpg';
import matplotlib from '../assets/matplotlib.jpg'; 
import { FaGithub } from "react-icons/fa";

export const Portfolio = () => {
  const projects = [
    { id: 1, image: tensorflow, title: "keras/tensorflow", github: " https://github.com/tuisang/keras-and-tensorflow.git" },
    { id: 2, image: python, title: "Pandas", github: "https://github.com/tuisang/pandas-demo.git" },
    { id: 3, image: numpy, title: "NumPy", github: "https://github.com/tuisang/numpyTutorial.git" },
    { id: 4, image: matplotlib, title: "Matplotlib", github: "https://github.com/tuisang/matplotlib.git" },
    { id: 5, image: tumour, title: "layers&filters", github: "https://github.com/tuisang/convolutional-layers-and-filters.git" },
    { id: 6, image: insurance, title: "Insurance ML", github: "https://github.com/tuisang/INSURANCE_SALE_PREDICTIONS.git" },
    { id: 7, image: preprocessing, title: "Data Preprocessing", github: "https://github.com/tuisang/data-preprocessing.git" },
    { id: 8, image: pytorch, title: "PyTorch", github: "https://github.com/tuisang/pytorch.git" },
    { id: 9, image: regression, title: "XGBoost", github: "https://github.com/tuisang/XGBoost.git" },
  ];

  return (
    <div
      name="portfolio"
      className="w-full md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        
        {/* Header */}
        <div className="pb-12 md:pb-16">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map(({ id, image, title, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 transition duration-300 bg-black/40"
            >
              {/* Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/30">
                
                {/* Project Name */}
                <p className="text-sm font-semibold text-gray-200">
                  {title}
                </p>

                {/* GitHub Icon */}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 duration-200"
                  >
                    <FaGithub size={22} />
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
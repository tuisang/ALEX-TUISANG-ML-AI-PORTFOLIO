import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  md:min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center text-white md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 ">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4">
          Hi, I’m Alex Tuisang — an AI & Machine Learning Engineer focused on designing and deploying data-driven solutions for real-world problems. I have completed an engineering-focused machine learning course on Udemy, where I built a strong foundation in core ML concepts, model development, and practical implementation.

My experience includes working on multiple machine learning projects involving data preprocessing, feature engineering, model training, and evaluation. I have hands-on experience with tools and frameworks such as Python, NumPy, Pandas, Scikit-learn, and PyTorch, and I’m comfortable building end-to-end ML pipelines—from data ingestion to model deployment.

I am particularly interested in developing scalable and efficient models, optimizing performance, and applying AI to solve business and user-centric challenges. I continuously improve my skills by experimenting with new algorithms, tools, and real-world datasets.

I am open to both full-time opportunities and freelance projects where I can contribute to building intelligent systems, predictive models, and AI-powered applications that deliver measurable impact.
        </p>
      </div>
    </div>
  );
};

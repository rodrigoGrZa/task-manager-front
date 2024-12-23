import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center max-h-fit bg-black px-6 py-10">
      <div className="max-w-3xl text-center border border-gray-700 bg-gray-900 shadow-lg rounded-lg p-10">
        <h1 className="text-5xl font-bold text-white uppercase mb-6">
          About This Project
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-6">
          This is a technical assessment project focused on implementing a
          <span className="font-medium text-white"> Task Management System</span>.
          The goal is to demonstrate expertise developing modern web applications
          with React js and Java SpringBoot.
        </p>
        <p className="text-lg text-gray-500 italic">
          Designed with precision, minimalism, and the timeless principles of Swiss Design.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

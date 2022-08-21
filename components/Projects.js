import React from "react";
import userData from "@constants/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    AOS.refresh();
  }, [])
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800  -mt-10">
        <h1 data-aos="fade-down" className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900" data-aos=" fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40" >
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a data-aos="zoom-in" href={link} className="w-full block shadow-2xl">
      <div data-aos="zoom-in" className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};

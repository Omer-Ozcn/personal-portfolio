// Projects.jsx
import React from "react";
import { useLang } from "../context/LangContext";
import jokesImg from "../assets/projects-image/jokes.jpg";
import boredImg from "../assets/projects-image/bored.jpg";
import laptopImg from "../assets/projects-image/laptop.jpg";

const projectsData = [
  {
    id: 1,
    title: "Random Jokes",
    description: {
      tr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      en:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    },
    technologies: ["react", "vercel", "axios", "router"],
    bgLight: "bg-[#d4e6ff]",
    bgDark: "dark:bg-[#2D3235]",
    previewImage: jokesImg,
  },
  {
    id: 2,
    title: "Are you bored?",
    description: {
      tr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      en:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    technologies: ["react", "redux", "axios", "router", "vercel"],
    bgLight: "bg-[#d8f0e9]",
    bgDark: "dark:bg-[#495351]",
    previewImage: boredImg,
  },
];

export default function Projects() {
  const { lang } = useLang();

  return (
    <div className="w-full dark:bg-[#484148]">
      <section className="max-w-[1064px] mx-auto pt-10 px-4 pb-0">
        <h2 className="text-center text-xl font-semibold mb-10 dark:text-white">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 dark:bg-[#484148] rounded-xl p-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${project.bgLight} ${project.bgDark} rounded-xl p-10 flex flex-col justify-between`}
              style={{ minHeight: "500px" }}
            >
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm mb-6 max-w-[370px] text-black dark:text-white">
                  {project.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 max-w-[370px]">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white dark:bg-[#fafafa] px-3 py-1 rounded-full text-xs cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mb-10 max-w-[370px] text-sm font-semibold cursor-pointer text-black dark:text-white">
                  <a href="#" className="hover:underline">
                    View on Github
                  </a>
                  <a href="#" className="hover:underline flex items-center gap-1">
                    Go to app <span>→</span>
                  </a>
                </div>
              </div>

              <div
                className="relative w-full max-w-[458px] mx-auto rounded-xl overflow-visible -mb-10"
                style={{ aspectRatio: "500 / 287" }}
              >
                <img
                  src={laptopImg}
                  alt="Laptop frame"
                  className="absolute top-8 left-0 w-full h-full object-cover rounded-xl"
                />
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="absolute top-[18%] left-[14.5%] w-[71%] h-[78%] object-cover pointer-events-none select-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

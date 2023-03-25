import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Spacescope",
      description: "A gallery to view Astronomy Picture of the day",
      repo_link: "https://github.com/kn-oz/spacescope",
      live_link: "https://spacescope.netlify.app",
    },
    {
      id: 2,
      title: "in-sync",
      description:
        "A social app to find and meet new people and chat with them",
      repo_link: "https://github.com/kn-oz/inSync",
      live_link: "https://in-sync.netlify.app",
    },
    {
      id: 3,
      title: "senpai-kart",
      description: "An ecommerce app built using next.js",
      repo_link: "https://github.com/kn-oz/senpai-cart",
      live_link: "https://senpai-cart.vercel.app/",
    },
    {
      id: 4,
      title: "zen-sama",
      description: "an app to help you relax and feel zen",
      repo_link: "https://github.com/kn-oz/zen_sama",
      ive_link: "https://zen-sama.netlify.app",
    },
    {
      id: 5,
      title: "Tetris",
      description: "classic game using vanilla javascript",
      repo_link: "https://github.com/kn-oz/tetris",
      live_link: "https://kn-oz.github.io/tetris/",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-fuchsia-400 to-violet-600 w-full text-white md:h-screen pt-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, repo_link, live_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-full">
              <div className="p-6 rounded-md duration-200 hover:scale-105 flex flex-col justify-between">
                <h1 className="font-bold text-2xl text-center">{title}</h1>
                <h2 className="font-medium text-xl text-center">
                  {description}
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={repo_link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import DuolingoCard from "./DuolingoCard";
import ProjectCard from "./ProjectCard";
import goal2023 from "../data/goal2023.json";
import ongoing_project from "../data/ongoing_projects.json";
import dead_project from "../data/dead_projects.json";

function Comments() {
  const [isOpen, setIsOpen] = useState(false);
  const paragraphRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      paragraphRef?.current.scrollIntoView({
        block: "start",
      });
      window.scrollBy({
        top: -110,
      });
    }, 0);
  };

  return (
    <div
      id="Comments"
      className="flex flex-col items-center justify-center p-4 mt-4 bg-gray-200 rounded-lg shadow-md"
    >
      <p className="text-4xl font-bold text-center py-4" ref={paragraphRef}>
        Comments
      </p>
      <p className="text-2xl font-bold text-center py-2">About ME === TMI</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 my-4"
        onClick={toggle}
      >
        {isOpen ? "접기" : "펼치기"}
      </button>
      {isOpen && (
        <div>
          <DuolingoCard name="HoseCloud" id="795379412" />

          <div className="flex place-content-center m-10">
            <div className="flex-row bg-white rounded-lg p-6 text-center place-content-center">
              <p className="text-3xl font-bold mb-3">2023년 목표</p>
              {goal2023.map((data) => (
                <p className="text-lg" key={data.title}>
                  {data.check ? "✔" : "❌"} {data.title}
                </p>
              ))}
            </div>
          </div>

          <div className="flex place-content-center m-10">
            <div className="flex-row bg-white rounded-lg p-6">
              <p className="text-center text-3xl font-bold mb-3">
                진행중인 프로젝트
              </p>
              <div className="flex flex-wrap m-2 space-x-1">
                {ongoing_project.map((data) => (
                  <div key={data.title}>
                    <ProjectCard
                      title={data.title}
                      description={data.description}
                      imgUrl={data.imgUrl}
                      projectUrl={data.projectUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex place-content-center m-10">
            <div className="flex-row bg-white rounded-lg p-6">
              <p className="text-center text-3xl font-bold mb-3">
                중단된 프로젝트
              </p>
              <div className="flex flex-wrap m-2 space-x-1">
                {dead_project.map((data) => (
                  <div key={data.title}>
                    <ProjectCard
                      title={data.title}
                      description={data.description}
                      imgUrl={data.imgUrl}
                      projectUrl={data.projectUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;

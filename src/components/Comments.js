import React, { useState, useRef } from "react";

function Comments() {
  const [isOpen, setIsOpen] = useState(false);
  const paragraphRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      paragraphRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <div
      id="Comments"
      className="flex flex-col items-center justify-center p-4 mt-4 bg-gray-200 rounded-lg shadow-md"
    >
      <h1 className="text-4xl font-bold text-center py-4" ref={paragraphRef}>
        Comments
      </h1>
      <h2 className="text-2xl font-bold text-center py-2">About ME === TMI</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 my-4"
        onClick={toggle}
      >
        {isOpen ? "접기" : "펼치기"}
      </button>
      {isOpen && (
        <div>
          <p className="text-lg">듀오링고</p>
          <p className="text-lg">23년 목표</p>
          <p className="text-lg">진행중인 프로젝트</p>
          <p className="text-lg">중단된 프로젝트</p>
        </div>
      )}
    </div>
  );
}

export default Comments;

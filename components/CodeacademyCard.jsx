import React from "react";

const CodeacademyCard = (props) => {
  return (
    <>
      <div>
        <div className="w-full h-full p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Codeacedemy
            </span>
          </button>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-white">
              {props.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{props.title}</p>

          <a
            href={`https://www.codecademy.com/search?query=${props.title}'}
            )}
            
            #:~:text=${props.title}`}
            target="_blank"
            onClick={async (e) => {
              await fetch(
                "/api/addCourseToHistory?email=" +
                  props.email +
                  "&provider=codecademy&title=" +
                  props.name
              );

              await fetch(
                `/api/sendEmail?message=Congratulations for Registering a new course of ${props.name}. All the best!`
              );
            }}
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Link
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default CodeacademyCard;

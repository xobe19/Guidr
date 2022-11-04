import React from "react";
import Link from "next/link";
const JobCard = () => {
  return (
    <div className="items-center  rounded-lg shadow sm:flex bg-gray-800 border-gray-700">
      <a href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src="webdev.png"
          alt="Bonnie Avatar"
        />
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight  text-white">
          <a href="#">Job Title: WebDeveloper</a>
        </h3>
        <p className="mt-3 mb-4 font-light  text-gray-400">
          Job Description with avg salary:
        </p>

        <button
          type="button"
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          <Link href="/courses">See Courses</Link>
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;

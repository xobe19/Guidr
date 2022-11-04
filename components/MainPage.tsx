import Image from "next/image";
import Link from "next/link";
import styles from "../styles/MainPage.module.css";
import { useSession, signIn, signOut } from "next-auth/react"
/* Styles helper */
function sh(s: String) {
  const a = [];
  for (let style of s.split(" ")) {
    a.push(styles[style]);
  }
  return a.join(" ");
}

const MainPage = () => {
let {data: session} = useSession();  
console.log(session);
  return (
    <div className="m-4 md:m-8 lg:m-24">
      <div className="flex justify-between mb-20 xl:mx-16">
        <div className="xl:flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            <span className="block xl:inline">Guidr</span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-500 md:mt-5 md:text-xl lg:mx-0">
            One stop for Guided path, learning resources, projects, research and
            development and latest trends &#128640;
          </p>
          <div className="mt-5">
            <Link
              href="/survey"
              className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
            >
              Get started ➜
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src="/mainimg.png" alt="" width={450} height={450} />
        </div>
      </div>

      <div className="bg-white mb-20" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="lg:text-center mb-8">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">
              Fast. Simple. Accurate
            </h2>
            <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 mb-4">
              The best way to choose your Career
            </p>
            <p className="max-w-2xl text-gray-500 lg:mx-auto">
              Recommedation System based on Learning patterns
            </p>
          </div>

          <div className="">
            <dl className="space-y-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    {/* TODO: SVG ICONS NEED TO CHANGE*/}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Job Recommedation
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Guidr recommends job descriptions which suits your interest
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Popular Courses
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Most Rated and Reputed Courses from Udemy, Coursera and
                  Codeacademy
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Projects and Research
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Recommeded Projects & Research ideas
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Latest Trends and Scope
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Get Latest and Trending Domain Analysis and scope for future.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mb-20" id="how-it-works">
        <p className="text-3xl font-bold lg:text-center leading-8 tracking-tight text-gray-900 mb-4">
          How it Works
        </p>
        <ul
          className={sh("stepper stepper-vertical")}
          data-mdb-stepper="stepper"
          data-mdb-stepper-type="vertical"
        >
          <li className={sh("stepper-step stepper-active")}>
            <div className={sh("stepper-head")} tabIndex={0}>
              <span className={sh("stepper-head-icon")}> 1 </span>
              <span className={sh("stepper-head-text")}> Step 1 </span>
            </div>
            <div className={sh("stepper-content")} style={{ height: 64 }}>
              An interactive survey to analyze your skills and learning
              patterns.
            </div>
          </li>
          <li className={sh("stepper-step stepper-active")}>
            <div className={sh("stepper-head")}>
              <span className={sh("stepper-head-icon")}> 2 </span>
              <span className={sh("stepper-head-text")}> Step 2 </span>
            </div>
            <div className={sh("stepper-content")} style={{ height: 64 }}>
              Intelligent interests inference based on your inputs.
            </div>
          </li>
          <li className={sh("stepper-step stepper-active")}>
            <div className={sh("stepper-head")}>
              <span className={sh("stepper-head-icon")}> 3 </span>
              <span className={sh("stepper-head-text")}> Step 3 </span>
            </div>
            <div className={sh("stepper-content")} style={{ height: 64 }}>
              Recommendation via leaning patterns like Web-dev, AI, ML, etc.
              with average salary.
            </div>
          </li>
          <li className={sh("stepper-step stepper-active")}>
            <div className={sh("stepper-head")}>
              <span className={sh("stepper-head-icon")}> 4 </span>
              <span className={sh("stepper-head-text")}> Step 4 </span>
            </div>
            <div className={sh("stepper-content")} style={{ height: 64 }}>
              Roadmaps, courses, projects, docs and the best resources from
              around the internet.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;

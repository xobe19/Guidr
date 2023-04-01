import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Bargraph from "../components/Bargraph";
import CodeacademyCard from "../components/CodeacademyCard";
import CourseCard from "../components/CourseCard";
import CourseraCard from "../components/CourseraCard";
import Navbar from "../components/Navbar";

import { useSession } from "next-auth/react";
const courses = () => {
  let { data: session } = useSession();
  let email = session?.user?.email;
  const router = useRouter();
  let [params, setParams] = useState({});

  const job = params["job"];

  const [jobName, setJobName] = useState(job);
  const [UdemyData, setUdemyData] = useState([]);

  const [CourseraData, setCourseraData] = useState([]);
  const [codecademyData, setcodecademyData] = useState([]);

  const [salary, setSalaryData] = useState([]);

  const fetchdata = async () => {
    let prom1 = fetch(
      `/api/getUdemyCoursesData?jobName=${params["job"]}&limit=3`
    )
      .then((response) => response.json())
      .then((data) => setUdemyData(data));

    let prom2 = fetch(
      `/api/getCourseraCoursesData?jobName=${params["job"]}&limit=3`
    )
      .then((response) => response.json())
      .then((data) => setCourseraData(data));

    let prom3 = fetch(
      `/api/getCodecademyCoursesData?jobName=${params["job"]}&limit=3`
    )
      .then((response) => response.json())
      .then((data) => setcodecademyData(data));

    // let prom4 = fetch(
    //   `/api/getExtraDataforJob?jobName=${params["job"]}&limit=1`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setSalaryData(data));
    await Promise.all([prom1, prom2, prom3]);
  };

  useEffect(() => {
    setParams(router.query);
    if (
      params != null &&
      params != undefined &&
      Object.keys(params).length != 0
    )
      fetchdata();
  }, [router.query, params]);
  return (
    <div>
      <Navbar />

      {/* {Need to Styles and filter rating course to first} */}
      {/* <Chart /> */}
      <div className="m-8">
        {/* <Bargraph
          statesMap={salary.statesMap}
          avgsalary={salary.averageSalary}
          jobName={salary.jobName}
        /> */}
        <div className="h-[25px]"></div>
        <h1 className="text-3xl font-extrabold text-black">
          Top Courses From:
          <span class="text-blue-500">{" Udemy, Coursera and Codecademy"}</span>
        </h1>

        <div className="mx-auto w-fit grid grid-rows-3 gap-4 my-16">
          <div className="grid grid-cols-3 gap-4">
            {UdemyData.map((UdemyData) => {
              console.log(UdemyData);
              return (
                <CourseCard
                  Name={UdemyData.Title}
                  Description={UdemyData.Summary}
                  coursesLink={UdemyData.Link}
                  Rating={UdemyData.Rating}
                  Stars={UdemyData.Stars}
                  key={UdemyData.Link}
                  email={email}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {CourseraData.map((CourseraData) => {
              return (
                <CourseraCard
                  name={CourseraData.course_name}
                  link={CourseraData.course_link}
                  rating={CourseraData.course_rating}
                  key={CourseraData.course_link}
                  email={email}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {codecademyData.map((codecademyData) => {
              return (
                <CodeacademyCard
                  name={codecademyData.title}
                  cat={codecademyData.type}
                  key={codecademyData.title + codecademyData.type}
                  email={email}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default courses;

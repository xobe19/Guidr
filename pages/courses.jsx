import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import CourseraCard from "../components/CourseraCard";
import CodeacademyCard from "../components/CodeacademyCard";
import Bargraph from "../components/Bargraph";
import { useRouter } from "next/router";
const courses = () => {
  const router = useRouter();
  let [params, setParams] = useState({});

  const job = params["job"];

  const [jobName, setJobName] = useState(job);
  console.log(jobName);
  const [UdemyData, setUdemyData] = useState([]);

  const [CourseraData, setCourseraData] = useState([]);
  const [codecademyData, setcodecademyData] = useState([]);

  const [salary, setSalaryData] = useState([]);

  const fetchdata = async () => {
    await fetch(`/api/getUdemyCoursesData?jobName=${params["job"]}&limit=3`)
      .then((response) => response.json())
      .then((data) => setUdemyData(data));

    await fetch(`/api/getCourseraCoursesData?jobName=${params["job"]}&limit=3`)
      .then((response) => response.json())
      .then((data) => setCourseraData(data));

    await fetch(
      `/api/getCodecademyCoursesData?jobName=${params["job"]}&limit=3`
    )
      .then((response) => response.json())
      .then((data) => setcodecademyData(data));

    await fetch(`/api/getExtraDataforJob?jobName=${params["job"]}&limit=1`)
      .then((response) => response.json())
      .then((data) => setSalaryData(data));
  };

  useEffect(() => {
    setParams(router.query);
    if (
      params != null &&
      params != undefined &&
      Object.keys(params).length != 0
    )
      fetchdata();
    console.log(params);
  }, [router.query, params]);
  return (
    <div>
      <Navbar />

      {/* {Need to Styles and filter rating course to first} */}
      {/* <Chart /> */}
      <Bargraph statesMap={salary.statesMap} avgsalary={salary.averageSalary} />
      <div className="mx-auto w-fit flex flex-wrap justify-center items-center gap-4 my-16">
        {UdemyData.map((UdemyData) => {
          return (
            <CourseCard
              Name={UdemyData.Title}
              Description={UdemyData.Summary}
              coursesLink={UdemyData.Link}
              Rating={UdemyData.Rating}
              Stars={UdemyData.Stars}
              key={UdemyData.Title}
            />
          );
        })}
        {CourseraData.map((CourseraData) => {
          return (
            <CourseraCard
              name={CourseraData.course_name}
              link={CourseraData.course_link}
              rating={CourseraData.course_rating}
              key={CourseraData.course_name}
            />
          );
        })}
        {codecademyData.map((codecademyData) => {
          return (
            <CodeacademyCard
              name={codecademyData.title}
              cat={codecademyData.category}
              key={codecademyData.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default courses;

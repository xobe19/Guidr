import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import CourseraCard from "../components/CourseraCard";
import CodeacademyCard from "../components/CodeacademyCard";

const courses = () => {
  const [jobName, setJobName] = useState("web");
  const [UdemyData, setUdemyData] = useState([]);

  const [CourseraData, setCourseraData] = useState([]);
  const [codecademyData, setcodecademyData] = useState([]);

  const fetchdata = async () => {
    await fetch(`/api/getUdemyCoursesData?jobName=${jobName}&limit=3`)
      .then((response) => response.json())
      .then((data) => setUdemyData(data));

    await fetch(`/api/getCourseraCoursesData?jobName=${jobName}&limit=3`)
      .then((response) => response.json())
      .then((data) => setCourseraData(data));

    await fetch(`/api/getCodecademyCoursesData?jobName=${jobName}&limit=3`)
      .then((response) => response.json())
      .then((data) => setcodecademyData(data));

    // await fetch(`/api/getExtraDataforJob?jobName?jobName=${jobName}&limit=0`)
    //   .then((response) => response.json())
    //   .then((data) => setcodecademyData(data));
  };

  useEffect(() => {
    fetchdata();
  }, [jobName]);
  return (
    <>
      <Navbar />

      {/* {Need to Styles and filter rating course to first} */}

      <div className="mx-auto w-fit">
        {UdemyData.map((UdemyData) => {
          return (
            <CourseCard
              Name={UdemyData.Title}
              Description={UdemyData.Summary}
              coursesLink={UdemyData.Link}
              Rating={UdemyData.Rating}
              Stars={UdemyData.Stars}
            />
          );
        })}
        {CourseraData.map((CourseraData) => {
          return (
            <CourseraCard
              name={CourseraData.course_name}
              link={CourseraData.course_link}
              rating={CourseraData.course_rating}
            />
          );
        })}
        {codecademyData.map((codecademyData) => {
          return (
            <CodeacademyCard
              name={codecademyData.title}
              cat={codecademyData.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default courses;

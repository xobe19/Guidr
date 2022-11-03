import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const courses = () => {
  const [jobName, setJobName] = useState("blockchain");
  const [UdemyData, setUdemyData] = useState([]);

  const [CourseraData, setCourseraData] = useState([]);
  const [codecademyData, setcodecademyData] = useState([]);

  const fetchdata = async () => {
    await fetch(`/api/getUdemyCoursesData?jobName=${jobName}&limit=5`)
      .then((response) => response.json())
      .then((data) => setUdemyData(data));

    await fetch(`/api/getCourseraCoursesData?jobName=${jobName}&limit=1`)
      .then((response) => response.json())
      .then((data) => setCourseraData(data));

    await fetch(`/api/getCodecademyCoursesData?jobName=${jobName}&limit=1`)
      .then((response) => response.json())
      .then((data) => setcodecademyData(data));
  };

  useEffect(() => {
    fetchdata();
  }, [jobName]);
  return (
    <>
      <Navbar />

      {/* {Need to Styles and filter rating course to first} */}
      <section>
        {UdemyData.map((UdemyData) => {
          return (
            <CourseCard
              Name={UdemyData.Title}
              Description={UdemyData.Summary}
              Link={UdemyData.Link}
              Rating={UdemyData.Rating}
              Stars={UdemyData.Stars}
            />
          );
        })}
      </section>
    </>
  );
};

export default courses;

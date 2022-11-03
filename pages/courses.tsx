import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const courses = () => {
  const [jobName, setJobName] = useState("Machine Learning");
  const [jobData, setJobData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(
      `/api/getUdemyCoursesData?jobName=${jobName}&limit=5`
    );
    const req = await response.json();
    setJobData(req);
  };

  useEffect(() => {
    fetchdata();
  }, [jobName]);
  return (
    <>
      <Navbar />

      {/* {TODO: Need to make JobCard component} */}
      {jobData.map((jobData) => {
        return (
          <ul>
            <li key="{jobData._id}">
              <h1>
                <b>{jobData.Title}</b>
              </h1>
              <p>Description : {jobData.Summary}</p>
              <h3>
                Purchased :{jobData.Rating} Rating : {jobData.Stars}
              </h3>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default courses;

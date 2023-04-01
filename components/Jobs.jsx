import { useState, useEffect } from 'react';
import axios from 'axios';

function Jobs(props) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/api/getExtraDataforJob?jobName=${props.jobName}&limit=3`);
      setJobs(res.data.res2);
    }
    fetchData();
  }, [props.jobName]);

  return (
    <div className="jobs-container">
      <h1 className="jobs-header">Available Jobs From Indeed - <span className="live">LIVE</span></h1>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-card" key={job._id.$oid}>
            <h2 className="job-title">{job.company}</h2>
            <h3 className="job-company">{job.job_title}</h3>
            <p className="job-location">
              <strong>Location:</strong> {eval(job.location).map((loc, i) => (
                <span key={i}>
                  {loc}
                  {i < job.location.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <div className="job-details">
              <p className="job-salary">
                <strong>Salary:</strong> {job.salary}
              </p>
              <p className="job-rating">
                <strong>Rating:</strong> {job.rating}
              </p>
              <p className="job-emp-type">
                <strong>Employment Type:</strong> {job.emp_type}
              </p>
              <p className="job-role-category">
                <strong>Role Category:</strong> {job.role_category}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .jobs-container {
          margin: 50px auto;
        }
        .jobs-header {
          color: #0b5ed7;
          font-size: 36px;
          font-weight: 700;
          text-align: center;
        }
        .jobs-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .job-card {
          background-color: white;
          border-radius: 5px;
          box-shadow: 2px 2px 5px grey;
          margin: 20px;
          padding: 20px;
          width: 300px;
        }
        .job-title {
          color: #00bfa5;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .job-company {
          color: #8f8f8f;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .job-location {
          color: #8f8f8f;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .job-details {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .job-salary,
        .job-rating,
        .job-emp-type,
        .job-role-category {
          color: #8f8f8f;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .live {
            color: red
        }
      `}</style>
    </div>
  );
}

export default Jobs;

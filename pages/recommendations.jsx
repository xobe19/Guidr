import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

const recommendations = () => {
  // console.log(router.query);
  // let { job } = router.query;
  // let arrJobs = job.split(',');
  // arrJobs = arrJobs.filter((ele) => ele!='');

  const { data: session } = useSession();

  const router = useRouter();
  let [params, setParams] = useState({});
  //arrJobs.map((ele) => {
  //   return <JobCard title={ele}/>

  useEffect(() => {
    setParams(router.query);
  }, [router.query]);
  return params == undefined ||
    params == null ||
    Object.keys(params).length === 0 ? (
    <></>
  ) : (
    <>
      <Navbar />

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Hi {session?.user.name}! Thanks for Survey
            </h2>
            <p className=" text-gray-500 lg:mb-16 sm:text-xl">
              Curated Lists of Job Recommendations which suits your interest
            </p>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {params["job"].split(",").map((ele) => {
              return <JobCard title={ele} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default recommendations;

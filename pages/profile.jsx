import Navbar from "../components/Navbar";
import ActivityGraph from "../components/ActivityGraph";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react";
const profile = () => {
const {data: session} = useSession();
console.log(session);
let name = session?.user?.name;
let email = session?.user?.email;
let imageUrl = session?.user?.image;
console.log(email+'outer');
let [data, setData] = useState([]);

const fetchData = async (email) => {
  console.log('test'+email);
let tmp = await fetch('/api/getCourseHistory?email='+email);
tmp = await tmp.json();
setData(tmp['data']);
}

useEffect(() => {
if(email != undefined)
  fetchData(email);
}, [email]);

let enrolledCourses = data.length, completedCourses = 0;
for(let i = 0; i < data.length; i++) {
  if(data[i]['completed']) completedCourses++;
}
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">{enrolledCourses}</p>
                <p className="text-gray-400">Enrolled</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">{completedCourses}</p>
                <p className="text-gray-400">Completed</p>
              </div>

            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
     <img src={`${imageUrl}`}></img> 
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center items-center">
              <div className="">
                <span className="mr-4">Share on</span>
                {/* TODO: change shared text */}
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/cws/share" target="_blank">
                  <svg
                    fill="#0A66C2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 inline mr-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/?text=<text here>" target="_blank">
                  <svg
                    fill="#25D366"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 inline mr-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/intent/tweet" target="_blank">
                  <svg
                    fill="#1DA1F2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 inline mr-4"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&display=popup&ref=plugin&src=share_button"
                  target="_blank"
                >
                  <svg
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 inline mr-4"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {name}
            </h1>
          </div>
          <div className="mt-12 flex flex-col justify-center border-b">
            <p className="mb-12 text-gray-600 text-center font-light lg:px-16">
                        </p>
          </div>
          <div className="mt-12 flex flex-col justify-center border-b">
            <span className="block text-2xl font-medium text-gray-700">
              Activity Graph
            </span>
            <ActivityGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;

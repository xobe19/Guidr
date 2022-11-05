// what is your under grad course
// specialization
// what are you skilled at
// choose interested in - 1
// choose more that you may be interested in

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pills from "../components/Pills";

import { MultiStepForm, Step } from "react-multi-form";
const survey = () => {
  const api_url = "https://fierce-chamber-30988.herokuapp.com";
  const router = useRouter();
  let [ugOptions, setUgOptions] = useState([]);
  let [specOptions, setSpecOptions] = useState([]);
  let [skillsOptions, setSkillsOptions] = useState([]);
  let [interestsOptions1, setInterestsOptions1] = useState([]);
  let [interestsOptions2, setInterestsOptions2] = useState([]);
  const fetchData = async () => {
    let ugOpt = await fetch(`${api_url}/getUGOptions`);
    ugOpt = await ugOpt.json();
    let specOpt = await fetch(`${api_url}/getSpecOptions`);
    specOpt = await specOpt.json();
    let skillsOpt = await fetch(`${api_url}/getSkillsOptions`);
    skillsOpt = await skillsOpt.json();
    let interestsOpt = await fetch(`${api_url}/getInterestsOptions`);
    interestsOpt = await interestsOpt.json();
    ugOpt = ugOpt["options"];
    ugOpt = ugOpt.map((ele, idx) => {
      return {
        text: ele,
        id: idx,
        pillColor: "lightgrey",
        selected: false,
        selectedPillColor: "blue",
        textColor: "black",
      };
    });
    specOpt = specOpt["options"];
    specOpt = specOpt.map((ele, idx) => {
      return {
        text: ele,
        id: idx,
        pillColor: "lightgrey",
        selected: false,
        selectedPillColor: "blue",
        textColor: "black",
      };
    });
    skillsOpt = skillsOpt["options"];
    skillsOpt = skillsOpt.map((ele, idx) => {
      return {
        text: ele,
        id: idx,
        pillColor: "lightgrey",
        selected: false,
        selectedPillColor: "blue",
        textColor: "black",
      };
    });
    interestsOpt = interestsOpt["options"];
    let interestsOpt1 = [
      "Web Design",
      "Blockchain",
      "Teaching",
      "Medicine",
      "Machine Learning",
      "Game industry",
      "Cloud computing",
      "Human Resource",
    ];
    let interestsOpt2 = interestsOpt.filter(
      (ele) => !interestsOpt1.includes(ele)
    );
    interestsOpt2 = interestsOpt2.filter((ele) => {
      return ele.includes(",") == false && ele.includes(";") == false;
    });
    interestsOpt1 = interestsOpt1.map((ele, idx) => {
      return {
        text: ele,
        id: idx,
        pillColor: "lightgrey",
        selected: false,
        selectedPillColor: "blue",
        textColor: "black",
      };
    });
    interestsOpt2 = interestsOpt2.map((ele, idx) => {
      return {
        text: ele,
        id: idx,
        pillColor: "lightgrey",
        selected: false,
        selectedPillColor: "blue",
        textColor: "black",
      };
    });

    setUgOptions(ugOpt);
    setSpecOptions(specOpt);
    setSkillsOptions(skillsOpt);
    setInterestsOptions1(interestsOpt1);
    setInterestsOptions2(interestsOpt2);
    setIsLoading(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  let [currStep, setCurrStep] = useState(1);
  return (
    <div className="">
      <Navbar />
      <div className="m-16">
        <MultiStepForm activeStep={currStep}>
          <Step key="ug">
            <span className="font-bold text-3xl inline-block mb-8">
              What is your education?
            </span>
            <div>
              {isLoading ? (
                <>
                  <Image width={150} height={150} src="/num77.gif" />
                  <span>Loading, please wait...</span>
                </>
              ) : ugOptions.length == 0 ? (
                <></>
              ) : (
                <Pills
                  itemList={ugOptions}
                  selectedPill={(item) => {
                    let clonedArray = JSON.parse(JSON.stringify(ugOptions));
                    if (true) {
                      for (let i = 0; i < clonedArray.length; i++) {
                        clonedArray[i].selected = false;
                      }
                    }
                    for (let i = 0; i < clonedArray.length; i++) {
                      if (clonedArray[i]["text"] == item["text"]) {
                        clonedArray[i].selected = !clonedArray[i].selected;
                      }
                    }
                    setUgOptions(clonedArray);
                  }}
                  multiSelect={false}
                />
              )}
              <div className="mt-8">
                <button
                  className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
                  onClick={() => {
                    setCurrStep(currStep + 1);
                  }}
                >
                  Next ➜
                </button>
              </div>
            </div>
          </Step>
          <Step key="spec">
            <span className="font-bold text-3xl inline-block mb-8">
              Select your specialization
            </span>
            <div>
              {specOptions.length == 0 ? (
                <></>
              ) : (
                <Pills
                  itemList={specOptions}
                  selectedPill={(item) => {
                    let clonedArray = JSON.parse(JSON.stringify(specOptions));
                    if (true) {
                      for (let i = 0; i < clonedArray.length; i++) {
                        clonedArray[i].selected = false;
                      }
                    }
                    for (let i = 0; i < clonedArray.length; i++) {
                      if (clonedArray[i]["text"] == item["text"]) {
                        clonedArray[i].selected = !clonedArray[i].selected;
                      }
                    }
                    setSpecOptions(clonedArray);
                  }}
                />
              )}
              <div className="mt-5">
                <button
                  className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
                  onClick={() => {
                    setCurrStep(currStep + 1);
                  }}
                >
                  Next ➜
                </button>
              </div>
            </div>
          </Step>
          <Step key="skills">
            <span className="font-bold text-3xl inline-block mb-8">
              What are you skilled at?
            </span>{" "}
            <div>
              {skillsOptions.length == 0 ? (
                <></>
              ) : (
                <Pills
                  itemList={skillsOptions}
                  selectedPill={(item) => {
                    let clonedArray = JSON.parse(JSON.stringify(skillsOptions));
                    if (false) {
                      for (let i = 0; i < clonedArray.length; i++) {
                        clonedArray[i].selected = false;
                      }
                    }
                    for (let i = 0; i < clonedArray.length; i++) {
                      if (clonedArray[i]["text"] == item["text"]) {
                        clonedArray[i].selected = !clonedArray[i].selected;
                      }
                    }
                    setSkillsOptions(clonedArray);
                  }}
                  multiSelect={true}
                />
              )}
              <div className="mt-5">
                <button
                  className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
                  onClick={() => {
                    setCurrStep(currStep + 1);
                  }}
                >
                  Next ➜
                </button>
              </div>
            </div>
          </Step>
          <Step key="interests">
            <span className="font-bold text-3xl inline-block mb-8">
              Select the domain you are interested in
            </span>
            <div>
              {interestsOptions1.length == 0 ? (
                <></>
              ) : (
                <Pills
                  itemList={interestsOptions1}
                  selectedPill={(item) => {
                    let clonedArray = JSON.parse(
                      JSON.stringify(interestsOptions1)
                    );
                    if (false) {
                      for (let i = 0; i < clonedArray.length; i++) {
                        clonedArray[i].selected = false;
                      }
                    }
                    for (let i = 0; i < clonedArray.length; i++) {
                      if (clonedArray[i]["text"] == item["text"]) {
                        clonedArray[i].selected = !clonedArray[i].selected;
                      }
                    }
                    setInterestsOptions1(clonedArray);
                  }}
                  multiSelect={true}
                />
              )}
              <div className="mt-5">
                <button
                  className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
                  onClick={() => {
                    setCurrStep(currStep + 1);
                  }}
                >
                  Next ➜
                </button>
              </div>
            </div>
          </Step>
          <Step key="interests2">
            <span className="font-bold text-3xl inline-block mb-8">
              In what fields are you most likely to work?
            </span>
            <div>
              {interestsOptions2.length == 0 ? (
                <></>
              ) : (
                <Pills
                  itemList={interestsOptions2}
                  selectedPill={(item) => {
                    let clonedArray = JSON.parse(
                      JSON.stringify(interestsOptions2)
                    );
                    if (false) {
                      for (let i = 0; i < clonedArray.length; i++) {
                        clonedArray[i].selected = false;
                      }
                    }
                    for (let i = 0; i < clonedArray.length; i++) {
                      if (clonedArray[i]["text"] == item["text"]) {
                        clonedArray[i].selected = !clonedArray[i].selected;
                      }
                    }
                    setInterestsOptions2(clonedArray);
                  }}
                  multiSelect={true}
                />
              )}
              <div className="mt-5">
                <button
                  className="inline-block bg-indigo-600 border border-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-700 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl rounded-md select-none text-white font-medium"
                  onClick={async () => {
                    let ugSelected = ugOptions.filter((ele) => ele.selected);
                    let specSelected = specOptions.filter(
                      (ele) => ele.selected
                    );
                    let skillsSelected =
                      skillsOptions
                        .filter((ele) => ele.selected)
                        .map((ele) => ele.text)
                        .join(",") + ",";
                    let interestsOpt1 =
                      interestsOptions1
                        .filter((ele) => ele.selected)
                        .map((ele) => ele.text)
                        .join(",") + ",";
                    let interestsOpt2 =
                      interestsOptions2
                        .filter((ele) => ele.selected)
                        .map((ele) => ele.text)
                        .join(",") + ",";
                    let recommendedJobs = await fetch(
                      `https://fierce-chamber-30988.herokuapp.com/getRecommendations?selected_ug=${
                        ugSelected[0].text
                      }&selected_Specialization=${
                        specSelected[0].text
                      }&skills_array=${skillsSelected}&interests_array=${
                        interestsOpt1 + interestsOpt2
                      }`
                    );
                    recommendedJobs = await recommendedJobs.json();
                    recommendedJobs = recommendedJobs["recommendations"][0];
                    let finString = "";
                    for (let key in recommendedJobs) {
                      finString += recommendedJobs[key] + ",";
                    }
                    finString += ",";
                    router.push(`/recommendations?job=${finString}`);
                    // console.log(
                    //   ugOptions,
                    //   skillsOptions,
                    //   specOptions,
                    //   interestsOptions1,
                    //   interestsOptions2
                    // );
                  }}
                >
                  Submit ➜
                </button>
              </div>
            </div>
          </Step>
        </MultiStepForm>
      </div>
    </div>
  );
};
export default survey;

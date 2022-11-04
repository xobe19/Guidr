import React, { Component, useEffect, useState } from "react";
import Pills from "../components/Pills";

import { MultiStepForm, Step } from "react-multi-form";
const survey = () => {
  const api_url = "https://fierce-chamber-30988.herokuapp.com";

  let [ugOptions, setUgOptions] = useState([]);
  let [specOptions, setSpecOptions] = useState([]);
  let [skillsOptions, setSkillsOptions] = useState([]);
  let [interestsOptions, setInterestsOptions] = useState([]);

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
    console.log(ugOpt);
    setUgOptions(ugOpt);
    setSpecOptions(specOpt["options"]);
    setSkillsOptions(skillsOpt["options"]);
    setInterestsOptions(interestsOpt["options"]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let [currStep, setCurrStep] = useState(1);
  return (
    <>
      <MultiStepForm activeStep={currStep}>
        <Step key="name">name step</Step>
        {ugOptions.length == 0 ? (
          <></>
        ) : (
          <Pills
            itemLst={ugOptions}
            selectedPill={(item) => console.log(item)}
          />
        )}
        <Step key="ug"> ug step </Step>

        <Step key="spec"> spec </Step>
        <Step key="skills"> 4 </Step>
        <Step key="interests"> 5 </Step>
      </MultiStepForm>
    </>
  );
};
export default survey;

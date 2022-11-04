import React, { Component, useState } from "react";
import Pills from "../components/Pills";

import { MultiStepForm, Step } from "react-multi-form";
const survey = () => {
  const data = [
    {
      text: "B.tech",
      id: "1",
      pillColor: "yellow",
      selected: false,
      selectedPillColor: "blue",
      textColor: "white",
    },
    {
      text: "Milk",
      id: "2",
      pillColor: "blue",
      selected: false,
      selectedPillColor: "yellow",
      textColor: "white",
    },
    {
      text: "Sunday",
      id: "3",
      pillColor: "orange",
      selected: false,
      selectedPillColor: "white",
      textColor: "grey",
    },
    {
      text: "The brightest star",
      id: "4",
      pillColor: "white",
      selected: false,
      selectedPillColor: "blue",
    },
    {
      text: "Javascript",
      id: "5",
      pillColor: "red",
      selected: false,
      selectedPillColor: "blue",
      textColor: "white",
    },
  ];

  let [currStep, setCurrStep] = useState(1);
  return (
    <>
      <MultiStepForm activeStep={currStep}>
        <Step key="name">name step</Step>
        <Pills itemList={data} selectedPill={(item) => console.log(item)} />

        <Step key="ug"> ug step </Step>

        <Step key="spec"> spec </Step>
        <Step key="skills"> 4 </Step>
        <Step key="interests"> 5 </Step>
      </MultiStepForm>
    </>
  );
};
export default survey;

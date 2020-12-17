import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegistrationForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setData] = useState({});
  useEffect(() => {
    if (currentStep === formData.length - 1) onSubmit(collectedData);
  });
  const formData = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} />,
    <DeliveryData onSubmit={collectData} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  function collectData(data) {
    setData({ ...collectedData, ...data });
    nextStage();
  }

  function nextStage() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formData[currentStep]}
    </>
  );
}

export default RegistrationForm;

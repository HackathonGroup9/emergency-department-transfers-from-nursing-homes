import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router";

export const PatientHomePage = () => {
  let data = useLocation();
  let patientId = data.state.patient;
  console.log(patientId);

  return (
    <div>
      PatientHomePage
      <Button href="/avatarpage">Change in patient condition</Button>
      <Button>Abnormal Lab Test (patient is stable)</Button>
    </div>
  );
};

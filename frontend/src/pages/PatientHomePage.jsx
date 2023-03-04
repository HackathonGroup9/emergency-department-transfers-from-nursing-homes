import React from "react";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router";
import Page from "../components/page/Page";

export const PatientHomePage = () => {
  let data = useLocation();
  let patientId = data.state.patient;
  console.log(patientId);

  return (
    <Page>
      PatientHomePage
      <Button href="/avatarpage">Change in patient condition</Button>
      <Button>Abnormal Lab Test (patient is stable)</Button>
    </Page>
  );
};

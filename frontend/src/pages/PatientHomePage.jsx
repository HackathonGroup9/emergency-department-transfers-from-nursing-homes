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
    <h1>Patient info</h1>
    <p>Smith, John</p>
    <p>DOB 1/1/1923</p>
    <p>Age: 100</p>
    <p>MRN: 000545</p>
    <p>MD: Dr. Apple</p>
      <Button class="massive ui red button" href="/avatarpage">Change in patient condition</Button>
      <Button class="massive ui yellow button">Abnormal Lab Test (patient is stable)</Button>
    </Page>
  );
};

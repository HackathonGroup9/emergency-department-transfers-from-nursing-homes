import React from "react";
import { useLocation } from "react-router";
import { Button } from "semantic-ui-react";
import Page from "../components/page/Page";
import Patient from "../components/Patient";

export const PatientHomePage = () => {
  let data = useLocation();
  let patientId = data.state.patient;
  console.log(patientId);

  return (
    <Page>
      <Patient></Patient>
      <Button size="massive" color="red" href="/avatarpage">
        Change in patient condition
      </Button>
      <Button size="massive" color="yellow">
        Abnormal Lab Test (patient is stable)
      </Button>
    </Page>
  );
};

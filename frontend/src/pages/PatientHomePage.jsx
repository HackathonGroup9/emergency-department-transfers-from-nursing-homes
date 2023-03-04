import React from "react";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router";
import Page from "../components/page/Page";
import Patient from "../components/Patient";

export const PatientHomePage = () => {
  let data = useLocation();
  let patientId = data.state.patient;
  console.log(patientId);

  return (
    <Page>
      <Patient></Patient>
      <Button
        class="massive ui red button"
        href="/avatarpage"
      >
        Change in patient condition
      </Button>
      <Button class="massive ui yellow button">
        Abnormal Lab Test (patient is stable)
      </Button>
    </Page>
  );
};

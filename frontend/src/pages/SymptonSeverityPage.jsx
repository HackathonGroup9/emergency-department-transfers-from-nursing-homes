import React from "react";
import { Button } from "semantic-ui-react";
import Page from "../components/page/Page";
import Patient from "../components/Patient";

function SymptonSeverityPage() {
  return (
    <Page>
      <div class="two wide column">
        <Patient></Patient>
      </div>
      <div class="buttons" style={{ display: "flex" }}>
        <Button
          color="red"
          size="massive"
          style={{ margin: 5 }}
          onClick={() =>
            alert(
              "CALL 911 \n\n Call Physician \n Gather the following info before calling:\n \n Situation \n Background \n Assessment \n Recommendation"
            )
          }
        >
          Acute episode with wheezing, dyspnea, or respiratory distress
        </Button>
        <Button href="/pcb" color="yellow" size="massive" style={{ margin: 5 }}>
          Self limited episode, more extensive or less responsive to treatment
          than usual
        </Button>
      </div>
    </Page>
  );
}

export default SymptonSeverityPage;

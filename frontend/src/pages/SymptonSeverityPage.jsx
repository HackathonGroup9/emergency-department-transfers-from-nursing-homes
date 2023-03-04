import React from "react";
import { Button } from "semantic-ui-react";
import Patient from "../components/Patient";

function SymptonSeverityPage() {
  return (
    <div>
      <div class="two wide column">
        <Patient></Patient>
      </div>
      <div class="two wide column">
        <button class="massive red ui button" style={{margin: 5}}>
          Acute episode with wheezing, dyspnea, or respiratory distress
        </button>
        <button
          href="/pcb"
          class="massive yellow ui button" style={{margin: 5}}
        >
          Self limited episode, more extensive or less responsive to treatment
          than usual
        </button>
      </div>
    </div>
  );
}

export default SymptonSeverityPage;

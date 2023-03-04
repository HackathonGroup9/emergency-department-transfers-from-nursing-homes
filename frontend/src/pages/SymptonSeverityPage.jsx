import React from "react";
import { Button } from "semantic-ui-react";

function SymptonSeverityPage() {
  return (
    <div>
      <Button>
        Acute episode with wheezing, dyspnea, or respiratory distress
      </Button>
      <Button href="/pcb">
        Self limited episode, more extensive or less responsive to treatment
        than usual
      </Button>
    </div>
  );
}

export default SymptonSeverityPage;

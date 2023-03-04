import React from "react";
import { Button } from "semantic-ui-react";

function Avatar() {
  return (
    <div >
      <Button class="ui toggle button" style={{margin: 5}}>Neurological</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Respiratory</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Cardiovascular</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Gastrointestinal</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Genitourinary</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Integumentory</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Musculoskeletal</Button>
      <Button class="ui toggle button" style={{margin: 5}}>ENT</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Labs and Diagnostics</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Vitals</Button>
      <Button class="ui toggle button" style={{margin: 5}}>Misc</Button>
    </div>
  );
}

export default Avatar;

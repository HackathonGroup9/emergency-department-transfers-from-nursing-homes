import React from "react";
import { Button } from "semantic-ui-react";
import Avatar from "../components/Avatar";
import SignsSymptoms from "../components/SignsSymptoms";
import Page from "../components/page/Page";
import Patient from "../components/Patient";
// import "../components/Button.css"
function AvatarPage() {
  return (
    <Page>
      <div class="ui grid" style={{alignItems: "stretch", width: 1000}}>
        <div style={{marginLeft: 30}}><Patient></Patient></div>
        <div class="three wide column">
          <Avatar></Avatar>
        </div>
        <div class="three wide column" style={{marginLeft: 30}}>
          <SignsSymptoms></SignsSymptoms>
          <Button href="/symptonseveritypage" style={{margin: 5}}>Next</Button>
        </div>
      </div>
    </Page>
  );
}

export default AvatarPage;

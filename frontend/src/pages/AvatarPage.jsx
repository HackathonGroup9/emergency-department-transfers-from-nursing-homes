import React from "react";
import { Button } from "semantic-ui-react";
import Avatar from "../components/Avatar";
import SignsSymptoms from "../components/SignsSymptoms";
import Page from "../components/page/Page";
// import "../components/Button.css"
function AvatarPage() {
  return (
    <Page>
      <div class="ui grid">
        <div class="two wide column">
          <Avatar></Avatar>
        </div>
        <div class="two wide column" style={{marginLeft: 30}}>
          <SignsSymptoms></SignsSymptoms>
          <Button href="/symptonseveritypage">Next</Button>
        </div>
      </div>
    </Page>
  );
}

export default AvatarPage;

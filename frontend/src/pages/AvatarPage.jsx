import React from "react";
import { Button } from "semantic-ui-react";
import Avatar from "../components/Avatar";
import SignsSymptoms from "../components/SignsSymptoms";
import Page from "../components/page/Page";
function AvatarPage() {
  return (
      <Page>
        <Avatar></Avatar>
        <SignsSymptoms></SignsSymptoms>
        <Button href="/symptonseveritypage">Next</Button>
      </Page>
  );
}

export default AvatarPage;

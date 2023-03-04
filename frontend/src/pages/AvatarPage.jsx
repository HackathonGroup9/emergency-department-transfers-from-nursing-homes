import React from "react";
import { Button } from "semantic-ui-react";
import Avatar from "../components/Avatar";
import SignsSymptoms from "../components/SignsSymptoms";

function AvatarPage() {
  return (
      <page>
        <Avatar></Avatar>
        <SignsSymptoms></SignsSymptoms>
        <Button href="/symptonseveritypage">Next</Button>
      </page>
  );
}

export default AvatarPage;

import React from "react";
import { Button, List, Card } from "semantic-ui-react";
import Page from "../components/page/Page";
import Patient from "../components/Patient";

function PhysCommB() {
  return (
    <Page>
      <div style={{ display: "flex", margin: 10 }}>
        <div style={{ marginLeft: 30 }}>
          <Patient></Patient>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Card style={{ width: "500px" }}>
            <Button color="blue" disabled>
              Physician: Dr. Apple
            </Button>
            <List>
              <List.Item>
                <List.Icon name="unseen" />
                <List.Content>
                  March 1, 2023: Pt has new persistent cough causing discomfort
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="acknowledged" />
                <List.Content>
                  <s>February 28, 2023: Pt had a fall with no injury</s>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="cancelled" />
                <List.Content color="red">
                  <s>
                    February 25, 2023: Pt has recent gait changes without other
                    symptoms or findings
                  </s>
                </List.Content>
              </List.Item>
            </List>
          </Card>
          <Button href="/">Return to patient-specific homepage</Button>
        </div>
      </div>
    </Page>
  );
}

export default PhysCommB;

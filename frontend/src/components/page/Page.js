import { Container } from "semantic-ui-react";
import "./Page.css";

function Page(props) {
  return (
    <div className="Page">
      <Container>{props.children}</Container>
    </div>
  );
}

export default Page;

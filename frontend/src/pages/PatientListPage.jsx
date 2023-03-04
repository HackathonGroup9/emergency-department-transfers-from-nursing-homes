import Page from "../components/page/Page";
import PatientList from "../components/patientlist/PatientList";

function PatientListPage(props) {
  return (
    <Page>
      <PatientList onSelect={props.onSelect} />
    </Page>
  );
}

export default PatientListPage;

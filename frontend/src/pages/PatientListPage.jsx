import Page from "../components/page/Page";
import PatientList from "../components/patientlist/PatientList";

function PatientListPage() {
  return (
    <Page>
      <h1>Please select the patient from the EHR database</h1>
      <PatientList />
    </Page>
  );
}

export default PatientListPage;

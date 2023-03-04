import Page from "../components/page/Page";
import PatientList from "../components/patientlist/PatientList";

function PatientListPage(props) {
    const onSelectHandler = (patient) => {
        props.onSelect(patient);
    };
  return (
    <Page>
      <h1>Please select the patient from the EHR database</h1>
      <PatientList onSelect={onSelectHandler} />
    </Page>
  );
}

export default PatientListPage;

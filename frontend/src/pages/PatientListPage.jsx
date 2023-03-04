import Page from "../components/page/Page";
import PatientList from "../components/patientlist/PatientList";

function PatientListPage(props) {
    const onSelectHandler = (patient) => {
        props.onSelect(patient);
    };
  return (
    <Page>
      <PatientList onSelect={onSelectHandler} />
    </Page>
  );
}

export default PatientListPage;

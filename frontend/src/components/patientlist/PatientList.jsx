import { Button, Dropdown } from "semantic-ui-react";
import "./PatientList.css";

function PatientList() {
  const patients = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
    },
  ];

  let selectedPatient = "";

  const getPatient = (e, value) => {
    console.log(value);
    this.selectedPatient = value;
  };

  return (
    <div className="PatientList">
      <Dropdown
        placeholder="Select Patient"
        selection
        options={patients}
        onChange={(event, { value }) => getPatient(event, value)}
      />
      <Button href="/patienthomepage" primary>
        Next
      </Button>
    </div>
  );
}

export default PatientList;

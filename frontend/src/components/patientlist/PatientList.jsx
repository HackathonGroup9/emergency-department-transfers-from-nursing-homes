import { useState } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PatientList.css";

function PatientList() {
  const [patient, setPatient] = useState("");

  const patients = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "1234",
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "4321",
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "4444",
    },
    {
      key: "Christian",
      text: "Christian",
      value: "2222",
    },
    {
      key: "Matt",
      text: "Matt",
      value: "1111",
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "9999",
    },
  ];

  const getPatient = (e, value) => {
    console.log(value);
    setPatient(value);
  };

  return (
    <div className="PatientList">
      <Dropdown
        placeholder="Select Patient"
        selection
        options={patients}
        onChange={(event, { value }) => getPatient(event, value)}
      />
      <Link
        to={`/patienthomepage/${patient}`}
        state={{
          patient: patient,
        }}
      >
        <Button primary>Next</Button>
      </Link>
    </div>
  );
}

export default PatientList;

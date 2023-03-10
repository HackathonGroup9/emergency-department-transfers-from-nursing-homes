import { Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PatientList.css";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function PatientList(props) {
  const [patient, setPatient] = useState("");

  const [patientList, setPatientList] = useState([]);

  const fetchPatients = useCallback(async () => {
    await axios
        .get("http://localhost:8080/api/patients")
        .then((response) => {
          setPatientList(response.data);
        })
        .catch((error) => console.log(error.response.data));
  }, []);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const getPatient = (e, value) => {
    console.log(value);
    setPatient(value);

    for (let patient of patientList) {
        if (patient.phn === value)
            props.onSelect(patient)
    }
  };

  return (
      <div className="PatientList">
        <Dropdown
            placeholder="Select Patient"
            selection
            options={patientList.map((patient) => {
              return {
                key: patient.phn,
                text: patient.firstName + " " + patient.lastName,
                value: patient.phn,
              };
            })}
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

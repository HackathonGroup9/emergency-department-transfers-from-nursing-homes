
import { Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./PatientList.css";



function PatientList() {
  const [patient, setPatient] = useState("");
 
  const [patientList, setPatientList] = useState([]);

  const fetchPatients = useCallback(async () => {
    await axios
      .get("http://localhost:8080/api/patients")
      .then((response) => {
        setPatientList(response.data);
      })
      .catch((error) =>
      console.log(error.response.data));
  },[])
  useEffect(()=>{
    fetchPatients();
  }, [fetchPatients])

  console.log(patientList)

  // let selectedPatient = "";

  const getPatient = (e, value) => {
    console.log(value);
    setPatient(value);
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
          value: patient.phn
        }
      }
      )
      }
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

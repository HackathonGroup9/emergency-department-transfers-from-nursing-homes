import React from "react";

function Patient(props) {
  return (
    <div>
      <h1>Patient info</h1>
      <p>{props.patient.lastName}, {props.patient.firstName}</p>
      <p>DOB 1/1/1923</p>
      <p>Age: 100</p>
      <p>MRN: {props.patient.phn}</p>
      <p>MD: Dr. Apple</p>
    </div>
  );
}

export default Patient;

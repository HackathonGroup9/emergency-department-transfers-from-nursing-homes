import React from "react";

function Patient(props) {
    console.log(props.patient)
  return (
    <div>
      <p>{}</p>
      <h1>Patient info</h1>
      <p>Smith, John</p>
      <p>DOB 1/1/1923</p>
      <p>Age: 100</p>
      <p>MRN: 000545</p>
      <p>MD: Dr. Apple</p>
    </div>
  );
}

export default Patient;

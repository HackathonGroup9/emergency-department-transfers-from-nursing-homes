
import Axios from "axios";
import Patient from "../classes/Patient";

export const getpatients= ()=>{
    Axios.get("http://localhost:8080/api/patients").then(
      (response) =>{
        // console.log(response.data.firstName + response.data.lastName);
        return response.data;
      }
    );
  };
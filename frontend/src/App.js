import "./App.css";
import ReactDOM from "react-dom/client";
import PatientListPage from "./pages/PatientListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PatientHomePage } from "./pages/PatientHomePage";
// import { Avatar } from "@mui/material";/
import AvatarPage from "./pages/AvatarPage";
import StaticButtons from "./components/StaticButtons";
import SymptonSeverityPage from "./pages/SymptonSeverityPage";
import PhysCommB from "./pages/PhysCommB";
import Axios from 'axios'
import {useState, useEffect} from "react";

export default function App() {

  // const [Patients, setPatients] = useState("");

  // const getpatients= ()=>{
  //   Axios.get("http://localhost:8080/api/patients").then(
  //     (response) =>{
  //       console.log(response);
  //       setPatients(response.data[0].firstName + " "+ response.data[0].lastName);
  //     }
  //   );
  // };



  return (
    <div className="App" >

      <BrowserRouter>
        <StaticButtons></StaticButtons>
        <Routes>
          <Route path="/" element={<PatientListPage />} />
          <Route path="/avatarpage" element={<AvatarPage />} />
          <Route path="/patienthomepage/:id" element={<PatientHomePage />} />
          <Route
            path="/symptonseveritypage"
            element={<SymptonSeverityPage />}
          />
          <Route
            path="/pcb"
            element={<PhysCommB />}
          />
        </Routes>

      </BrowserRouter>

      {/* <button onClick={getpatients}>get info</button>
      {Patients} */}
    </div>

    


    
  );

  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

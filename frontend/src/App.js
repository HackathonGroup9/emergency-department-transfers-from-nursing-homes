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
import {useState} from "react";

export default function App() {
  const [patient, setPatient] = useState(null);
  const patientHandler = (patient) => {
    setPatient(patient);
  };
  return (
    <div className="App" >

      <BrowserRouter>
        <StaticButtons></StaticButtons>
        <Routes>
          <Route path="/" element={<PatientListPage onSelect={patientHandler}/>} />
          <Route path="/avatarpage" element={<AvatarPage patient={patient}/>} />
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
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

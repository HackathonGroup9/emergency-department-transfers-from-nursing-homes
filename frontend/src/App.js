import "./App.css";
import ReactDOM from "react-dom/client";
import PatientListPage from "./pages/PatientListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PatientHomePage } from "./pages/PatientHomePage";
// import { Avatar } from "@mui/material";/
import AvatarPage from "./pages/AvatarPage";
import StaticButtons from "./components/StaticButtons";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PatientListPage />}
          />
          <Route
            path="/avatarpage"
            element={<AvatarPage />}
          />
          <Route
            path="/patienthomepage"
            element={<PatientHomePage />}
          />
        </Routes>

        <StaticButtons></StaticButtons>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

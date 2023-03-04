// import "./App.css";
// import PatientListPage from "./pages/PatientListPage";

import{BrowserRouter, Routes,Route} from "react-router-dom"
import { PatientHomePage } from "./pages/PatientHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/patienthomepage" element={<PatientHomePage/>}/>
        </Routes>
      </BrowserRouter>

      {/* <PatientListPage /> */}
    </div>
  );
}

export default App;

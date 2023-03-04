// import "./App.css";
// import PatientListPage from "./pages/PatientListPage";

import{BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element/>
        </Routes>
      </BrowserRouter>

      {/* <PatientListPage /> */}
    </div>
  );
}

export default App;

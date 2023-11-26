import DataPage from "./pages/DataPage";
import RegistrationPage from "./pages/RegistrationPage";
import AppNavBar from "./components/AppNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    
     <BrowserRouter>
     <AppNavBar />
     <Routes>
      <Route path="/" element={<DataPage />} />
      <Route path="/register" element={<RegistrationPage />} />
     </Routes>
     </BrowserRouter>
    
  );
};

export default App;
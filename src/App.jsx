import { BrowserRouter, Route, Routes } from "react-router-dom";
import Report from "./pages/Report";
import Landing from "./pages/Landing";
import Rehab from "./pages/Rehab";
import Map from "./pages/Map";
import AdminLogin from "./pages/AdminLogin";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/report" element={<Report />} />
          <Route path="/rehab" element={<Rehab />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

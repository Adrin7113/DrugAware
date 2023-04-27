import { BrowserRouter, Route, Routes } from "react-router-dom";
import Report from "./pages/Report";
import Landing from "./pages/Landing";
import Rehab from "./pages/Rehab";
import Map from "./pages/Map";
import AdminLogin from "./pages/AdminLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import History from "./pages/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/rehab" element={<Rehab />} />
          <Route path="/history" element={<History />} />
          <Route path="/map" element={<Map />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useNavigate } from "react-router-dom";

const Navbar = (state) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-20 border-2 border-black bg-white fixed bottom-0 left-0 flex items-center justify-between px-5">
      <a href="/report">
        <img
          onClick={() => {
            navigate("/report", { state: state });
          }}
          src="/addReport.png"
          alt="Add a new report"
        />
      </a>

      <img
        onClick={() => navigate("/rehab", { state: state })}
        src="/search.png"
        alt="Add a new report"
      />

      <img
        onClick={() => {
          navigate("/map", { state: state });
        }}
        src="/compass.png"
        alt="Add a new report"
      />

      <a href="/chat">
        <img src="/chat.png" alt="Add a new report" />
      </a>
    </div>
  );
};

export default Navbar;

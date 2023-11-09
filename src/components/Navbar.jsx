import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ state }) => {
  console.log(state);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-20 border-2 border-black bg-white fixed bottom-0 left-0 flex items-center justify-between px-5">
      <img
        onClick={() => {
          navigate("/report", { state: state });
        }}
        src="/addReport.png"
        alt="Add a new report"
      />

      <img
        onClick={() => navigate("/rehab", { state: state })}
        src="/search.png"
        alt="Add a new report"
      />
      <img
        onClick={() => navigate("/history", { state: state })}
        src="/history.png"
        alt="Add a new report"
      />
      {(state == "ADMIN" || state == "SUPER-ADMIN") && (
        <img
          onClick={() => {
            navigate("/map", { state: state });
          }}
          src="/compass.png"
          alt="Add a new report"
        />
      )}

      <a href="https://mediafiles.botpress.cloud/0bd83da3-81dd-4503-9d3b-002c13c261d4/webchat/bot.html">
        <img src="/chat.png" alt="Add a new report" />
      </a>
    </div>
  );
};

export default Navbar;

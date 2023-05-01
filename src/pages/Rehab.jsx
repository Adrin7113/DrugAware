import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Rehab = () => {
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {}, []);
  return (
    <>
      {state && (
        <div className="h-auto w-screen p-5 pb-24 relative">
          <div className="flex justify-between pb-16">
            <h1 className="robo text-3xl font-black w-1/2 text-[#BB0C0C]">
              Nearby Rehabilitation Centers
            </h1>
            <a href="/">
              <img src="/user.svg" alt="The Navigation Icon" />
            </a>
          </div>
          <div className="pt-2">
            <div className="h-32 w-full rounded-xl bg-[#F1E7E7] mb-5 flex items-center">
              <div className="w-2/3 pl-3">
                <h1>CARE Physiotherapy & Rehabilitation Center</h1>
                <h1>+91 98953 52086</h1>
              </div>
              <div className="w-1/3">
                <button
                  onClick={() => {
                    Swal.fire(
                      "Location",
                      `Avenue 9, Ponoth Ln, Kaloor, Ernakulam, Kerala 682017`,
                      "info"
                    );
                  }}
                  className=" bg-[#D9D9D9] rounded-lg p-2 text-xl robo"
                >
                  Location
                </button>
              </div>
            </div>
            <div className="h-32 w-full rounded-xl bg-[#F1E7E7] mb-5 flex items-center">
              <div className="w-2/3 pl-3">
                <h1>Healing Hands: Centre for Rehab</h1>
                <h1>0484 312 7365</h1>
              </div>
              <div className="w-1/3">
                <button
                  onClick={() => {
                    Swal.fire(
                      "Location",
                      `X8V8+C4W, National Highway 47, Kakkanad, Kakkanadu, Kerala 682028`,
                      "info"
                    );
                  }}
                  className=" bg-[#D9D9D9] rounded-lg p-2 text-xl robo"
                >
                  Location
                </button>
              </div>
            </div>
            <div className="h-32 w-full rounded-xl bg-[#F1E7E7] mb-5 flex items-center">
              <div className="w-2/3 pl-3">
                <h1>Move Ahead Rehab Center</h1>
                <h1>+91 81370 47727</h1>
              </div>
              <div className="w-1/3">
                <button
                  onClick={() => {
                    Swal.fire(
                      "Location",
                      `KCRWA-135, Club Rd, Giri Nagar, Kadavanthra, Kochi, Kerala 682020`,
                      "info"
                    );
                  }}
                  className=" bg-[#D9D9D9] rounded-lg p-2 text-xl robo"
                >
                  Location
                </button>
              </div>
            </div>
            <div className="h-32 w-full rounded-xl bg-[#F1E7E7] mb-5 flex items-center">
              <div className="w-2/3 pl-3">
                <h1>AWA REHAB INTERNATIONAL</h1>
                <h1>+91 75106 71452</h1>
              </div>
              <div className="w-1/3">
                <button
                  onClick={() => {
                    Swal.fire(
                      "Location",
                      `PBK Myna Rd, Vazhakkala, Kakkanad, Kerala 682021`,
                      "info"
                    );
                  }}
                  className=" bg-[#D9D9D9] rounded-lg p-2 text-xl robo"
                >
                  Location
                </button>
              </div>
            </div>
          </div>
          <Navbar state={state} />
        </div>
      )}
    </>
  );
};

export default Rehab;

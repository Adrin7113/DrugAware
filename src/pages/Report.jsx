import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Report = () => {
  const { state } = useLocation();
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    const location = document.getElementById("location");
    location.value =
      "Latitude: " +
      position.coords.latitude +
      "Longitude: " +
      position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
  }
  return (
    <>
      {console.log(state)}
      <div className="h-auto w-screen p-5 relative pb-16">
        <div className="flex justify-between pb-16">
          <h1 className="robo text-3xl font-black">New Report</h1>
          <img src="/user.svg" alt="The Navigation Icon" />
        </div>
        <h1 className="text-2xl robo pb-5">Location</h1>
        <button
          className="w-full bg-[#D9D9D9] rounded-2xl h-16 text-xl robo text-[#696969]"
          onClick={() => getLocation()}
        >
          Detect Automatically
        </button>
        <h1 className="robo text-center w-full text-lg py-4">Or</h1>
        <input
          id="location"
          type="text"
          className="w-full bg-[#D9D9D9] rounded-2xl h-16 text-xl robo placeholder-[#696969] text-[#696969] text-center"
          placeholder="Enter It Manually"
        />
        <h1 className="text-lg robo py-5">
          How many individuals were involved?
        </h1>
        <input
          type="number"
          className="w-6 h-12 bg-[#D9D9D9] border-2 border-black text-center placeholder-[#696969] text-[#696969]"
          placeholder="0"
        ></input>
        <h1 className="text-2xl robo pt-5">
          Description{" "}
          <span className="text-[#696969] text-lg robo">(Optional)</span>
          <textarea
            cols={25}
            rows={8}
            className="bg-[#D9D9D9] rounded-xl text-[#696969] p-5 my-2"
          ></textarea>
        </h1>
        <div className="w-full h-44 flex gap-2">
          <div className="h-full w-1/2 border-2 rounded-xl flex flex-col justify-center items-center">
            <img
              src="/camera.png"
              alt="Image of a camera"
              className="w-12 h-12"
            ></img>
            <h1 className="mt-2 robo text-lg">Take a photo</h1>
          </div>
          <div className="h-full w-1/2 border-2 rounded-xl flex flex-col justify-center items-center">
            <img
              src="/upload.png"
              alt="Image of a camera"
              className="w-12 h-12"
            ></img>
            <h1 className="mt-2 robo text-lg">Upload an image</h1>
          </div>
        </div>
        <div className="w-full h-24 flex justify-center">
          <button className="w-1/3 self-center h-12 bg-[#D9D9D9] text-[#696969] text-xl rounded-3xl">
            Submit
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Report;

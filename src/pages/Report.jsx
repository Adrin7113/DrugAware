import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { supabase } from "../js/supabaseClient";
import { useState } from "react";
import alphanumeric from "alphanumeric-id";
import Swal from "sweetalert2";

const Report = () => {
  const { state } = useLocation();
  const [submitting, setSubmitting] = useState("Submit");
  console.log(state);
  const userId = state;
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
  }
  const [file, setfile] = useState([]);
  const handleChange = (e) => {
    console.log(e);
    setfile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    setSubmitting("Submitting");
    const amount = document.getElementById("amount").value;
    const desc = document.getElementById("description").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const fileName = `${alphanumeric(6)}-${file.name}`;
    const { data, errorImg } = await supabase.storage
      .from("Images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (errorImg) {
      console.log(errorImg);
      setSubmitting("Error!");
      Swal.fire("Oh no!", `Submission Unsuccessful!`, "error");
    } else {
      var imgUrl = data.path;
    }
    const { error } = await supabase.from("Reports").insert({
      userId: userId,
      latitude: latitude,
      longitude: longitude,
      amount: amount,
      desc: desc,
      img: imgUrl,
    });
    if (error) {
      console.log(error);
      setSubmitting("Error!");
      Swal.fire("Oh no!", `Submission Unsuccessful!`, "error");
    } else {
      setSubmitting("Submitted!");
      Swal.fire("Nice", `Successfully Submitted!`, "success");
    }
  };
  return (
    <>
      {state && (
        <div className="h-auto w-screen p-5 relative pb-16">
          <div className="flex justify-between pb-16">
            <h1 className="robo text-3xl font-black text-[#BB0C0C]">
              New Report
            </h1>
            <a href="/">
              <img src="/user.svg" alt="The Navigation Icon" />
            </a>
          </div>
          <h1 className="text-2xl robo pb-5">Location</h1>
          <button
            className="w-full bg-[#F1E7E7] rounded-2xl h-16 text-xl robo text-[#696969]"
            onClick={() => getLocation()}
          >
            Detect Automatically
          </button>
          <h1 className="robo text-center w-full text-lg py-4">Or</h1>
          <h1 className="robo w-full text-lg">Enter It Manually</h1>
          <input
            id="latitude"
            type="text"
            className="w-full bg-[#F1E7E7] rounded-2xl h-16 text-xl robo placeholder-[#696969] text-[#696969] text-center mb-4"
            placeholder="Latitude"
          />
          <input
            id="longitude"
            type="text"
            className="w-full bg-[#F1E7E7] rounded-2xl h-16 text-xl robo placeholder-[#696969] text-[#696969] text-center"
            placeholder="Longitude"
          />
          <h1 className="text-lg robo py-5">
            How many individuals were involved?
          </h1>
          <input
            id="amount"
            type="number"
            className="w-6 h-12 bg-[#F1E7E7] border-2 border-black text-center placeholder-[#696969] text-[#696969]"
            placeholder="0"
          ></input>
          <h1 className="text-2xl robo pt-5">
            Description{" "}
            <span className="text-[#696969] text-lg robo">(Optional)</span>
            <textarea
              id="description"
              cols={23}
              rows={8}
              className="bg-[#F1E7E7] rounded-xl text-[#696969] p-5 my-2"
            ></textarea>
          </h1>
          <div className="w-full h-44 flex gap-2">
            <label
              htmlFor="Img"
              className="h-full w-full border-2 rounded-xl flex flex-col justify-center items-center"
            >
              <img
                src="/upload.png"
                alt="Image of a camera"
                className="w-12 h-12"
              ></img>
              <h1 className="mt-2 robo text-lg">Upload an image</h1>
            </label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="file"
              id="Img"
              name="image"
              className="hidden"
            />
          </div>
          <div className="w-full h-24 flex justify-center">
            <button
              onClick={() => handleSubmit()}
              className="w-2/3 self-center h-12 bg-[#F1E7E7] text-[#696969] text-xl rounded-3xl "
            >
              {submitting}
            </button>
          </div>
          <Navbar state={state} />
        </div>
      )}
    </>
  );
};

export default Report;

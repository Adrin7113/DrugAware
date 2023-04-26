import alphanumeric from "alphanumeric-id";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import { supabase } from "../js/supabaseClient";
import { useState } from "react";

const SignUp = () => {
  const [submitted, setSubmitted] = useState("Submit");
  const userid = alphanumeric(6);
  const sign = async () => {
    const phoneNum = document.getElementById("phone").value;
    const pass = document.getElementById("password");
    const hash = Base64.stringify(sha256(pass.value));
    const { error } = await supabase.from("Users").insert({
      userId: userid,
      phone: phoneNum,
      password: hash,
    });
    if (error) {
      console.log(error);
    } else {
      setSubmitted("Submitted");
    }
    const { errorRead } = await supabase.from("UserRead").insert({
      userId: userid,
      password: hash,
    });
    if (errorRead) {
      console.log(errorRead);
    }
  };
  return (
    <>
      <div className="h-screen w-screen p-5 flex flex-col justify-center gap-5 items-center">
        <div className="h-1/2 w-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl robo ">Hello,</h1>
          <h1 className="text-4xl robo text-[#A57878]">{`User ${userid}`}</h1>
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl px-5"
          />
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl px-5"
          />
          <button
            onClick={() => sign()}
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl"
          >
            {submitted}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;

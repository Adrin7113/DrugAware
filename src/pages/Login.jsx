import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import { supabase } from "../js/supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = async () => {
    const pass = document.getElementById("password");
    const hash = Base64.stringify(sha256(pass.value));
    const { data, error } = await supabase
      .from("UserRead")
      .select("*")
      .eq("password", hash);
    if (data) {
      navigate("/report", { state: data[0].userId });
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-screen w-screen p-5 flex flex-col justify-center gap-5 items-center">
        <div className="h-1/2 w-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl robo ">Welcome,</h1>
          <h1 className="text-4xl robo ">{`User`}</h1>
          <input
            type="text"
            id="password"
            placeholder="Please enter your password"
            className="h-16 w-full bg-[#F1E7E7] text-[#696969] rounded-xl text-xl px-5"
          />
          <button
            onClick={() => login()}
            className="h-16 w-full bg-[#F1E7E7] text-[#696969] rounded-xl text-xl"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

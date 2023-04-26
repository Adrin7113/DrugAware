import alphanumeric from "alphanumeric-id";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
const SignUp = () => {
  const signup = () => {
    const password = document.getElementById("password");
    const hash = Base64.stringify(sha256(password.value));
  };
  return (
    <div>
      <div className="h-screen w-screen p-5 flex flex-col justify-center gap-5 items-center">
        <div className="h-1/2 w-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl robo ">Welcome,</h1>
          <h1 className="text-4xl robo ">{`User ${alphanumeric(6)}`}</h1>
          <input
            type="text"
            id="phone"
            placeholder="Please enter a p"
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl px-5"
          />
          <input
            type="text"
            id="password"
            placeholder="Please enter a password"
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl px-5"
          />
          <button
            onClick={() => signup()}
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

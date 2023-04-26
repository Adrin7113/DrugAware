const Landing = () => {
  return (
    <div className="h-screen w-screen p-5 flex flex-col justify-center gap-5 items-center">
      <div className="h-1/2 w-full flex flex-col justify-center gap-5">
        <h1 className="text-4xl robo text-center font-bold">
          Welcome<span className="text-[#BB0C0C]">.</span>
        </h1>

        <a href="/signup">
          <button
            type="text"
            className="h-16 w-full bg-[#EDE7E7] text-[#696969] rounded-xl text-xl"
          >
            Signup
          </button>
        </a>
        <a href="/login">
          <button
            type="text"
            className="h-16 w-full bg-[#EDE7E7] text-[#696969] rounded-xl text-xl"
          >
            Login
          </button>
        </a>
        <a href="/adminLogin">
          <button
            type="text"
            className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl"
          >
            Login As Admin
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;

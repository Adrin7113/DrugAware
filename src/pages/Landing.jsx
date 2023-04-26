const Landing = () => {
  return (
    <div className="h-screen w-screen p-5 flex flex-col justify-center gap-5 items-center">
      <div className="h-1/2 w-full flex flex-col justify-center gap-5">
        <h1 className="text-4xl robo ">Welcome</h1>
        <button
          type="text"
          className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl"
        >
          Signup
        </button>
        <button
          type="text"
          className="h-16 w-full bg-[#D9D9D9] text-[#696969] rounded-xl text-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Landing;

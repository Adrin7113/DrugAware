import Navbar from "../components/Navbar";

const Rehab = () => {
  return (
    <>
      <div className="h-auto w-screen p-5 pb-24 relative">
        <div className="flex justify-between pb-16">
          <h1 className="robo text-3xl font-black w-1/2">
            Nearby Rehabilitation Centers
          </h1>
          <img src="/user.svg" alt="The Navigation Icon" />
        </div>
        <div className="pt-2">
          <div className="h-32 w-full rounded-xl bg-[#D9D9D9] mb-5"></div>
          <div className="h-32 w-full rounded-xl bg-[#D9D9D9] mb-5"></div>
          <div className="h-32 w-full rounded-xl bg-[#D9D9D9] mb-5"></div>
          <div className="h-32 w-full rounded-xl bg-[#D9D9D9] mb-5"></div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Rehab;

import Navbar from "../components/Navbar";

const Map = () => {
  return (
    <>
      <div className="h-auto w-screen p-5 pb-24 relative">
        <div className="flex justify-between pb-16">
          <h1 className="robo text-3xl font-black w-1/2">Map</h1>
          <img src="/user.svg" alt="The Navigation Icon" />
        </div>
        <button className="bg-[#D9D9D9] text-[#696969] w-full h-12 rounded-xl text-xl robo">
          Search Locations
        </button>
        <img
          src="/mapTemp.png"
          alt="This will be converted to a live map"
          className="w-full pt-5"
        />
        <Navbar />
      </div>
    </>
  );
};

export default Map;

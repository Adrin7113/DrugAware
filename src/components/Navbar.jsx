const Navbar = () => {
  return (
    <div className="w-screen h-20 border-2 border-black bg-white fixed bottom-0 left-0 flex items-center justify-between px-5">
      <a href="/report">
        <img src="/addReport.png" alt="Add a new report" />
      </a>
      <a href="/rehab">
        <img src="/search.png" alt="Add a new report" />
      </a>
      <a href="/map">
        <img src="/compass.png" alt="Add a new report" />
      </a>
      <a href="/chat">
        <img src="/chat.png" alt="Add a new report" />
      </a>
    </div>
  );
};

export default Navbar;

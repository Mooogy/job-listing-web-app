const Navbar = () => {
  return (
    <div className="h-[4vw] flex justify-center w-screen bg-white text-black drop-shadow select-none">
      <div className="flex w-3/4 justify-between items-center px-[2vw]">
        <span className="font-calistoga text-[1.75vw]">Listings.com</span>
        <div className="flex justify-between w-1/6 font-cantarell text-[1vw] h-full items-center">
          <div className="h-full flex items-center hover:border-b-2 border-accent hover:cursor-pointer">
            <p>Find Jobs</p>
          </div>
          <div className="h-full flex items-center hover:border-b-2 border-accent hover:cursor-pointer">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

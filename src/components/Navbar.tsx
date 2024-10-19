const Navbar = () => {
  return (
    <div className="h-[6vh] flex justify-center w-screen bg-white">
      <div className="flex w-3/4 justify-between items-center px-[2vw]">
        <div>Listings.com</div>
        <div className="flex justify-between w-1/6">
          <p>Find Jobs</p>
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

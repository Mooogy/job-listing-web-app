const Hero = () => {
  return (
    <div className="w-screen h-screen flex-col items-center flex bg-gradient-to-b from-[#D1C0FF] justify-center">
      <div className="w-[60vw] flex-col items-center flex gap-[6vw] select-none text-black">
        <p className="font-fjalla text-[4.5vw]">Jobs Made Easy.</p>
        <p className="font-cantarell text-[2vw] text-center">
          Quick and intuitive,{" "}
          <span className="underline font-calistoga">Listings.com</span> gives
          job seekers the power to find work they{" "}
          <span className="underline font-calistoga">love</span>.
        </p>
        <button className="bg-accent rounded-lg drop-shadow-md font-cantarell text-[2vw] text-white px-[10vw] py-[1.25vw]">
          FIND THE JOB FOR YOU
        </button>
      </div>
    </div>
  );
};

export default Hero;

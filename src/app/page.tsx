import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="w-screen h-auto">
      <div className="h-screen bg-primary flex flex-col items-center gap-[6vw]">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="bg-white h-[10vw] w-screen border-t-[0.5vw] border-t-accent text-black"></div>
    </div>
  );
};

export default Home;

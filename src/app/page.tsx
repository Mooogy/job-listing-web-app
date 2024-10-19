import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center gap-[10vh]">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Home;

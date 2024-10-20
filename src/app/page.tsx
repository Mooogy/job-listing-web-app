import Hero from "@/components/Hero";
import JobCatalog from "@/components/JobCatalog";
import Navbar from "@/components/Navbar";
import { getJobListings } from "@/lib/findwork";

const Home = async () => {
  let jobs = await getJobListings();

  return (
    <div className="w-screen h-auto">
      <div className="h-screen bg-primary flex flex-col items-center">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="bg-white h-[10vw] w-screen border-y-[0.5vw] border-y-accent text-black"></div>
      <JobCatalog jobs={jobs}></JobCatalog>
    </div>
  );
};

export default Home;

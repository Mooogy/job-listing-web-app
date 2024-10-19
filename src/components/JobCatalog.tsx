import JobListing from "./JobListing";

const JobCatalog = () => {
  return (
    <div className="h-screen w-screen bg-primary flex items-center justify-center">
      <div className="text-black w-3/4 h-full p-[3.5vw] gap-[2vh] flex flex-col">
        <div className="h-[5vh] flex gap-1 justify-between">
          <div className="bg-white rounded-lg w-3/4 flex items-center pl-[2vw]">
            <span className="font-cantarell text-gray-500 text-[1.25vw]">
              Search keywords, titles, descriptions
            </span>
          </div>
          <div className="bg-white rounded-lg w-1/4 flex items-center pl-[2vw]">
            <span className="font-cantarell text-gray-500 text-[1.25vw]">
              Location
            </span>
          </div>
        </div>
        <div className="flex h-full gap-[1vw]">
          <div className="w-1/3 h-full flex flex-col gap-2">
            <JobListing></JobListing>
            <JobListing></JobListing>
            <JobListing></JobListing>
            <JobListing></JobListing>
            <JobListing></JobListing>
          </div>
          <div className="w-2/3 h-full flex flex-col gap-2 bg-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default JobCatalog;

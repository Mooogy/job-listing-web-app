import JobListing from "./JobListing";

type Job = {
  id: number;
  role: string;
  company_name: string;
  remote: boolean;
  url: string;
};

type JobListProps = {
  jobs: Job[];
};

const JobCatalog = ({ jobs }: JobListProps) => {
  return (
    <div className="h-fit w-screen bg-primary flex items-center justify-center">
      <div className="w-3/4 h-full p-[3.5vw] gap-[2vh] flex flex-col">
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
        <div className="flex h-full w-full gap-[1vw] text-black">
          <div className="w-1/3 h-full flex flex-col gap-2">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobListing
                  role={job.role}
                  company_name={job.company_name}
                  key={job.id}
                ></JobListing>
              ))
            ) : (
              <p>No Job Found</p>
            )}
          </div>
          <div className="w-2/3 h-[98vh] flex-none flex flex-col gap-2 bg-black rounded-lg sticky top-[1vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default JobCatalog;

type Job = {
  role: string;
  company_name: string;
};

const JobListing = ({ role, company_name }: Job) => {
  return (
    <div className="bg-white font-cantarell w-full flex flex-col p-[0.5vw] shrink-0 h-1/5 rounded-lg cursor-pointer border-r-4 border-accent">
      <span>{role}</span>
      <span>{company_name}</span>
    </div>
  );
};

export default JobListing;

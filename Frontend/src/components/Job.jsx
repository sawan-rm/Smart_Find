import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgo = (date) => {
    const createdAt = new Date(date);
    const now = new Date();
    const diff = now - createdAt;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="h-[360px] flex flex-col p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      
      {/* Top: time + bookmark */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-500">
          {daysAgo(job?.createdAt) === 0 ? "Today" : `${daysAgo(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-orange-50 hover:border-orange-400">
          <Bookmark size={18} />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      {/* Title + Description */}
      <h2 className="font-bold text-xl text-gray-800 mb-2">{job?.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-3 mb-3">{job?.description}</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        {job?.position && <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{job.position}</Badge>}
        {job?.jobType && <Badge className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">{job.jobType}</Badge>}
        {job?.salary && <Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{job.salary}</Badge>}
      </div>

      {/* Buttons at bottom */}
      <div className="mt-auto flex gap-3">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          View Details
        </Button>
        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium">
          Save Job
        </Button>
      </div>

    </div>
  );
};

export default Job;
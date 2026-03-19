import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "ssjcsdbcwjdb";
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-500 font-medium">Posted 2 days ago</p>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300 hover:bg-orange-50 hover:border-orange-400 transition"
        >
          <Bookmark size={18} />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>

        <div>
          <h1 className="font-semibold text-lg leading-none">
            Company Name
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <h2 className="font-bold text-xl text-gray-800 mb-2">
          Frontend Developer
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sint cupiditate vel excepturi corrupti autem facere
          beatae a nisi nulla.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Badge className="bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full">
          12 Positions
        </Badge>

        <Badge className="bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-full">
          Part Time
        </Badge>

        <Badge className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full">
          24 LPA
        </Badge>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          View Details
        </Button>

        <Button
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm transition"
        >
          Save Job
        </Button>
      </div>
    </div>
  );
};

export default Job;
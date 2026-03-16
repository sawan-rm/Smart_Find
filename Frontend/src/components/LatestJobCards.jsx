import { Variable } from "lucide-react";
import { Badge } from "./ui/badge";
import React from "react";

const latestJobCards = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
            <div>
                <h1 className="font-medium text-lg">Company Name</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">Job Title</h1>
                <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet conlorem5
                    sectetur adipisicing elit.</p>
            </div>
            <div className="flex items-center gap-2 mt-4 ">
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
        </div>
    );
};

export default latestJobCards;

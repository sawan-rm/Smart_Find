import React from "react";
import NavBar from "./shared/NavBar";
import FilterCards from "./FilterCards";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <NavBar />

      <div className="max-w-[1400px] mx-auto mt-5 px-4">
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="w-1/4">
            <FilterCards />
          </div>

          {/* Job Section */}

          {jobsArray.length <= 0 ? (
            // <span className="text-gray-500">Job Not Found</span>
            <div className="flex items-center justify-center w-full h-[60vh] text-gray-500">
              Job Not Found
            </div>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {jobsArray.map((item, index) => (
                  <div key={index}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

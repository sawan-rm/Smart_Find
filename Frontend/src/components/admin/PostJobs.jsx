import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/Utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="flex items-center justify-center px-4 py-10">
          <form
            onSubmit={submitHandler}
            className="w-full max-w-4xl bg-gray-950 border border-gray-800 shadow-2xl rounded-2xl p-8 space-y-6"
          >
            <h1 className="text-2xl font-bold text-center mb-4">
              Post a New Job
            </h1>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { label: "Title", name: "title" },
                { label: "Description", name: "description" },
                { label: "Requirements", name: "requirements" },
                { label: "Salary", name: "salary" },
                { label: "Location", name: "location" },
                { label: "Job Type", name: "jobType" },
                { label: "Experience", name: "experience" },
              ].map((field) => (
                <div key={field.name} className="space-y-1">
                  <Label className="text-gray-300">{field.label}</Label>
                  <Input
                    type="text"
                    name={field.name}
                    value={input[field.name]}
                    onChange={changeEventHandler}
                    className="bg-gray-900 border-gray-700 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ))}

              <div className="space-y-1">
                <Label className="text-gray-300">No of Positions</Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={(e) =>
                    setInput({ ...input, position: Number(e.target.value) })
                  }
                  className="bg-gray-900 border-gray-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {companies.length > 0 && (
                <div className="col-span-2 space-y-1">
                  <Label className="text-gray-300">Company</Label>
                  <Select
                    value={input.companyId}
                    onValueChange={(value) =>
                      setInput({ ...input, companyId: value })
                    }
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-700">
                      <SelectValue placeholder="Select a Company" />
                    </SelectTrigger>

                    <SelectContent className="bg-gray-900 text-white border-gray-700">
                      <SelectGroup>
                        {companies.map((company) => (
                          <SelectItem
                            key={company._id}
                            value={company._id}
                            className="hover:bg-gray-800"
                          >
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {loading ? (
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
              >
                Post Job
              </Button>
            )}

            {companies.length === 0 && (
              <p className="text-sm text-red-400 text-center">
                Please register a company first before posting a job
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default PostJob;

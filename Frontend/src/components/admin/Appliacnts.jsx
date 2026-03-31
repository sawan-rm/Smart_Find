import React, { useEffect } from "react";
import NavBar from "../shared/NavBar";
import ApplicantsTable from "./ApplicantsTable";
import { toast } from "sonner";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/Utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";

const Appliacnts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/applicants/${params.id}`,
          { withCredentials: true },
        );
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.log(error);
        // toast(res.)
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applications {applicants?.applications?.length}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Appliacnts;

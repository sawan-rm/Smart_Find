import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector((store) => store.job);
    // console.log("applied jobss", allAppliedJobs);

    return (
        <div>
            <Table>
                <TableCaption>List of your applied jobs</TableCaption>

                {/* FIXED PART */}
                <TableHeader>
                    <TableRow>
                        <TableHead>{Date}</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {allAppliedJobs.length <= 0 ? <span>You haven't applied for any job.</span> : allAppliedJobs.map((appliedJobs) => (
                        <TableRow
                            key={appliedJobs._id}
                            className="transition-colors duration-200 hover:bg-gray-200"
                        >
                            <TableCell>{appliedJobs.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{appliedJobs.job.jobType}</TableCell>
                            <TableCell>{appliedJobs.job?.company?.name}</TableCell>
                            <TableCell className="text-right">
                                <Badge
                                    className={`rounded-md text-white ${appliedJobs.status === "accepted"
                                            ? "bg-green-500 hover:bg-green-600"
                                            : appliedJobs.status === "rejected"
                                                ? "bg-red-500 hover:bg-red-600"
                                                : "bg-yellow-500 hover:bg-yellow-600"
                                        }`}
                                >
                                    {appliedJobs.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;

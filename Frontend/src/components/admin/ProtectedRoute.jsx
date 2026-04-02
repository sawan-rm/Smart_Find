import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { User } = useSelector((store) => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!User || User.role !== "recruiter") {
            navigate("/");
        }
    }, [User, navigate]);

    return <>{children}</>;
};

export default ProtectedRoute;
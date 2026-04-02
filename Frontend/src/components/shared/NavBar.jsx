import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";
import { setUser } from "@/redux/authSlice";

const NavBar = () => {
  const user = useSelector((store) => store.auth?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res?.data?.success) {
        dispatch(setUser(null));
        toast.success(res.data.message || "Logged out");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  const isRecruiter = user?.role?.toLowerCase() === "recruiter";
  const isStudent = user?.role?.toLowerCase() === "student";

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition">
          Job <span className="text-orange-500">Portal</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            {isRecruiter ? (
              <>
                <li><Link to="/admin/companies">Companies</Link></li>
                <li><Link to="/admin/jobs">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/browse">Browse</Link></li>
              </>
            )}
          </ul>

          {/* Auth Section */}
          {!user ? (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-orange-400 hover:bg-orange-500">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || "/default-avatar.png"}
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80 bg-orange-50 p-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage
                      src={
                        user?.profile?.profilePhoto ||
                        "/default-avatar.png"
                      }
                    />
                  </Avatar>

                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">
                      {user?.profile?.bio || "No bio"}
                    </p>
                  </div>
                </div>

                <div className="mt-3 text-gray-700">
                  {isStudent && (
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 py-1 hover:text-orange-600"
                    >
                      <User2 size={16} />
                      View Profile
                    </Link>
                  )}

                  <button
                    onClick={logoutHandler}
                    className="flex items-center gap-2 py-1 hover:text-red-500"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
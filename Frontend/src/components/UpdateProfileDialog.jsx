import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Flag, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setopen }) => {
  const [loading, setloading] = useState(false);
  const { User } = useSelector((store) => store.auth);

  const [input, setinput] = useState({
    fullname: User?.fullname,
    email: User?.email,
    phoneNumber: User?.phoneNumber,
    bio: User?.profile?.bio,
    skills: User?.profile?.skills?.map((skill) => skill),
    file: User?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setinput({...input,[e.target.name]:e.target.value})
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("bio",input.bio);
    formData.append("skills",input.skills);
    if(input.file){
      formData.append("file", input.file);
    }

    try {
      const res = await axios.put(`${USER_API_END_POINT}/updateProfile`, formData, {
        headers: {
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      });
      if(res.data.success){
        dispatch(setUser(res.data.User));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setopen(false);
    console.log(input);
  }

  const fileChangeHandler = (e) => {
    const file = e.target.file?.[0];
    setinput({...input, file});
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent
          className="sm:max-w-[425px] bg-white"
          onInteractOutside={() => setopen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="name">
                  Name
                </Label>
                <Input
                  value={input.fullname}
                  onChange={changeEventHandler}
                  id="name"
                  type="text"
                  name="name"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="email">
                  Email
                </Label>
                <Input
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email"
                  id="email"
                  name="email"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="number">
                  Number
                </Label>
                <Input
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  id="number"
                  name="number"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="bio">
                  Bio
                </Label>
                <Input
                  value={input.bio}
                  onChange={changeEventHandler}
                  id="bio"
                  name="bio"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="skills">
                  Skills
                </Label>
                <Input
                  value={input.skills}
                  onChange={changeEventHandler}
                  id="skills"
                  name="skills"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="file">
                  Resume
                </Label>
                <Input
                  id="file"
                  onChange={fileChangeHandler}
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className="col-span-3 cursor-pointer"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4  bg-black text-white hover:opacity-80">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full my-4 bg-black text-white hover:opacity-80"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UpdateProfileDialog;

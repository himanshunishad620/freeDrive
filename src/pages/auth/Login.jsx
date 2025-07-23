import { useState } from "react";
import { useLoginMutation } from "../../api/authApi";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import useHandleForm from "../../hooks/useHandleForm";
import react from "../../assets/react.svg";
import { HiOutlineMail } from "react-icons/hi";
import Input from "../../components/UI/Input";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../components/UI/Button";
import Separator from "../../components/UI/Separator";
import SignUpButton from "../../components/UI/SignUpButton";
import { toast } from "react-toastify";

export default function Login() {
  const [Login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const { value, handleChange, resetForm } = useHandleForm({
    email: "yffgxlblpgozxgljgh@nespj.com", //"himanshunishad6@gmail.com",
    password: "Himan@6405", //"Himan@6405",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(value).unwrap();
      // console.log(res.msg);
      toast.success(res.msg);
      navigate(0);
      // setTimeout(() => navigate(0), [1000]);
    } catch (error) {
      toast.error(error.data.msg);
      // console.log(error.data.msg);
    }
  };
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold text-blue-500">Log In</h1>
        <p className="mb-5 text-center text-[14px] leading-4 text-gray-400">
          Enter your login details below.
          <br />
          Access your dashboard and manage your files.
        </p>

        <form onSubmit={handleSubmit} className="flex w-80 flex-col gap-3">
          <Input
            icon={<HiOutlineMail />}
            type={"email"}
            placeholder={"Email"}
            value={value.email}
            name={"email"}
            onChange={handleChange}
            required={true}
          />
          <Input
            icon={<RiLockPasswordLine />}
            type={"password"}
            placeholder={"Password"}
            value={value.password}
            name={"password"}
            onChange={handleChange}
            required={true}
          />
          {/* <Link className="m-[-7px] px-3 text-right text-[13px] font-medium text-blue-500 duration-200 hover:text-[#8bc3ff]">
            Forget password?
          </Link> */}
          <p className="m-[-7px] text-right text-[13px] font-medium text-[#969AB8]">
            <Link className="px-3 font-medium text-blue-500 duration-200 hover:text-[#8bc3ff]">
              Forget Password?
            </Link>
          </p>
          <Button type="submit" label="Login" isLoading={isLoading} />
          <Separator />
          <SignUpButton icon={google} text="Continue with Google" />
          <SignUpButton icon={facebook} text="Continue with Facebook" />
        </form>
        <p className="text-[13px] font-medium text-[#969AB8]">
          Don't have account?
          <Link
            to="register"
            className="m-[-7px] px-3 text-right text-[13px] font-medium text-blue-500 duration-200 hover:text-[#8bc3ff]"
          >
            Sign Up
          </Link>
        </p>
      </div>
      {/* <img className="w-1/2" src={react} alt="" /> */}
    </div>
  );
}

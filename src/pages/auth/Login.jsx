import Button from "../../components/UI/Button";
import Separator from "../../components/UI/Separator";
import SignUpButton from "../../components/UI/SignUpButton";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import Input from "../../components/UI/Input";
import useHandleForm from "../../hooks/useHandleForm";
import { useLoginMutation } from "../../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function Login() {
  const [Login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const { value, handleChange } = useHandleForm({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(value).unwrap();
      toast.success(res.msg);
      navigate(0);
    } catch (error) {
      toast.error(error.data.msg);
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
    </div>
  );
}

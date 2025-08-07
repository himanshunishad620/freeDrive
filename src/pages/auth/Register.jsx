import useHandleForm from "../../hooks/useHandleForm";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import OtpInput from "../../components/UI/OtpInput";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation, useSendOtpMutation } from "../../api/authApi";
import { emailRegex } from "../../constant/Regex";
import { toast } from "react-toastify";
export default function Register() {
  const [otp, setOtp] = useState("");
  const [sendOtp, { isLoading: otpLoader }] = useSendOtpMutation();
  const [register, { isLoading: registerLoader }] = useRegisterMutation();
  const navigate = useNavigate();
  const { value, handleChange } = useHandleForm({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const generateOtp = async () => {
    if (!emailRegex.test(value.email))
      return toast.error("Please Enter valid email!");
    const res = await sendOtp({ email: value.email });
    if (res?.data?.msg) toast.success(res.data.msg);
    else toast.error(res.error.data.msg);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.password !== value.confirmPassword)
      return toast.error("Password does not matched!");
    const res = await register({ ...value, otp });
    if (res?.data?.msg) {
      toast.success(res.data.msg);
      navigate("/auth");
    } else toast.error(res.error.data.msg);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold text-blue-500">Sign Up</h1>
        <p className="mb-5 text-center text-[14px] leading-4 text-gray-400">
          Sign up now to start uploading
          <br /> and securely storing your files for free!
        </p>
        <form onSubmit={handleSubmit} className="flex w-80 flex-col gap-3">
          <Input
            icon={<HiOutlineMail />}
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required={true}
            value={value.email}
          />
          <Button
            isLoading={otpLoader}
            onClick={generateOtp}
            label="Generate OTP"
            type="button"
          />
          <Input
            icon={<RiLockPasswordLine />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required={true}
            value={value.password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />
          <Input
            icon={<RiLockPasswordLine />}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required={true}
            value={value.confirmPassword}
          />
          <OtpInput length={6} onChange={handleOtpChange} />
          <Button isLoading={registerLoader} type="Submit" label="Sign Up" />
          <p className="text-center text-[13px] font-medium text-[#969AB8]">
            Already have an account?
            <Link
              to="/auth"
              className="m-[-7px] px-3 text-right text-[13px] font-medium text-blue-500 duration-200 hover:text-[#8bc3ff]"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

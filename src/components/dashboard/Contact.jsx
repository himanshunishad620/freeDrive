import Input from "../UI/Input";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import storage from "./../../assets/storagee.png";
import IconButton from "../UI/IconButton";
import useHandleForm from "../../hooks/useHandleForm";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactUsMutation } from "../../api/otherApi";

export default function Contact() {
  const { value, handleChange, resetForm } = useHandleForm({
    name: "",
    email: "",
    msg: "",
  });
  console.log(value);
  const [contactUs, { isLoading }] = useContactUsMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await contactUs(value).unwrap();
      toast.success("Message Sent Successfuly!");
      resetForm();
      console.log(res);
    } catch (error) {
      toast.error("Internal Server Error!");
    }
  };
  return (
    <div className="relative h-full w-full">
      <h1
        onClick={() => navigate(-1)}
        className="absolute top-0 left-0 z-10 flex items-center p-3 pl-6 text-2xl font-semibold text-[#5b5b5b]"
      >
        <IconButton type="button" icon={<FaArrowLeft />} />
        Contact Us
      </h1>
      <div className="relative flex h-full w-full">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="items-left relative ml-0 flex w-full flex-col justify-start gap-2 bg-white pt-20 pl-10 md:ml-3 md:w-1/2 md:justify-center md:pt-0"
        >
          <h1 className="text-4xl font-semibold text-blue-500">
            {" "}
            Get In Touch
          </h1>
          <p className="mb-2 w-80 text-justify text-[13px] leading-4 text-[#5b5b5b] md:w-120">
            We’d love to hear from you! Whether you have questions about
            features, need support, want to share feedback, or just want to say
            hello — feel free to reach out. Your input helps us improve and
            serve you better. Fill out the form or contact us directly using the
            information below.
          </p>
          <Input
            type="text"
            name={"name"}
            placeholder={"Enter Name"}
            icon={<FaRegUser />}
            onChange={handleChange}
            value={value.name}
            required={true}
          />
          <Input
            type="email"
            name={"email"}
            placeholder={"Enter email"}
            icon={<MdOutlineMailOutline />}
            onChange={handleChange}
            required={true}
            value={value.email}
          />
          <div className="">
            <TextArea required onChange={handleChange} value={value.msg} />
          </div>
          <div className="w-40">
            <Button type={"submit"} label={"Send"} isLoading={isLoading} />
          </div>
          <div className="mt-5 ml-[-40px] flex justify-center gap-3">
            <a
              href={`mailto:himanshunishad620@gmail.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton
                type={"button"}
                notHover={true}
                icon={<MdOutlineMailOutline />}
              />
            </a>
            {/* <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton notHover={true} icon={<RiGithubLine />} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/himanshu-nishad-855a01291"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton
                type={"button"}
                notHover={true}
                icon={<RiLinkedinBoxLine />}
              />
            </a>
          </div>
        </form>

        <div className="hidden h-full w-1/2 items-center bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] md:flex">
          <img src={storage} alt="" />
        </div>
      </div>
    </div>
  );
}

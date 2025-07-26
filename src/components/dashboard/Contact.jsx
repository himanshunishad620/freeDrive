import React from "react";
import Input from "../UI/Input";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import storage from "./../../assets/storagee.png";
import IconButton from "../UI/IconButton";
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
// import { FiGithub } from "react-icons/fi";
// import DashboardHeader from "../UI/FileManagerHeader";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full">
      <h1
        onClick={() => navigate(-1)}
        className="absolute top-0 left-0 z-10 flex items-center p-3 text-2xl font-semibold text-[#5b5b5b]"
        // className="absolute top-0 left-0 z-10 flex items-center px-3 pt-3 text-2xl font-semibold text-[#5b5b5b]"
      >
        <IconButton type="button" icon={<FaArrowLeft />} />
        Contact Us
      </h1>
      <div className="relative flex h-full w-full">
        <form
          method="POST"
          className="items-left relative ml-0 flex w-full flex-col justify-center gap-2 bg-white pl-10 md:ml-3 md:w-1/2"
        >
          <h1 className="text-4xl font-semibold text-blue-500">
            {" "}
            Get In Touch
          </h1>
          <p className="w-80 text-justify leading-5 text-[#5b5b5b] md:w-120">
            We’d love to hear from you! Whether you have questions about
            features, need support, want to share feedback, or just want to say
            hello — feel free to reach out. Your input helps us improve and
            serve you better. Fill out the form or contact us directly using the
            information below.
          </p>
          {/* <div className="flex"> */}

          {/* <div className="absolute top-0 left-0">
          <DashboardHeader />
        </div> */}
          <Input
            type="text"
            name={"name"}
            placeholder={"Enter Name"}
            icon={<FaRegUser />}
          />
          <Input
            type="email"
            name={"email"}
            placeholder={"Enter email"}
            icon={<MdOutlineMailOutline />}
          />
          {/* </div> */}
          <div className="">
            <TextArea />
          </div>
          <div className="w-40">
            <Button type={"submit"} label={"Send"} />
          </div>
          <div className="flex gap-3">
            <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton notHover={true} icon={<MdOutlineMailOutline />} />
            </a>
            <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton notHover={true} icon={<RiGithubLine />} />
            </a>
            <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6effa] md:h-auto md:w-auto md:bg-white"
            >
              <IconButton notHover={true} icon={<RiLinkedinBoxLine />} />
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

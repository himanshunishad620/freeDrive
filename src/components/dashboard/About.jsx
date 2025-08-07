import LightButton from "../UI/LightButton";
import AboutHeader from "../UI/AboutHeader";
import IconButton from "../UI/IconButton";
import dp from "../../assets/dp.jpg";
import { TbBrandRedux } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";
import { FaLock, FaUserShield, FaReact, FaNodeJs } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  SiJsonwebtokens,
  SiReactrouter,
  SiNodemon,
  SiAxios,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedis,
} from "react-icons/si";
import useResumeDownload from "../../hooks/useResumeDownload";

const About = () => {
  const { downloadResume, isLoading } = useResumeDownload();
  const techStack = [
    { name: "React", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-xl" /> },
    { name: "React Icons", icon: <FiPackage className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
    { name: "Express", icon: <SiExpress className="text-xl" /> },
    { name: "Redis", icon: <SiRedis className="text-xl" /> },
    { name: "Axios", icon: <SiAxios className="text-xl" /> },
    { name: "JsonWebToken", icon: <SiJsonwebtokens className="text-xl" /> },
    { name: "React Router", icon: <SiReactrouter className="text-xl" /> },
    { name: "Redux Tookit", icon: <TbBrandRedux className="text-xl" /> },
    { name: "Nodemon", icon: <SiNodemon className="text-xl" /> },
  ];
  return (
    <div className="relative ml-0 min-h-screen bg-white md:ml-3">
      <AboutHeader />
      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-500">
            About The Creator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            The story behind FreeDrive and my mission to provide truly free
            cloud storage
          </p>
        </section>

        {/* Bio Section */}
        <div className="mb-20 flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="rounded-full bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] p-2 shadow-xl">
              <img
                src={dp}
                alt="Profile"
                className="h-auto w-full rounded-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="mb-4 text-3xl font-bold text-blue-500">
              Hi, I'm Himanshu Nishad
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              A FullStack developer passionate about digital privacy and
              accessible technology. I created FreeDrive after becoming
              frustrated with how traditional cloud storage providers monetize
              user data while charging for basic features.
            </p>
            <div className="flex space-x-4">
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
          </div>
        </div>

        {/* Project Story */}
        <section className="mb-20">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
            Why I Built FreeDrive
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-md">
              <FaLock className="mb-4 text-3xl text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">
                The Privacy Problem
              </h3>
              <p className="text-gray-600">
                Most "free" storage services secretly scan your files, track
                your activity, and sell your data to advertisers. I wanted to
                create an alternative that respects user privacy while remaining
                completely free.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-md">
              <FaUserShield className="mb-4 text-3xl text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">The Vision</h3>
              <p className="text-gray-600">
                FreeDrive proves that cloud storage can be both private and
                sustainable without exploiting users. Our open-source model and
                transparent operations set a new standard for ethical file
                storage.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-500">
            Technology Used
          </h2>
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex items-center justify-center gap-2 font-medium text-gray-700">
                  {tech.icon}
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl bg-blue-600 p-10 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Let’s Get Connected and Build the Future Together
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            I’m actively looking for opportunities where I can contribute my
            React, Tailwind, and full-stack knowledge to create impactful
            solutions.
          </p>
          <div className="m-auto w-70">
            <LightButton
              label={"Download Resume"}
              onClick={downloadResume}
              isLoading={isLoading}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

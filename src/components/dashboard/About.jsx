// import React from "react";
// import AboutHeader from "../UI/AboutHeader";
// import facebook from "../../assets/facebook.svg";
// export default function About() {
//   return (
//     <div className="w-max-md relative ml-0 h-full overflow-y-scroll bg-white px-2 md:ml-3 md:px-10">
//       <AboutHeader />
//       <div className="pt-15">
//         <div>
//           <h2 className="text-center text-2xl font-medium text-blue-500">
//             About Me{" "}
//           </h2>
//           <img
//             className="float-left aspect-video h-76 md:aspect-square"
//             src={facebook}
//             alt=""
//           />
//           <p className="m-2 text-justify leading-5">
//             Hi, I’m Himanshu Nishad, a passionate Frontend Developer and
//             technology enthusiast. I love solving real-world problems with
//             simple, clean, and efficient solutions. My main expertise lies in
//             React.js, Tailwind CSS, and modern JavaScript frameworks, and I
//             constantly strive to improve my skills by building practical,
//             user-oriented applications.
//           </p>
//           <p className="m-2 text-justify leading-5">
//             {" "}
//             I have a keen interest in creating products that enhance everyday
//             life by focusing on user experience, speed, and accessibility.
//             Beyond coding, I enjoy exploring new technologies, learning best
//             practices, and keeping up with industry trends to ensure my work
//             stays modern and future-proof.{" "}
//           </p>
//           <p className="m-2 text-justify leading-5">
//             My approach to development combines creative problem-solving,
//             attention to detail, and a passion for learning. I believe in
//             building applications that are not just functional but also
//             intuitive and visually appealing. This drive has led me to work on
//             multiple personal and professional projects, including this Free
//             Cloud Storage Project, which is inspired by platforms like Google
//             Drive but designed to be free and open for everyone.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import React from "react";
// // import {
// //   FaCheck,
// //   FaTimes,
// //   FaWhatsapp,
// //   FaLock,
// //   FaEye,
// //   FaServer,
// //   FaShieldAlt,
// // } from "react-icons/fa";

// // const About = () => {
// //   const features = [
// //     {
// //       name: "End-to-End Encryption",
// //       yourApp: true,
// //       whatsapp: true,
// //       description:
// //         "Messages/files encrypted so only sender and recipient can read",
// //     },
// //     {
// //       name: "No Metadata Collection",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "No tracking of who shares with whom and when",
// //     },
// //     {
// //       name: "Self-Destructing Files",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Files automatically delete after viewing/download",
// //     },
// //     {
// //       name: "No Cloud Storage",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Files never stored on central servers",
// //     },
// //     {
// //       name: "Anonymous Sharing",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Option to share without revealing identity",
// //     },
// //     {
// //       name: "No Phone Number Required",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Users can share without providing personal info",
// //     },
// //     {
// //       name: "Open Source",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Code publicly auditable for security verification",
// //     },
// //     {
// //       name: "No File Size Limits",
// //       yourApp: true,
// //       whatsapp: false,
// //       description: "Share large files without compression",
// //     },
// //   ];

// //   return (
// //     <div className="mx-auto max-w-6xl px-4 py-12">
// //       <div className="mb-12 text-center">
// //         <h2 className="mb-3 text-3xl font-bold text-gray-800">
// //           Privacy-First File Sharing
// //         </h2>
// //         <p className="mx-auto max-w-3xl text-xl text-gray-600">
// //           How our solution compares to WhatsApp in protecting your sensitive
// //           files
// //         </p>
// //       </div>

// //       {/* Comparison Table */}
// //       <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //         <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-50 p-4 font-medium text-gray-700">
// //           <div className="col-span-5 md:col-span-6">Privacy Feature</div>
// //           <div className="col-span-3 flex items-center justify-center gap-2 text-center md:col-span-2">
// //             <FaLock className="text-blue-600" /> Your App
// //           </div>
// //           <div className="col-span-3 flex items-center justify-center gap-2 text-center md:col-span-2">
// //             <FaWhatsapp className="text-green-500" /> WhatsApp
// //           </div>
// //           <div className="col-span-1 hidden md:col-span-2 md:block">
// //             Details
// //           </div>
// //         </div>

// //         {features.map((feature, index) => (
// //           <div
// //             key={index}
// //             className={`grid grid-cols-12 items-center p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
// //           >
// //             <div className="col-span-5 font-medium text-gray-800 md:col-span-6">
// //               {feature.name}
// //             </div>

// //             <div className="col-span-3 flex justify-center md:col-span-2">
// //               {feature.yourApp ? (
// //                 <FaCheck className="text-xl text-green-500" />
// //               ) : (
// //                 <FaTimes className="text-xl text-red-500" />
// //               )}
// //             </div>

// //             <div className="col-span-3 flex justify-center md:col-span-2">
// //               {feature.whatsapp ? (
// //                 <FaCheck className="text-xl text-green-500" />
// //               ) : (
// //                 <FaTimes className="text-xl text-red-500" />
// //               )}
// //             </div>

// //             <div className="col-span-12 mt-3 text-sm text-gray-600 md:col-span-2 md:mt-0 md:block">
// //               {feature.description}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Key Privacy Advantages */}
// //       <div className="mt-16">
// //         <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
// //           Our Privacy Advantages
// //         </h3>

// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// //           <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
// //             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
// //               <FaEye className="text-xl text-blue-600" />
// //             </div>
// //             <h4 className="mb-2 text-lg font-semibold">No Surveillance</h4>
// //             <p className="text-gray-600">
// //               We don't monitor or analyze your sharing patterns like WhatsApp
// //               does for advertising.
// //             </p>
// //           </div>

// //           <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
// //             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
// //               <FaServer className="text-xl text-purple-600" />
// //             </div>
// //             <h4 className="mb-2 text-lg font-semibold">Decentralized</h4>
// //             <p className="text-gray-600">
// //               Peer-to-peer technology means no central server storing your
// //               files.
// //             </p>
// //           </div>

// //           <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
// //             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
// //               <FaShieldAlt className="text-xl text-green-600" />
// //             </div>
// //             <h4 className="mb-2 text-lg font-semibold">No Backups</h4>
// //             <p className="text-gray-600">
// //               Unlike WhatsApp, we don't create vulnerable cloud backups of your
// //               shared files.
// //             </p>
// //           </div>

// //           <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
// //             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
// //               <FaLock className="text-xl text-amber-600" />
// //             </div>
// //             <h4 className="mb-2 text-lg font-semibold">Content Protection</h4>
// //             <p className="text-gray-600">
// //               Files remain encrypted even after delivery, unlike WhatsApp where
// //               decrypted files are stored.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Technical Explanation */}
// //       <div className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-8">
// //         <h3 className="mb-4 text-2xl font-bold text-gray-800">
// //           How We Protect Your Files
// //         </h3>
// //         <div className="grid gap-8 md:grid-cols-2">
// //           <div>
// //             <h4 className="mb-3 text-lg font-semibold text-blue-600">
// //               WhatsApp's Approach
// //             </h4>
// //             <ul className="space-y-3 text-gray-700">
// //               <li className="flex items-start gap-2">
// //                 <FaTimes className="mt-1 flex-shrink-0 text-red-400" />
// //                 <span>Files stored decrypted on recipient's device</span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaTimes className="mt-1 flex-shrink-0 text-red-400" />
// //                 <span>Backups to Google Drive/iCloud are unencrypted</span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaTimes className="mt-1 flex-shrink-0 text-red-400" />
// //                 <span>Metadata (who you share with) is collected</span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaTimes className="mt-1 flex-shrink-0 text-red-400" />
// //                 <span>Requires phone number (personal identifier)</span>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="mb-3 text-lg font-semibold text-green-600">
// //               Our Solution
// //             </h4>
// //             <ul className="space-y-3 text-gray-700">
// //               <li className="flex items-start gap-2">
// //                 <FaCheck className="mt-1 flex-shrink-0 text-green-500" />
// //                 <span>
// //                   Files remain encrypted at all times (even during transfer)
// //                 </span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaCheck className="mt-1 flex-shrink-0 text-green-500" />
// //                 <span>
// //                   No centralized storage - direct peer-to-peer transfer
// //                 </span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaCheck className="mt-1 flex-shrink-0 text-green-500" />
// //                 <span>Optional anonymous sharing without identifiers</span>
// //               </li>
// //               <li className="flex items-start gap-2">
// //                 <FaCheck className="mt-1 flex-shrink-0 text-green-500" />
// //                 <span>On-device decryption only when file is accessed</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCloudUploadAlt,
  FaLock,
  FaUserShield,
} from "react-icons/fa";
import AboutHeader from "../UI/AboutHeader";
import LightButton from "../UI/LightButton";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import IconButton from "../UI/IconButton";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiAxios,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedis,
} from "react-icons/si";
import { FiPackage } from "react-icons/fi";
// import { RiAxiosFill } from "react-icons/ri";

const About = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-xl" /> },
    { name: "React Icons", icon: <FiPackage className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
    { name: "Express", icon: <SiExpress className="text-xl" /> },
    { name: "Redis", icon: <SiRedis className="text-xl" /> },
    { name: "Axios", icon: <SiAxios className="text-xl" /> },
  ];
  return (
    <div className="relative ml-0 min-h-screen bg-white md:ml-3">
      {/* Navigation */}
      {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <FaCloudUploadAlt className="text-2xl text-blue-600" />
          <span className="text-xl font-bold text-blue-800">FreeDrive</span>
        </div>
        <div className="flex space-x-6">
          <a href="/dashboard" className="text-blue-700 hover:text-blue-900">
            Dashboard
          </a>
          <a
            href="/about"
            className="border-b-2 border-blue-600 font-medium text-blue-700"
          >
            About
          </a>
        </div>
      </nav> */}
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
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
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

        {/* Call to Action */}
        <section className="rounded-xl bg-blue-600 p-10 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Let’s Get Connected and Build the Future Together
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            I’m actively looking for opportunities where I can contribute my
            React, Tailwind, and full-stack knowledge to create impactful
            solutions.
          </p>
          {/* <button className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition-colors hover:bg-blue-50">
            Get Started Now
          </button> */}
          <div className="m-auto w-70">
            <LightButton label={"Download Resume"} />
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
};

export default About;

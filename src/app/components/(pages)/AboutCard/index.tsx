import React, { useState } from "react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import DP from "../../../../../public/yayin.jpg";
import Link from "next/link";

const AboutCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="bg-[#0a192f] py-20 m-auto max-w-[1200px] " id="about">
        <div className="flex flex-row space-x-2 w-full px-12 md:px-20  lg:px-52">
          <div className="text-sm md:text-xl pt-1.5 md:pt-1 text-[#64ffda]">
            01.
          </div>
          <div className="text-lg md:text-2xl font-bold text-[#ccd6f6] w-24 md:w-32">
            About Me
          </div>
          <div className="border-t border-[#233554] w-60 mt-4"></div>
        </div>

        <div className="px-12 py-12 md:px-20 lg:px-52 flex flex-col lg:flex-row  gap-6 ">
          <div className="w-full text-md text-[#a8b2d1]">
            <div>
              <div>
                <div
                  className={`overflow-hidden ${
                    isExpanded ? "" : "line-clamp-4"
                  } transition-all duration-300`}
                >
                  Hello! I'm Clarence, a Software Developer with extensive
                  experience in both mobile and web development. Proficient in
                  React Native, and Next.js, I excel in creating dynamic,
                  user-friendly applications. I am well-versed in Agile
                  methodologies, ensuring efficient and collaborative workflows.
                  My experience spans beyond working in startup environments,
                  where I have honed my ability to deliver high-quality
                  solutions in fast-paced settings.
                </div>

                <button
                  className="text-[#64ffda]  cursor-pointer hover:underline"
                  onClick={toggleContent}
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              </div>

              <br></br>

              <div>
                Let's collaborate and build engaging websites and mobile apps
                together.
                <Link
                  href="https://www.linkedin.com/in/clarence-cabiles-028bb4284/"
                  target="_blank"
                  className="text-[#64ffda] pl-2"
                >
                  Connect with me
                </Link>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="text-[#64ffda]  text-[20px]"> Tech Stacks</div>
              <div className="w-full grid grid-cols-2 gap-4  ">
                <div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>JavaScript (ES6+)</p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>React JS</p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Node JS</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Postman</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Prisma</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Nest JS</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>TypeScript </p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>Agile</p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>React Native</h1>
                  </div>
                </div>

                <div className=" ">
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>AWS</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Tailwindcss</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Next JS</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>ShadCN</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Git</h1>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>MoEngage</p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <p>CSS</p>
                  </div>
                  <div className="flex">
                    <FaCaretRight className=" text-[#64ffda] mt-1" />
                    <h1>Html</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-12 lg:pt-0 flex justify-center lg:justify-start ">
            <div
              style={{ transition: "transform 0.3s" }}
              className=" h-60 w-60 md:h-72 md:w-72  rounded-md  border-[#64ffda] border-2 translate-x-2 translate-y-2 translate-all hover:translate-y-4 hover:translate-x-4 "
            >
              <div
                className="overflow-hidden rounded-md  h-60 w-60 md:h-72 md:w-72  -translate-x-3 -translate-y-3 hover:-translate-y-6 hover:-translate-x-6 "
                style={{ transition: "transform 0.3s" }}
              >
                <div className="absolute w-full h-full bg-[#64ffda]/70 hover:bg-transparent transition-colors duration-300"></div>
                <Image
                  src={DP}
                  alt="Image"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

//transforrm
{
  /* <div
              className=" h-60 w-60 md:h-72 md:w-72  rounded-md relative  border-[#64ffda] border-2 
             translate-x-2 translate-y-2 hover:translate-y-4 hover:translate-x-4 translate-all"
            >
              <div className=" hover:-translate-y-6 hover:-translate-x-6 rounded-md bg-[#64ffda] hover:bg-white w-full h-full relative -translate-x-3 -translate-y-3">
                hi
              </div>
            </div> */
}

import React from "react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import DP from "../../../../../public/yayin.jpg";

const AboutCard = () => {
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
              <p>
                Hello! I'm Clarence, a mid-level developer with a focus on
                creating impactful web solutions. I excel in crafting
                exceptional user experiences, from responsive designs to
                seamless interactions. Let's collaborate and build engaging
                websites together.
                <a className="text-[#64ffda] pl-2">Upstatement</a>.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p>
                building accessible, human-centered products at
                <a className="text-[#64ffda] pl-2">Upstatement</a>.
              </p>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 pt-6 ">
              <div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <p> JavaScript (ES6+)</p>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <p> React JS</p>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>Node JS</h1>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <p> TypeScript </p>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <p> CSS</p>
                </div>
              </div>

              <div className=" ">
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>AWS</h1>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>Html</h1>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>Tailwindcss</h1>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>Git</h1>
                </div>
                <div className="flex">
                  <FaCaretRight className=" text-[#64ffda] mt-1" />
                  <h1>Next JS</h1>
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

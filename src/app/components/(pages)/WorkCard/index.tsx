import React from "react";
import Image from "next/image";
import one from "../../../../../public/one.png";
import two from "../../../../../public/two.png";
import three from "../../../../../public/three.png";
import { TbBrandGithub } from "react-icons/tb";
import { RiShareBoxLine } from "react-icons/ri";

const WorkCard = () => {
  return (
    <div>
      <div className="bg-[#0a192f] pl-64 pr-64 pb-48 pt-28 " id="work">
        <div className="flex flex-row space-x-2 ">
          <div className="text-sm md:text-xl pt-1.5 md:pt-1 text-[#64ffda]">
            02.
          </div>
          <div className="text-lg md:text-2xl font-bold text-[#ccd6f6] w-44 md:w-64">
            Some Things I’ve Built
          </div>
          <div className="border-t border-[#233554] w-40 md:w-60 mt-4"></div>
        </div>

        {/* ---------IMAGE 1 ------------------------ */}

        <div className="pt-12 text-white space-y-28">
          <div className="flex">
            <div>
              <Image className="w-18 h-96 rounded-md " src={one} alt="one" />
            </div>
            <div className=" bg-slate-800 w-[630px] absolute pt-8 pb-8 pr-8 mt-28 ml-[550px] text-right space-y-1 rounded-md">
              <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom,</p>
              <p>iTerm, and more. Available on Visual Studio Marketplace</p>
              <p> Package Control, Atom Package Manager, and npm.</p>
            </div>

            <div className=" w-[630px] absolute  pt-6 ml-[550px] text-right space-y-1 rounded-md">
              <p className="text-emerald-400">Featured Project</p>
              <h1 className="text-3xl">Halcyon Theme</h1>
            </div>

            <div className=" w-[630px] absolute  pt-72  ml-[550px]   rounded-md text-right ">
              <div className="flex justify-end space-x-4">
                <p>VS Code</p>
                <p>Sublime Text</p>
                <p>Atom </p>
                <p>iTerm2 </p>
                <p> Hyper</p>
              </div>

              <div className="pt-4 flex justify-end text-2xl space-x-4">
                <div>
                  <TbBrandGithub />
                </div>
                <div>
                  <RiShareBoxLine />
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------image 2------------------------ */}
          <div className=" flex justify-end">
            <div>
              <Image className="w-18 h-96" src={two} alt="two" />
            </div>
            <div className=" bg-slate-800 w-[630px] mt-28 absolute mr-[550px] pt-8 pb-8 pl-8 ">
              <p>
                A web app for visualizing personalized Spotify data. View your
              </p>
              <p>
                top artists, top tracks, recently played tracks, and detailed
                audio
              </p>
              <p>
                information about each track. Create and save new playlists of
              </p>
              <p>
                recommended tracks based on your existing playlists and more.
              </p>
            </div>

            <div className=" w-[630px] absolute mr-[550px] pt-6  ">
              <p className="text-emerald-400">Featured Project</p>
              <h1 className="text-3xl"> Spotify Profile</h1>
            </div>

            <div className=" w-[630px]  absolute mr-[550px] pt-72 ">
              <div className="flex  pb-4 pt-4 space-x-4">
                <p>VS Code</p>
                <p>Sublime Text</p>
                <p>Atom </p>
                <p>iTerm2 </p>
                <p> Hyper</p>
              </div>
              <div className=" flex text-2xl  space-x-4">
                <div>
                  <TbBrandGithub />
                </div>
                <div>
                  <RiShareBoxLine />
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------image 3 --------------------- */}

          <div className=" w-[630px] absolute ml-[550px]  text-right space-y-1 rounded-md pb-4">
            <p className="text-emerald-400">Featured Project</p>
            <h1 className="text-xl ">Build a Spotify Connected App</h1>
          </div>
          <div className="flex">
            <div>
              <Image
                className="w-18 h-96  rounded-md"
                src={three}
                alt="three"
              />
            </div>

            <div className=" bg-slate-800 w-[630px] absolute pt-8 pb-8 pr-8 mt-24 ml-[550px] text-right space-y-1 rounded-md">
              <div>
                <p>Having struggled with understanding how the Spotify OAuth</p>
                <p>flow works, I made the course I wish I could have had.</p>
                <p className="pt-2">
                  Unlike tutorials that only cover a few concepts and leave you
                </p>
                <p>with half-baked GitHub repositories, this course covers</p>
              </div>

              <div className=" w-[630px] absolute  pt-16  pb-12 rounded-md ">
                <div className="flex justify-end space-x-4">
                  <p>React Express</p>
                  <p>Spotify</p>
                  <p>API</p>
                  <p> Styled </p>
                  <p>Components</p>
                </div>
                <div className="text-xl flex justify-end ">
                  <h1 className="border w-36 text-center rounded-md p-2 mt-8 text-[#64ffda] border-[#64ffda]">
                    Learn More
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

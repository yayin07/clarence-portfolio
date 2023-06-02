import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandFacebook,
} from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="hidden xl:flex w-28 text-[#ccd6f6]   bg-[#0a192f]  ">
      <div className=" fixed justify-end pl-0 md:pl-8 flex flex-col justify-items-start h-full">
        <div className="text-2xl vertical">
          <div className="space-y-6 hover:text-[#64ffda]">
            clarencecabiles07@gmail.com
          </div>
        </div>

        <div className="h-48  mt-8 ml-3 border-l border-[#ccd6f6]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
{
  /* <div className="hidden xl:flex w-28 text-gray-300  bg-[#0a192f]  ">
  <div className="pt-96 fixed vertical flex justify-center ">
    <div className="mt-48 hover:text-emerald-400 text-sm">
      clarencecabiles07@gmail.com
    </div>
    <div className=" border-l-2 h-36 text-gray-400 mt-8 ml-2  "></div>
  </div>
</div>; */
}

"use client";
import Link from "next/link";
import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandFacebook,
} from "react-icons/tb";
import { AiOutlineMedium } from "react-icons/ai";

const SidebarLeft = () => {
  return (
    <div className="hidden xl:flex w-28 text-[#ccd6f6]   bg-[#0a192f]  ">
      <div className=" fixed justify-end pl-0 md:pl-12 flex flex-col justify-items-end h-full">
        <div className="text-2xl">
          <div className="space-y-6">
            <div className="hover:text-[#64ffda]">
              <a href="https://github.com/yayin07">
                <TbBrandGithub />
              </a>
            </div>
            <div className="hover:text-[#64ffda]">
              <Link target="_blank" href="/">
                <TbBrandInstagram />
              </Link>
            </div>
            <div className="hover:text-[#64ffda]">
              <Link
                target="_blank"
                href="https://medium.com/@clarencecabiles07"
              >
                <AiOutlineMedium />
              </Link>
            </div>
            <div className="hover:text-[#64ffda]">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/clarence-cabiles-028bb4284/"
              >
                <TbBrandLinkedin />
              </Link>
            </div>
            <div className="hover:text-[#64ffda]">
              <Link
                target="_blank"
                href="https://www.facebook.com/cabiles.clarence"
              >
                <TbBrandFacebook />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-48  mt-8 ml-3 border-l border-[#ccd6f6]"></div>
      </div>
    </div>
  );
};

export default SidebarLeft;
//  <div className="hidden xl:flex w-28 text-gray-400  bg-[#0a192f]  ">
// <div className="pt-72 fixed justify-center pl-16">
//   <div className="mt-72 text-2xl">
//     <div className="space-y-6">
//       <div className="hover:text-emerald-400">
//         <TbBrandGithub />
//       </div>
//       <div className="hover:text-emerald-400">
//         <TbBrandInstagram />
//       </div>
//       <div className="hover:text-emerald-400">
//         <TbBrandTwitter />
//       </div>
//       <div className="hover:text-emerald-400">
//         <TbBrandLinkedin />
//       </div>
//       <div className="hover:text-emerald-400">
//         <TbBrandFacebook />
//       </div>
//     </div>
//   </div>
//   <div className=" border-l-2 h-36 text-gray-400 mt-8 ml-3"></div>
// </div>
// </div>

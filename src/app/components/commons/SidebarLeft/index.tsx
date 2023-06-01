"use client";
import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandFacebook,
} from "react-icons/tb";

const SidebarLeft = () => {
  return (
    <div className="hidden lg:flex w-28 text-gray-400  bg-[#0a192f]  ">
      <div className="pt-72 fixed justify-center pl-16">
        <div className="mt-72 text-2xl">
          <div className="space-y-6">
            <div className="hover:text-emerald-400">
              <TbBrandGithub />
            </div>
            <div className="hover:text-emerald-400">
              <TbBrandInstagram />
            </div>
            <div className="hover:text-emerald-400">
              <TbBrandTwitter />
            </div>
            <div className="hover:text-emerald-400">
              <TbBrandLinkedin />
            </div>
            <div className="hover:text-emerald-400">
              <TbBrandFacebook />
            </div>
          </div>
        </div>
        <div className=" border-l-2 h-36 text-gray-400 mt-8 ml-3"></div>
      </div>
    </div>
  );
};

export default SidebarLeft;

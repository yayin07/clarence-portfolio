"use client";
import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandFacebook,
} from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-[#0a192f]  text-[#ccd6f6] text-sm py-12 text-center xl:hidden pt-28 w-full m-auto max-w-[1200px] px-12 md:px-28 lg:px-52">
      <div className="flex justify-center text-3xl space-x-8 py-6">
        <div className="hover:text-[#64ffda]">
          <a href="https://github.com/yayin07">
            <TbBrandGithub />
          </a>
        </div>
        <div className="hover:text-[#64ffda]">
          <TbBrandInstagram />
        </div>
        <div className="hover:text-[#64ffda]">
          <TbBrandTwitter />
        </div>
        <div className="hover:text-[#64ffda]">
          <TbBrandLinkedin />
        </div>
        <div className="hover:text-[#64ffda]">
          <TbBrandFacebook />
        </div>
      </div>

      <div className=" hover:text-[#64ffda]">
        <div className="  pb-2 flex justify-center  ">
          <div>
            <p>Reference: Brittany Chiang / Cloned by: Clarence Cabiles</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 pb-6">
          <p>5,826 </p>
          <p> 2,746</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

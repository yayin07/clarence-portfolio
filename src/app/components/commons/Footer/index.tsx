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
    <div className="bg-slate-900 text-gray-400 text-sm text-center lg:hidden pt-28">
      <div className="flex justify-center text-3xl space-x-8 pb-6">
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

      <div className=" hover:text-emerald-400">
        <div className="  pb-2 flex justify-center  ">
          <div>
            <p>Designed by Brittany Chiang / Clone by Clarence Cabiles</p>
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

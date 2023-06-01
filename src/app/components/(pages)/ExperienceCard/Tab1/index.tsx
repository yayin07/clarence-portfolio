import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Tab1 = () => {
  return (
    <div>
      <div className="space-y-4 text-[#a8b2d1]">
        <div>
          <h2 className="text-xl font-semibold text-[#ccd6f6]">
            Fullstack Developer
            <a className="text-[#64ffda] pl-2">@ Ticketnation.ph</a>
          </h2>
          <p className="text-sm">July 2022 - Present</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Develop designs that are made by the UI/UX</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Maintaining the codes and APIs of User Side</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Implementing SEO</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Development of Ticketnation Version 2</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Integration of backend APIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;

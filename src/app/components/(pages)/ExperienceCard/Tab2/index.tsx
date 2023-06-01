import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Tab2 = () => {
  return (
    <div>
      <div className="space-y-4 text-[#a8b2d1]">
        <div>
          <h2 className="text-xl font-semibold text-[#ccd6f6]">
            Mid Front-End Developer
            <a className="text-[#64ffda] pl-2">@ Altev Tech.</a>
          </h2>
          <p className="text-sm">September 2021 - June 2022</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Develop designs that are made by the UI/UX for the client
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Building of reusable codes and components for future use and easy
              updates
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Investigation, checking logs and fixing bugs for the maintenance
              of the website
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Consumption of backend APIs</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Creation CRUD endpoints.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab2;

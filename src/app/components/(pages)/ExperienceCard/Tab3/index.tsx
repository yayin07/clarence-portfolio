import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Tab3 = () => {
  return (
    <div>
      <div className="space-y-4 text-[#a8b2d1]">
        <div>
          <h2 className="text-xl font-semibold text-[#ccd6f6]">
            Frontend Developer
            <a className="text-[#64ffda] pl-2">@ Pahiram.ph</a>
          </h2>
          <p className="text-sm">September 2019 - September 2021</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Handle connection between Node API and React JS,
            </p>
          </div>

          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Created inventory of items to keep track of all the items rented
              and availability admin dashboard
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Created user profile to have their portfolios informations client
              side
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Created listing of Clients Item.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab3;

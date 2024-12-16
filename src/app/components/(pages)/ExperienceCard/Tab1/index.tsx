import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Tab1 = () => {
  return (
    <div>
      <div className="space-y-4 text-[#a8b2d1]">
        <div>
          <h2 className="text-xl font-semibold text-[#ccd6f6]">
            Full-Stack Developer
            <Link
              href="https://www.ticketnation.ph/"
              target="_blank"
              className="text-[#64ffda] pl-2"
            >
              @ Ticketnation Philppines
            </Link>
          </h2>
          <p className="text-sm">July 2022 - October 2023</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Bugs fixing, adding features and maintaining pixel perfect deisgns
              on Ticketnations.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Integration of backend APIs on different front-end applications:
              User Website, Admin Dashboard.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">Maintaining the codes and APIs of User Side</p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Development of Ticketnation Social / Chat feature
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Development of Ticketnation Admin Dashboard Version 2
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Develop the layout for Ticketnation Version 3 suited for SEO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;

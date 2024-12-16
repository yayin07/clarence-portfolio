import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Tab2 = () => {
  return (
    <div>
      <div className="space-y-4 text-[#a8b2d1]">
        <div>
          <h2 className="text-xl font-semibold text-[#ccd6f6]">
            Front-End Developer
            <Link
              href="https://www.altev.tech/"
              target="_blank"
              className="text-[#64ffda] pl-2"
            >
              @ Altev Technologies
            </Link>
          </h2>
          <p className="text-sm">Aug 2020 - July 2022</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Collaborate with clients as part of our staff augmentation system,
              providing front-end development expertise and support.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Develop designs that are made by the UI/UX of the client.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Building of reusable codes and compoent for future use and easy
              updates.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Investigation, checking logs and fixing bugs for the maintenance
              of the website.
            </p>
          </div>
          <div className="flex">
            <FaCaretRight className=" text-[#64ffda] mt-1 " />
            <p className="pl-3">
              Integratiofront-end and consuption of backend APIs on the
              front-end application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab2;

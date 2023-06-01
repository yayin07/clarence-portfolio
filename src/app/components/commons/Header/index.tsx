"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScroll from "../Scroll/useScroll";

const Navbar = () => {
  const handleViewResume = () => {
    window.open("/Clarence-Profile.pdf", "_blank");
  };
  const [navClassList, setNavClassList] = useState<any>([]);
  const scroll = useScroll();

  useEffect(() => {
    const List = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      List.push("nav-bar--hidden");
    setNavClassList(List);
  }, [scroll.y, scroll.lastY]);

  return (
    <div>
      <nav className={navClassList.join(" ")}>
        <div className="navbar flex px-12 md:py-8 justify-between items-center  bg-[#0a192f] ">
          <div className="text-2xl py-4 md:py-0 md:text-2xl font-bold text-[#64ffda] md:flex md:justify-center items-center">
            Yayin
          </div>

          <div className="nav hidden lg:flex space-x-8 text-gray-400  font-semibold  ">
            {/*   
           <HeaderLink url="/" title="Home" />
            <HeaderLink url="/about" title="About" />
            <HeaderLink url="/experience" title="Experience" />
            <HeaderLink url="/work" title="Work" />
            <HeaderLink url="/contact" title="Contact" /> */}

            <div className=" flex justify-center items-center space-x-8  ">
              <a className="hover:text-[#64ffda] flex " href="#about">
                <div className="pr-2 text-[#64ffda]"> 01. </div>About
              </a>

              <a className="hover:text-[#64ffda] flex" href="#experience">
                <div className="pr-2 text-[#64ffda]"> 02. </div> Experience
              </a>
              <a className="hover:text-[#64ffda] flex" href="#work">
                <div className="pr-2 text-[#64ffda]"> 03. </div>Work
              </a>
              <a className="hover:text-[#64ffda] flex " href="#contact">
                <div className="pr-2 text-[#64ffda]"> 04. </div>Contact
              </a>
            </div>

            <div
              className="flex justify-center items-center "
              onClick={handleViewResume}
            >
              <div className="rounded-md border-[#64ffda] border-r-2 border-b-2   ">
                <div
                  className="px-4 py-2 hover:-translate-y-1 hover:-translate-x-1 rounded-md text-[#64ffda] border
                   border-[#64ffda] bg-slate-900
                    relative translate-all "
                  style={{ transition: "transform 0.3s" }}
                >
                  Resume
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// interface HeaderLinkProps {
//   title: string;
//   url: string;
// }
// const HeaderLink: React.FC<HeaderLinkProps> = ({ title, url }) => {
//   return (
//     <Link className="" href={url}>
//       <div className=" "> {title}</div>
//     </Link>
//   );
// };

export default Navbar;

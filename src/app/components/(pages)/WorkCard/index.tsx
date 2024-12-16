import React from "react";
import Image from "next/image";
import one from "../../../../../public/one.png";

import toki from "../../../../../public/toki.png";
import altev from "../../../../../public/altev.png";
import tn_phil from "../../../../../public/tn_phil.png";

import { TbBrandGithub } from "react-icons/tb";
import { RiShareBoxLine } from "react-icons/ri";
import Link from "next/link";

const WorkCard = () => {
  return (
    <>
      <div
        className="text-[#ccd6f6] px-12 py-28 w-full flex flex-col gap-12 m-auto max-w-[1200px] "
        id="work"
      >
        <div className="flex flex-row space-x-2  ">
          <div className="text-sm md:text-xl pt-1.5 md:pt-1 text-[#64ffda]">
            03.
          </div>
          <div className="text-xl md:text-2xl font-bold text-[#ccd6f6] w-38 md:w-72">
            Some Things I’ve Built
          </div>
          <div className="border-t border-[#233554] w-32 md:w-56 lg:w-72 mt-4"></div>
        </div>

        {/* ----cards-------- */}
        <div className="flex flex-col gap-16">
          <div className="relative w-full   text-white grid grid-cols-12 rounded-md   ">
            <div className="col-span-12 md:col-span-6 md:z-0  md:translate-x-6 md:h-[20em] h-[25em] border-[#64ffda] md:border rounded-md hover:border-0  ">
              <Link
                target="_blank"
                href="https://www.tokiasia.com/"
                className="absolute  rounded-md w-full h-full bg-[#64ffda]/70 md:bg-[#64ffda]/50 hover:bg-transparent transition-colors duration-300"
              ></Link>

              <Image
                src={toki}
                alt="toki"
                className="w-full h-full rounded-md"
              />
            </div>

            <div className="col-span-12 md:col-span-6 md:z-10  absolute md:static  w-full py-4 md:py-0 px-6 md:px-0  rounded-md bg-[#233554]/80 md:bg-transparent h-full  md:-translate-x-6 flex flex-col justify-between">
              <div className="flex md:justify-end">
                <div className="flex-col md:text-right space-y-4">
                  <div className="text-[#64ffda]">Featured Project</div>
                  <Link
                    target="_blank"
                    href="https://www.tokiasia.com/"
                    className="text-xl font-semibold hover:text-[#64ffda]"
                  >
                    Toki Asia
                  </Link>
                </div>
              </div>
              <div className="md:bg-[#112240] flex md:justify-end py-8 md:pr-6 rounded-md md:text-right md:px-6 text-lg text-[#a8b2d1]">
                <p>
                  Toki is an e-commerce platform specializing in exclusive
                  collectible items, including Toys, LEGO sets, Funko Pops,
                  Sports Cards, and Sneakers.
                </p>
              </div>
              <div className="flex md:justify-end">
                <div className="flex gap-4">
                  <div className="hover:text-[#64ffda] text-2xl">
                    <TbBrandGithub />
                  </div>

                  <div className="hover:text-[#64ffda] text-2xl">
                    <RiShareBoxLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------2-- */}
          <div className="relative w-full   text-white grid grid-cols-12 rounded-md  ">
            <div className="col-span-12 md:col-span-6 md:z-10 z-10 absolute md:static py-4 md:py-0 px-6 md:px-0  rounded-md  transform md:translate-x-6 w-full bg-[#233554]/80 md:bg-transparent  h-full flex flex-col justify-between">
              <div className="flex justify-start">
                <div className="flex-col space-y-4">
                  <div className="text-[#64ffda]">Featured Project</div>
                  <Link
                    target="_blank"
                    href="https://www.ticketnation.ph/"
                    className="text-xl font-semibold hover:text-[#64ffda]"
                  >
                    Ticketnation Philippines
                  </Link>
                </div>
              </div>
              <div className="md:bg-[#112240]  flex justify-start py-8 md:pl-6 rounded-md md:px-6 text-lg text-[#a8b2d1]">
                <p>
                  Ticketnation PH is a ticketing platform based in the
                  Philippines. it provide seamless access to tickets for a
                  variety of events, ensuring a smooth and enjoyable experience
                  for all our users.
                </p>
              </div>
              <div className="flex justify-start">
                <div className="flex gap-4">
                  <div className="hover:text-[#64ffda] text-2xl">
                    <TbBrandGithub />
                  </div>

                  <div className="hover:text-[#64ffda] text-2xl">
                    <RiShareBoxLine />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:z-0   md:-translate-x-6 md:h-[20em] h-[25em] border-[#64ffda] md:border rounded-md hover:border-0 ">
              <Link
                target="_blank"
                href="https://www.ticketnation.ph/"
                className=" absolute  w-full h-full rounded-md bg-[#64ffda]/70 md:bg-[#64ffda]/50  hover:bg-transparent transition-colors duration-300"
              />

              <Image
                src={tn_phil}
                alt="ticketnation"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>

          {/* ----3-------- */}
          <div className="relative w-full   text-white grid grid-cols-12 rounded-md   ">
            <div className="col-span-12 md:col-span-6 md:z-0  md:translate-x-6 md:h-[20em] h-[25em]  rounded-md  ">
              <Link
                target="_blank"
                href="https://altev.tech/"
                className="absolute  rounded-md w-full h-full bg-[#64ffda]/70 md:bg-[#64ffda]/50 hover:bg-transparent transition-colors duration-300"
              />
              <Image
                src={altev}
                alt="one"
                className="w-full h-full rounded-md"
              />
            </div>

            <div className="col-span-12 md:col-span-6 md:z-10  absolute md:static  w-full py-4 md:py-0 px-6 md:px-0  rounded-md bg-[#233554]/80 md:bg-transparent h-full  md:-translate-x-6 flex flex-col justify-between">
              <div className="flex md:justify-end">
                <div className="flex-col md:text-right space-y-4">
                  <div className="text-[#64ffda]">Featured Project</div>
                  <Link
                    target="_blank"
                    href="https://altev.tech/"
                    className="text-xl font-semibold hover:text-[#64ffda]"
                  >
                    Altev Technologies
                  </Link>
                </div>
              </div>

              <div className="md:bg-[#112240] flex md:justify-end py-8 md:pr-6 rounded-md md:text-right md:px-6 text-lg text-[#a8b2d1]">
                <p>
                  Altev Tech is a software development outsourcing company,
                  offering reliable tech partnerships focused on quality and
                  efficiency. We help major corporations leverage technology to
                  drive business growth.
                </p>
              </div>
              <div className="flex md:justify-end">
                <div className="flex gap-4">
                  <div className="hover:text-[#64ffda] text-2xl">
                    <TbBrandGithub />
                  </div>

                  <div className="hover:text-[#64ffda] text-2xl">
                    <RiShareBoxLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;

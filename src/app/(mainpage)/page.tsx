"use client";

import React from "react";
import Container from "../components/commons/Container";
import Typical from "react-typical";
import AboutCard from "../components/(pages)/AboutCard";
import ExperienceCard from "../components/(pages)/ExperienceCard";
import ContactCard from "../components/(pages)/ContactCard";
import OtherCard from "../components/(pages)/Others";

const Home = () => {
  return (
    <div className=" h-full flex flex-col">
      <Container className="pt-24 bg-[#0a192f]">
        <section id="home">
          <div className=" w-full  px-12 md:px-60 ">
            <p className=" md:mt-12 text-[#64ffda] text-xl  mt-16">
              Hi, my name is
            </p>
            <div className="md:text-6xl md:mt-12 text-[#ccd6f6] text-4xl mt-6">
              <span>
                <Typical
                  steps={[
                    "Clarence Cabiles",
                    500,
                    "Mid Front-end Developer",
                    500,
                  ]}
                  loop={Infinity}
                />
              </span>
            </div>
            <h1 className=" md:text-6xl text-[#a8b2d1] text-4xl  mt-4">
              I build things for the web.
            </h1>

            <div className="md:mt-12 text-[#a8b2d1]  mt-4 ">
              <p>
                I’m a software engineer specializing in building (and
                occasionally
              </p>
              <p>
                designing) exceptional digital experiences. Currently, I’m
                focused on
              </p>
              <p>
                building accessible, human-centered products at
                <a className="text-[#64ffda] pl-2">Altev Technologies</a>.
              </p>
            </div>

            <div className=" md:pt-0 flex justify-start my-16">
              <div className="rounded-md  border-[#64ffda] border-r-2 border-b-2   ">
                <div
                  className="p-4 hover:-translate-y-1 hover:-translate-x-1 rounded-md text-white border
                   border-[#64ffda] bg-slate-900
                    relative translate-all "
                  style={{ transition: "transform 0.3s" }}
                >
                  Check out my course!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------About --------------*/}
        <AboutCard />

        {/*----------------------- Expereince------------------ */}
        <ExperienceCard />

        {/*----------------------- Worked------------------ */}
        {/* <WorkCard /> */}

        {/*----------------------- Other------------------ */}
        <OtherCard />

        {/* -----------------------Contact */}
        <ContactCard />
      </Container>
    </div>
  );
};

export default Home;

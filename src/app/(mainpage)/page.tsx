"use client";

import React from "react";
import Container from "../components/commons/Container";
import AboutCard from "../components/(pages)/AboutCard";
import ExperienceCard from "../components/(pages)/ExperienceCard";
import ContactCard from "../components/(pages)/ContactCard";
import OtherCard from "../components/(pages)/Others";
import WorkCard from "../components/(pages)/WorkCard";
import Footer from "../components/commons/Footer";

const Home = () => {
  return (
    <div className=" h-full flex flex-col">
      <Container className="pt-24 bg-[#0a192f]">
        <section id="home">
          <div className=" w-full m-auto max-w-[1200px] px-12 md:px-20 lg:px-40 ">
            <p className=" md:mt-12 text-[#64ffda] text-xl  mt-16">
              Hi, my name is
            </p>

            <div className="md:text-6xl md:mt-12 text-[#ccd6f6] text-4xl mt-6">
              <span>Clarence Cabiles</span>
            </div>

            <h1 className=" md:text-6xl text-[#a8b2d1] text-4xl  mt-4">
              I forge web realms that inspire imagination
            </h1>

            <div className="md:mt-12 text-[#a8b2d1] md:text-xl  mt-4 ">
              <p>
                I am a versatile software engineer with expertise in frontend
                development.
              </p>
              <p>
                With a passion for crafting clean and efficient code, I
                specialize in creating
              </p>
              <p>
                seamless user interfaces and engaging web experiences.
                <a className="text-[#64ffda] pl-2"> Upstatement.</a>.
              </p>
            </div>

            <div className=" md:pt-0 flex justify-start my-16">
              <div className="rounded-md  border-[#64ffda] border-r-2 border-b-2   ">
                <div
                  className="p-4 hover:-translate-y-1 hover:-translate-x-1 rounded-md text-[#64ffda] border
                   border-[#64ffda] 
                     translate-all "
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
        <WorkCard />

        {/*----------------------- Other------------------ */}
        <OtherCard />

        {/* -----------------------Contact */}
        <ContactCard />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;

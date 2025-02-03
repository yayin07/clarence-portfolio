import Link from "next/link";
import React from "react";

const ContactCard = () => {
  return (
    <div>
      <div
        className="bg-[#0a192f] text-[#ccd6f6] text-xl px-12 m-auto max-w-[1200px]"
        id="contact"
      >
        <div className="text-center ">
          <h2 className="text-[#64ffda] pb-4 pt-4"> 4. What's Next?</h2>
          <div className="text-3xl font-semibold md:text-4xl md:font-extrabold  text-[#ccd6f6] py-6">
            <h1>Get In Touch</h1>
          </div>
          <p>
            I'm always open to new opportunities! Feel free to drop me an email,
          </p>
          <p>whether you have a question or just want to connect</p>
          <p>I'll do my best to reply promptly.</p>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=clarencecabiles07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" md:pt-0 flex  justify-center my-16"
          >
            <div className="rounded-md border-[#64ffda] border-r-2 border-b-2   ">
              <div
                className="px-8 p-4  hover:-translate-y-1 hover:-translate-x-1 rounded-md text-[#64ffda] border
                   border-[#64ffda] 
                     translate-all "
                style={{ transition: "transform 0.3s" }}
              >
                Say Hello
              </div>
            </div>
          </Link>
        </div>
        <div className="pt-48  pb-4 space-y-3 hidden lg:flex justify-center text-lg  ">
          <div>
            <p>Reference: Brittany Chiang / Cloned by: Clarence Cabiles</p>
          </div>
        </div>
        <div>
          <p className="pb-4 hidden lg:flex justify-center text-sm">
            5,826 2,746
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

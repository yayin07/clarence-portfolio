import React from "react";

const ContactCard = () => {
  return (
    <div>
      <div className="bg-[#0a192f] text-[#ccd6f6] text-xl px-12 " id="contact">
        <div className="text-center ">
          <h2 className="text-[#64ffda] pb-4 pt-4"> 4. What's Next?</h2>
          <div className="text-3xl font-semibold md:text-4xl md:font-extrabold  text-[#ccd6f6] py-6">
            <h1>Get In Touch</h1>
          </div>
          <p>I’m currently looking for any new opportunities, my Email is</p>
          <p>
            always open. Whether you have a question or just want to say hi,
            I’ll try my
          </p>
          <p>best to get back to you!</p>

          <div className="p-4 pt-12 ">
            <button className="text-[#64ffda] border-[#64ffda] border-2 p-3 px-10 rounded-md">
              Say Hello
            </button>
          </div>
        </div>
        <div className="pt-48  pb-4 space-y-3 hidden lg:flex justify-center  ">
          <div>
            <p>Designed by Brittany Chiang / Clone by Clarence Cabiles</p>
          </div>
        </div>
        <div>
          <p className="pb-4 hidden lg:flex justify-center">5,826 2,746</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

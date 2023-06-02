import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const ExperienceCard = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div
        className="w-full m-auto max-w-[1200px] bg-[#0a192f] px-12 py-20 md:px-28 lg:px-96"
        id="experience"
      >
        <div className="flex flex-row space-x-2 ">
          <div className="text-sm md:text-xl pt-1.5 md:pt-1 text-[#64ffda]">
            02.
          </div>
          <div className="text-lg md:text-2xl font-bold text-[#ccd6f6] w-44 md:w-72 ">
            Where I’ve Worked
          </div>
          <div className="border-t border-[#233554] w-40 md:w-52  mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row py-12 ">
          <div className="flex flex-row md:flex-col justify-center md:justify-start ">
            <button
              className={`px-4 py-2 rounded-l md:rounded-none hover:bg-[#ccd6f6]/10 text-left ${
                activeTab === "tab1"
                  ? "bg-[#ccd6f6]/10 text-[#64ffda] border-[#64ffda] border-b-2 md:border-b-0 md:border-l-2"
                  : "text-[#a8b2d1] border-[#233554] border-b-2 md:border-b-0 md:border-l-2"
              }`}
              onClick={() => openTab("tab1")}
            >
              Ticketnation.ph
            </button>
            <button
              className={`px-4 py-2 hover:bg-[#ccd6f6]/10 text-left ${
                activeTab === "tab2"
                  ? "bg-[#ccd6f6]/10 text-[#64ffda] border-[#64ffda] border-b-2 md:border-b-0 md:border-l-2"
                  : "text-[#a8b2d1] border-[#233554] border-b-2 md:border-b-0 md:border-l-2 "
              }`}
              onClick={() => openTab("tab2")}
            >
              Altev.tech
            </button>
            <button
              className={`px-4 py-2 rounded-r md:rounded-none hover:bg-[#ccd6f6]/10 text-left  ${
                activeTab === "tab3"
                  ? "bg-[#ccd6f6]/10  text-[#64ffda] border-[#64ffda] border-b-2 md:border-b-0 md:border-l-2"
                  : "text-[#a8b2d1] border-[#233554] border-b-2 md:border-b-0 md:border-l-2"
              }`}
              onClick={() => openTab("tab3")}
            >
              Pahiram.ph
            </button>
          </div>

          <div className="p-4 text-gray-200">
            {activeTab === "tab1" && (
              <>
                <Tab1 />
              </>
            )}
            {activeTab === "tab2" && (
              <>
                <Tab2 />
              </>
            )}
            {activeTab === "tab3" && (
              <>
                <Tab3 />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

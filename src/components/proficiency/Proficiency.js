import Lottie from "lottie-react";
import React from "react";
import buildingBlocks from "../../assets/images/buildingBlocks.json";

const Proficiency = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11  ">
      {" "}
      <div className="flex flex-wrap w-full ">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
            Proficiency
          </h1>

          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">
              Frontend/Design
            </p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#1063C4] h-full rounded-full"
                style={{ width: "90%" }}
              ></span>
            </div>
          </div>
          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">Programming</p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#1063C4] h-full rounded-full"
                style={{ width: "70%" }}
              ></span>
            </div>
          </div>
          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">Backend</p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#1063C4] h-full rounded-full"
                style={{ width: "40%" }}
              ></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Lottie animationData={buildingBlocks} />
        </div>
      </div>
    </div>
  );
};

export default Proficiency;

import Lottie from "lottie-react";
import React from "react";
import buildingBlocks from "../../assets/images/buildingBlocks.json";

const Proficiency = () => {
  return (
    <div className="w-[90%] p-5 mx-auto mt-11">
      <div className="flex flex-wrap w-full items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-[50%] animate-fade-left">
          <h1 className="text-[44px] sm:text-[48px] md:text-[56px] font-semibold my-10 dark:text-white text-center md:text-start">
            Proficiency
          </h1>

          {[
            { label: "Frontend/Design", value: "90%" },
            { label: "Programming", value: "70%" },
            { label: "Backend", value: "40%" },
          ].map((skill, index) => (
            <div className="skill" key={index}>
              <p className="my-4 text-[#676767] dark:text-white font-medium">
                {skill.label}
              </p>
              <div className="meter bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
                <span
                  className="block bg-[#1063C4] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: skill.value }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Lottie Animation */}
        <div className="w-full md:w-[45%] mt-10 md:mt-0 flex justify-center animate-fade-right">
          <div className="max-w-[400px] w-full">
            <Lottie animationData={buildingBlocks} loop={true} />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-left {
            animation: fadeLeft 0.8s ease-out both;
          }

          .animate-fade-right {
            animation: fadeRight 0.8s ease-out both;
          }
        `}
      </style>
    </div>
  );
};

export default Proficiency;

import React from "react";
import AntDesignCardComponent from "../antdesignCard/AntDesignCardComponent";

const Experiences = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11  ">
      <div className="w-full ">
        <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
          Experiences
        </h1>
        <div className="mt-11">
          <AntDesignCardComponent />
        </div>
      </div>
    </div>
  );
};

export default Experiences;

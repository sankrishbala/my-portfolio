import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal my-6 md:my-10 dark:text-white text-center md:text-start">
        Reach Out to me!
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start">
          <p className="text-base font-medium tracking-wide uppercase text-[#868E96] my-3">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <div className="flex items-center gap-x-1">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className="my-3 dark:text-white"
            />
            <p className="text-sm dark:text-white">Bengaluru, Karnataka</p>
          </div>
          <p className="text-base dark:text-white">
            Open for opportunities: Yes
          </p>
        </div>
        <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-5 md:mt-0">
          {/* <div className="rounded-full border-4 border-blue-500 overflow-hidden w-60 h-60">
            <img
              src="https://avatars.githubusercontent.com/u/91655038?s=400&u=fbdeb9bccb8e09c7588bf5d6bca6767671f96723&v=4"
              alt="profile pic"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

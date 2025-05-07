import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal my-6 md:my-10 dark:text-white text-center md:text-start">
        Reach Out to me!
      </h1>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start">
  {/* Left Side - Text Content */}
  <div className="w-full md:w-[50%] flex flex-col items-center md:items-start md:pr-8 mx-3">
    <p className="text-base font-medium tracking-wide uppercase text-[#868E96] ">
      Discuss a project or just want to say hi? My Inbox is open for all.
    </p>
    <div className="flex items-center gap-x-2">
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

  {/* Right Side - Google Map */}
  <div className="w-full md:w-[50%] mt-5 md:mt-0 md:pl-8">
    <iframe
      title="Google Map Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.872612807917!2d77.594562!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670cbbbfb15%3A0x1221e2b67dc9d03f!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1621252350492!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl shadow-md"
    ></iframe>
  </div>
</div>

    </div>
  );
};

export default Contact;

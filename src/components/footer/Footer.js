import React from "react";

const Footer = () => {
  return (
    <div className="text-center my-5">
      <p className="text-[#868E96]  dark:text-white">
        Made with{" "}
        <img
          alt="❤️"
          draggable="false"
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2764.png"
          className=" inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
        />{" "}
        By BALAMURUGAN
      </p>
    </div>
  );
};

export default Footer;

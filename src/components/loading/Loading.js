import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/images/loadingAnimation.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <Lottie animationData={loadingAnimation} />
        <div className="text-center">
          <span className="grey-color dark:text-white"> &lt;</span>
          <span className="logo-name dark:text-white">Balamurugan</span>
          <span className="grey-color dark:text-white">/&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;

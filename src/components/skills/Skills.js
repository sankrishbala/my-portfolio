import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import {
  AntDesignOutlined,
  DatabaseOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  faGlobe,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import React from "react";
import manSittingWithLaptop from "../../assets/images/manSittingWithLaptop.json";

const Skills = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-10">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[50%]">
          <Lottie animationData={manSittingWithLaptop} />
        </div>
        <div className="w-full md:w-[50%]">
          <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
            What I do
          </h1>
          <p className="my-10 text-[#868e96] dark:text-white">
            CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <div className="dev-icons">
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  HTML5
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  CSS3
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faSass}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  Sass
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <DatabaseOutlined className="text-[#868e96] dark:text-white" />
                <p className="text-base text-[#868e96] dark:text-white">
                  Redux
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <GithubOutlined className="text-[#868e96] dark:text-white" />
                <p className="text-base text-[#868e96] dark:text-white">
                  GitHub
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faNpm}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  NPM
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faServer}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  API
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  Netlify
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <AntDesignOutlined className="text-[#868e96] dark:text-white" />
                <p className="text-base text-[#868e96] dark:text-white">
                  Ant Design
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  React.js
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  Tailwind CSS
                </p>
              </div>
            </div>
            <div className="dev-icon-wrapper">
              <div className="dev-icon">
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-[#868e96] dark:text-white"
                />
                <p className="text-base text-[#868e96] dark:text-white">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
              Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
              Progressive Web Applications (PWA) in normal and SPA stacks
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
              Integration of third-party services such as Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

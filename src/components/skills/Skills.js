import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNode,
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
  faDatabase as faSolidDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import React from "react";
import manSittingWithLaptop from "../../assets/images/manSittingWithLaptop.json";
const Skills = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-10  ">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[50%]">
          <Lottie animationData={manSittingWithLaptop} />
        </div>
        <div className="w-full md:w-[50%] ">
          <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
            What I do{" "}
          </h1>
          <p className="my-10 text-[#868e96] dark:text-white">
            CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <div className="dev-icons">
            <div className="inline-block mr-5 mb-5 group" name="html-5">
              <FontAwesomeIcon
                icon={faHtml5}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                html-5
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="css3">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                CSS3
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="sass">
              <FontAwesomeIcon
                icon={faSass}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Sass
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="css3">
              <DatabaseOutlined className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]" />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Redux
              </p>
            </div>{" "}
            <div className="inline-block mr-5 mb-5 group" name="swift">
              <GithubOutlined className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]" />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                GitHub
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="npm">
              <FontAwesomeIcon
                icon={faNpm}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                NPM
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="aws">
              <FontAwesomeIcon
                icon={faServer}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                API
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="firebase">
              <FontAwesomeIcon
                icon={faGlobe}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Netlify
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="css3">
              <AntDesignOutlined className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]" />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                antdesign
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="reactjs">
              <FontAwesomeIcon
                icon={faReact}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                React.js
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="css3">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Tailwind css
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="JavaScript">
              <FontAwesomeIcon
                icon={faJs}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Progressive Web Applications ( PWA ) in normal and SPA Stacks
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Integration of third party services such as Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

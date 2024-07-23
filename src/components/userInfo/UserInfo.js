import {
  faFacebookF,
  faGithub,
  faGitlab,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-scroll";
import Resume from "../../assets/Resume/bala_resume.pdf";
import developerImage from "../../assets/images/developerImage.json";
import "./UserInfo.css";
const UserInfo = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-20">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-[70%]">
          <h1 className="text-[30px] sm:text-[60px] leading-[1.1] text-black my-5 flex dark:text-white">
            Hi all, I'm Balamurugan
            <span className="handWave">
              <img
                alt="👋"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                className=" inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
            </span>
          </h1>

          <div className="my-6">
            <p className="text-[30px] leading-[40px] text-[#868e96] dark:text-white">
              A passionate React FrontEnd Developer{" "}
              <img
                alt="🚀"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              having an experience of building Web and Mobile applications with
              JavaScript / React js and some other cool libraries and
              frameworks.
            </p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/sankrishbala" className="icon github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/balamurugan-s-815383187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="icon linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="mailto:sankrishbala17@gmail.com"
              className="icon envelope"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://gitlab.com" className="icon gitlab">
              <FontAwesomeIcon icon={faGitlab} />
            </a>
            <a href="https://facebook.com" className="icon facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://stackoverflow.com" className="icon stackoverflow">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
          <div className="flex">
            <button className="buttonClass">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="dark:text-white cursor-pointer"
              >
                Contact
              </Link>
            </button>

            <button className="buttonClass">
              <a href={Resume} download="bala_resume">
                Download My Resume
              </a>
            </button>
          </div>
        </div>

        <div className="w-full md:w-[30%]">
          <Lottie animationData={developerImage} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

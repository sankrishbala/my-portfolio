import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Events, Link, scrollSpy } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleMobileMenu = (visible) => {
    setIsMobileMenuOpen(visible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-20 bg-white dark:bg-darkBackground shadow-md transition-all duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-5">
        <div>
          <a href="/" className="logo">
            <span className="grey-color dark:text-white"> &lt;</span>
            <span className="logo-name dark:text-white">Bala San</span>
            <span className="grey-color dark:text-white">/&gt;</span>
          </a>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-5">
          <div
            className={`py-4 px-5 ${activeLink === "home" ? "font-bold" : ""}`}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink("home")}
              className="dark:text-white cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "skills" ? "font-bold" : ""
            }`}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveLink("skills")}
              className="dark:text-white cursor-pointer"
            >
              Skills
            </Link>
          </div>{" "}
          <div
            className={`py-4 px-5 ${
              activeLink === "proficiency" ? "font-bold" : ""
            }`}
          >
            <Link
              to="proficiency"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink("proficiency")}
              className="dark:text-white cursor-pointer"
            >
              Proficiency
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "education" ? "font-bold" : ""
            }`}
          >
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink("education")}
              className="dark:text-white cursor-pointer"
            >
              Education
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "experience" ? "font-bold" : ""
            }`}
          >
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink("experience")}
              className="dark:text-white cursor-pointer"
            >
              Work Experiences
            </Link>
          </div>
          <div>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => toggleMobileMenu(true)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-darkBackground z-10 flex flex-col items-center justify-center">
          <button
            onClick={() => toggleMobileMenu(false)}
            className="absolute top-4 right-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div
            className={`py-4 px-5 ${activeLink === "home" ? "font-bold" : ""}`}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActiveLink("home");
              }}
              onClick={() => toggleMobileMenu(false)}
              className="dark:text-white cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "skills" ? "font-bold" : ""
            }`}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActiveLink("skills");
              }}
              onClick={() => toggleMobileMenu(false)}
              className="dark:text-white cursor-pointer"
            >
              Skills
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "proficiency" ? "font-bold" : ""
            }`}
          >
            <Link
              to="proficiency"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveLink("proficiency")}
              className="dark:text-white cursor-pointer"
              onClick={() => toggleMobileMenu(false)}
            >
              Proficiency
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "education" ? "font-bold" : ""
            }`}
          >
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActiveLink("education");
              }}
              onClick={() => toggleMobileMenu(false)}
              className="dark:text-white cursor-pointer"
            >
              Education
            </Link>
          </div>
          <div
            className={`py-4 px-5 ${
              activeLink === "experience" ? "font-bold" : ""
            }`}
          >
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActiveLink("experience");
              }}
              onClick={() => toggleMobileMenu(false)}
              className="dark:text-white cursor-pointer"
            >
              Work Experiences
            </Link>
          </div>

          <div>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Element } from "react-scroll";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experiences from "./components/experiences/Experiences";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Proficiency from "./components/proficiency/Proficiency";
import Skills from "./components/skills/Skills";
import UserInfo from "./components/userInfo/UserInfo";
import Loading from "./components/loading/Loading";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="dark:bg-gray-900">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Element name="home">
            <UserInfo id="home" />
          </Element>
          <Element name="skills">
            <Skills id="skills" />
          </Element>
          <Element name="proficiency">
            <Proficiency id="proficiency" />
          </Element>
          <Element name="education">
            <Education id="education" />
          </Element>
          <Element name="experience">
            <Experiences id="experience" />
          </Element>
          <Element name="contact">
            <Contact id="contact" />
          </Element>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;

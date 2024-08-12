import React from "react";
import GCELogo from "../../assets/images/GCE_logo.jpg"
import { Divider, Space } from "antd";
const Education = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11">
      <div>
        <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
          Education
        </h1>
      </div>

      <Space direction="vertical" size={"middle"}>
        <div className="flex flex-col items-center gap-x-5 flex-wrap md:flex-row">
          <div className="mb-4 md:mb-0">
            <img
              src={GCELogo}
              alt="jnnce"
              className="rounded-3xl w-[28rem] h-[6rem] shadow-2xl "
            />
          </div>
          <div className="text-center md:text-left">
            <Space direction="vertical">
              <h5 className="dark:text-white font-bold text-center md:text-left">
                Goverment College of Engineering, Erode
              </h5>
              <div>
                <h5 className="dark:text-white !font-medium">
                  Bachelor of Engineering
                </h5>
                <p className="dark:text-white font-light text-base">
                  Electrical and Electronics and Engineering
                </p>
                <div>
                  <p className="dark:text-white font-light text-base">
                    August 2015 - May 2019
                  </p>
                </div>
              </div>
            </Space>
          </div>
        </div>
        <Divider />
        {/* <div className="flex flex-col items-center gap-x-5 flex-wrap md:flex-row">
          <div className="mb-4 md:mb-0">
            <img
              src={DVSLogo}
              alt="jnnce"
              className="rounded-full w-24 h-24 shadow-2xl "
            />
          </div>
          <div className="text-center md:text-left">
            <Space direction="vertical">
              <h5 className="dark:text-white font-bold text-center md:text-left">
                D.V.S. Polytechnic
              </h5>
              <div>
                <h5 className="dark:text-white !font-medium">Diploma</h5>
                <p className="dark:text-white font-light text-base">
                  Computer Science and Engineering
                </p>
                <div>
                  <p className="dark:text-white font-light text-base">
                    April 2014 - june 2017
                  </p>
                </div>
              </div>
            </Space>
          </div>
        </div> */}
      </Space>
    </div>
  );
};

export default Education;

import React from "react";
// import ExperienceCard from "../antdesignCard/ExperienceCard";
import AntDesignCardComponent from "../antdesignCard/AntDesignCardComponent";
// import TorryLogo from "../../assets/images/TorryLogo.png";
import TorryLogo from '../../assets/images/TorryLogo.png'

const experienceList = [
  {
    company: "Torry Harris Business Solution",
    title: "Associate Software Engineer",
    subtitle: "Dec 2021 - Present",
    logo: TorryLogo,
    descriptions: [
      "Built reusable React components using Tailwind CSS for a dynamic marketplace.",
      "Integrated Stripe & Razorpay for secure payments in a multi-vendor ecosystem.",
      "Enabled service booking, product purchase, and subscription workflows.",
      "Made platform highly customizable: themes, multilingual support, admin tools.",
    ],
  },
  {
    company: "Airbnb Clone Project",
    title: "Clone Airbnb",
    subtitle: "Jan 2023 - Mar 2023",
    logo: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg",
    descriptions: [
      "Cloned Airbnb frontend using React, Tailwind CSS.",
      "Implemented search, map integration, and responsive property listings.",
      "Used Redux for state management and dummy JSON API for listings.",
      "Optimizing layout and responsiveness for seamless user experience across all devices.",
    ],
  },
  {
    company: "Train Ticket Booking App",
    title: "Train Ticket Booking App",
    subtitle: "May 2023 - Jul 2023",
    logo: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
    descriptions: [
      "Developed a complete train booking UI with seat selection and date picker.",
      "Handled form validation, state transitions, and booking history views.",
      "Simulated real-time seat availability and payment confirmation UI.",
      "Built in React with Ant Design components and integrated with mock APIs.",
    ],
  },
];


const Experiences = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11">
      <h1 className="text-[56px] font-normal my-10 dark:text-white text-center md:text-start">
        Experiences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-11 justify-items-center">
        {experienceList.map((item, idx) => (
          <AntDesignCardComponent key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

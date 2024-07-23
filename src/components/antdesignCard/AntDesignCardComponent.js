import { Avatar, Card } from "antd";
import React from "react";
import TorryLogo from "../../assets/images/TorryLogo.png";

const AntDesignCardComponent = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300, borderRadius: 10, overflow: "hidden" }}
        cover={
          <div
            className="text-center"
            style={{
              height: 200,
              width: "100%",
              background: "linear-gradient(#0C4D97,#1064C5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 30,
              paddingTop: 20,
            }}
          >
            Torry Harris Business Solution
          </div>
        }
      >
        <Card.Meta
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: -65,
            textAlign: "center",
          }}
          avatar={
            <Avatar
              size={80}
              src={TorryLogo}
              style={{
                animation: "spin 6s linear infinite",
              }}
            ></Avatar>
          }
          title={"Associate Software Engineer"}
          description="December 2021 - Present"
        ></Card.Meta>
        <ul style={{ listStyleType: "disc", paddingLeft: 20, marginTop: 10 }}>
          <li>
            Reusable React components for a dynamic marketplace website, using
            Tailwind CSS for UI development.
          </li>
          <li>
            Developed a diverse vendor marketplace with regional pricing
            strategies. Integrated Stripe and Razor Pay for secure payment
            processing.
          </li>
          <li>
            Implemented features like service booking, product purchases, and
            subscription bookings for a seamless user experience.
          </li>
          <li>
            Designed the platform to be highly adaptable, allowing
            administrators to customize themes and enable multilingual
            capabilities.
          </li>
        </ul>
      </Card>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default AntDesignCardComponent;

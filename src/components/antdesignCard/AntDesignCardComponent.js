import { Avatar, Card } from "antd";
import React from "react";

const AntDesignCardComponent = ({ title, subtitle, logo, descriptions, company }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-[1.02] animate-fade-up">
      <Card
        hoverable
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
        cover={
          <div
            style={{
              height: 180,
              background: "linear-gradient(to right, #0C4D97, #1064C5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            {company}
          </div>
        }
      >
        <Card.Meta
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: -50,
            textAlign: "center",
          }}
          avatar={
            <Avatar
              size={80}
              src={logo}
              style={{
                animation: "spin 6s linear infinite",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
          }
          title={<span className="font-semibold text-lg">{title}</span>}
          description={<span className="text-sm text-gray-500">{subtitle}</span>}
        />
        <ul className="mt-5 pl-5 list-disc text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
          {descriptions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Card>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-fade-up {
            animation: fadeUp 0.8s ease-out both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AntDesignCardComponent;

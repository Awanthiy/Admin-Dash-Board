import React from "react";

const Cards = () => {
  const cardData = [
    { title: "Total Admins", value: "5+" },
    { title: "Total Users", value: "1,200+" },
    { title: "Active Sessions", value: "89 Active" },
  ];

  return (
    <div className="mb-6 px-4">
       
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#676BC9] text-center sm:text-left">
        Welcome Back 👋
      </h2>

       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map(({ title, value }) => (
          <div
            key={title}
            className="p-6 rounded-2xl text-center shadow-md transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: "#c2c8f9",
              border: "2px solid #676BC9",
            }}
          >
            <h3 className="font-semibold text-lg md:text-xl text-[#454aab]">
              {title}
            </h3>
            <p className="text-2xl md:text-3xl font-bold mt-2 text-[#2e3277]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

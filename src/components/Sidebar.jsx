import React, { useState } from "react";
import { FiUsers, FiHome, FiBarChart2, FiMenu, FiX } from "react-icons/fi";
import { FaCog } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleTabClick = (label) => {
    setSelectedTab(label);
    if (window.innerWidth < 768) setIsOpen(false);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white bg-[#676BC9]"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 bg-[#676BC9] text-white flex flex-col justify-between
          w-64 min-h-screen
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
          overflow-y-auto
        `}
      >
        <div>
          <h1 className="text-2xl font-bold mt-10 pt-4 pb-10 px-6 select-none">
            EDashBoard
          </h1>

          <nav className="mt-6">
            {[
              { label: "Dashboard", icon: <FiHome /> },
              { label: "Users", icon: <FiUsers /> },
              { label: "Insights", icon: <FiBarChart2 /> },
              { label: "Settings", icon: <FaCog /> },
            ].map((tab) => (
              <button
                key={tab.label}
                onClick={() => handleTabClick(tab.label)}
                className={`
                  flex items-center w-full px-6 py-3 text-left transition duration-200
                  text-white
                  ${
                    selectedTab === tab.label
                      ? "bg-brandPurple-dark"
                      : "hover:bg-brandPurple-light"
                  }
                `}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

         
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;

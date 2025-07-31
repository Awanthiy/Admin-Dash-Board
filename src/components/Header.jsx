import React from "react";
import avatarImg from "../assets/marcus.jpg";
import { FiMenu } from "react-icons/fi";

const Header = () => (
  <div className="flex justify-between items-center px-4 py-2 mb-6 w-full">
     
    <div className="block sm:hidden">
      <FiMenu size={24} className="text-[#676BC9]" />
    </div>

     
    <div className="flex-1"></div>

     
    <div className="flex items-center space-x-2">
      <img
        src={avatarImg}
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-sm sm:text-base font-semibold text-[#676BC9] whitespace-nowrap">
        Marcus Dell
      </span>
    </div>
  </div>
);

export default Header;

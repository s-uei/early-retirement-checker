import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Sharebar() {
  return (
    <div className="flex w-96 h-8 bg-black text-white">
      <div className="flex w-1/3 h-full justify-center items-center border-white border-r">
        <FaTwitter />
      </div>
      <div className="flex w-1/3 h-full justify-center items-center border-white border-r">
        <FaFacebook />
      </div>
      <div className="flex w-1/3 h-full justify-center items-center">
        <FaInstagram />
      </div>
    </div>
  );
}

export default Sharebar;

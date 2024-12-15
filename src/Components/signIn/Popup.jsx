import React from "react";
import { FaCheck } from "react-icons/fa";
import logo from "../../Assests/logo.png";
import { useNavigate } from "react-router-dom";
function Popup({ onClose }) {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleClose = () => {
    navigate("/login"); // Redirect to the check-out page
  };
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-400 rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2 flex absolute top-10 left-1/2 transform -translate-x-1/2">

        {/* Left Side - Logo */}
      <div className="bg-black-100 w-1/3 flex items-center justify-center ">
        <img
          src={logo}
          alt="Intersecting Image"
          className="w-3/4 fill-current text-purple-500"
        />
      </div>

        {/* Right Side - Content */}
        <div className="w-2/3 p-6 flex flex-col justify-center items-start relative">
          {/* Close Button */}
          <button
          onClick={handleClose}
          className="text-pink-700 hover:text-red-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 absolute top-4 right-4 z-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

          {/* Message Section */}
          <div className="flex items-center mb-4">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <h2 className="text-lg font-bold text-gray-800">
              Password reset Successfully.
            </h2>
          </div>
          <p className="text-gray-600 text-sm">Go back and login!</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;

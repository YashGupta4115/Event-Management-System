// import React, { useState } from "react";
// import logo from "../../Assests/logo.png";
// import login from "../../Assests/login.png";

// function Forgetpass() {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen relative">

//         {/* Cross Icon */}
//         <div className="absolute top-4 right-4 z-20">
//         <button
//           onClick={() => console.log("Close button clicked")}
//           className="text-pink-700 hover:text-red-500 focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Left side */}

//       <div className="basis-1/4 bg-gradient-to-br from-black  to-pink-950 flex flex-col items-center justify-start text-white pt-29">
//         <div className="p-5 mt-28">
//           <h1 className="text-4xl font-semibold">Hello,</h1>
//           <p className="mt-1 text-2xl">Lost your way? Let's help you back on track!</p>
//         </div>
//       </div>

//       {/* Right side */}

//       <div className="basis-3/4 p-10 flex items-center justify-center mb-8 ">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-screen-sm z-10 relative"
//         >
//           <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center ">
//                 Forgot Password
//           </h2>

//                 {/* Password Field */}
//                 <div className="mb-4 relative">
//                 <input
//                   type="name"
//                   id="name"
//                   placeholder=" "
//                   className="border rounded-lg p-3 w-full peer"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label
//                   htmlFor="name"
//                   className={`absolute left-3 transform transition-all 
//                     ${formData.name
//                       ? 'top-[-0.75rem] text-sm text-gray-400 bg-white px-1'
//                       : 'top-3 text-base text-gray-400'} 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                     peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//                 >
//                   Enter Name
//                 </label>
//               </div>


//           {/* Email Field */}
//           <div className="mb-4 relative">
//             <input
//               type="email"
//               id="email"
//               placeholder=" "
//               className="border rounded-lg p-3 w-full peer mb-7"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label
//               htmlFor="email"
//               className={`absolute left-3 transform transition-all 
//                 ${formData.email
//                   ? 'top-[-0.75rem] text-sm text-gray-400 bg-white px-1'
//                   : 'top-3 text-base text-gray-400'} 
//                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                 peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                 peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//             >
//               Email
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
//           >
//             Sent OTP
//           </button>
//       </form>
//       </div>

//         {/* Image 1 */}
//         <div
//         className="absolute inset-0 flex items-center justify-start ml-11 mt-5"
//         style={{ zIndex: 1 }}
//       >
//         <img
//           src={login}
//           alt="Intersecting Image"
//           className="absolute w-1/3  transform translate-x-[-50%] mt-20"
//           style={{ left: "23%", pointerEvents: "none" }}
//         />
//       </div>

//       {/* Image 2 */}
//       <div className="absolute inset-0 flex items-center justify-start ml-10 mt-4" style={{ zIndex: 1 }}>
//         <img
//           src={logo}
//           alt="Intersecting Image"
//           className="absolute w-42 h-42 transform translate-x-[-60%] -translate-y-[170%]"
//           style={{ left: "10%", pointerEvents: "none" }}
//         />
//       </div>
      
//     </div>
//   );
// }

// export default Forgetpass;



import React, { useState } from "react";
import logo from "../../Assests/logo.png";
import login from "../../Assests/login.png";
import { useNavigate } from "react-router-dom";

function Forgetpass() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Left Column (for larger screens) */}
      <div className="basis-1/4 bg-gradient-to-br from-black to-pink-950 flex flex-col items-center justify-start text-white pt-29 hidden md:flex">
        <div className="p-5 mt-28">
          <h1 className="text-4xl font-semibold">Hello,</h1>
          <h1 className="text-3xl font-bold">Lost your way?</h1>
          <p className="mt-1 text-2xl">Let's help you back on track!</p>
        </div>
      </div>

      {/* Right Column (form area) */}
      <div className="basis-3/4 p-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-screen-sm z-10 relative"
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center">
            Forget Password
          </h2>

          {/* Email Field */}
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="border rounded-lg p-5 w-full peer mb-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-3 transform transition-all 
                ${formData.email
                  ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                  : "top-3 text-base text-gray-400"}
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
            >
             Enter Email
            </label>
          </div>

  

          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
          >
            Send OTP
          </button>

          <p className="text-sm text-left mt-4 ml-5">
            Want to Login?{" "}
            <span
              className="text-pink-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

         
        </form>
      </div>

      {/* Image 1 */}
      <div
        className="absolute inset-0 overflow-hidden flex items-center justify-start mt-10 hidden md:flex"
        style={{ zIndex: 1 }}
      >
        <img
          src={login}
          alt="Intersecting Image"
          className="absolute w-1/3 transform translate-x-[-50%] mt-20 w-80"
          style={{ left: "23%", pointerEvents: "none" }}
        />
      </div>

      {/* Image 2 */}
      <div
        className="absolute inset-0 flex items-center justify-start ml-10 mt-20 hidden md:flex"
        style={{ zIndex: 1 }}
      >
        <img
          src={logo}
          alt="Intersecting Image"
          className="absolute w-42 h-42 transform translate-x-[-60%] -translate-y-[170%]"
          style={{ left: "10%", pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export default Forgetpass;

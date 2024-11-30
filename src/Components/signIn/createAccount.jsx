
// import React, { useState } from "react";
// import logo from "../../Assests/logo.png";
// import login from "../../Assests/login.png";
// import { useNavigate } from "react-router-dom";

// function CreateAccountPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
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
//       <div className="basis-1/4 bg-gradient-to-br from-black  to-pink-950 flex flex-col items-center justify-start text-white pt-29">
//         <div className="p-5 mt-28">
//           <h1 className="text-4xl font-semibold">Hello,</h1>
//           <h1 className="text-3xl font-bold">Create an Account-</h1>
//           <p className="mt-1 text-2xl">Your dream event awaits!</p>
//         </div>
//       </div>

//       <div className="basis-3/4 p-4 flex items-center justify-center">

//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-screen-sm z-10 relative"
//         >
//           <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center ">
//             Create an Account
//           </h2>

//           {/* Name Fields */}
//           <div className="flex gap-4 mb-4">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 id="firstName"
//                 placeholder=" "
//                 className="border rounded-lg p-5 w-full peer"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               <label
//                 htmlFor="firstName"
//                 className={`absolute left-3 transform transition-all 
//                   ${
//                     formData.firstName
//                       ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
//                       : "top-3 text-base text-gray-400"
//                   } 
//                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                   peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                   peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//               >
//                 First Name
//               </label>
//             </div>
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 id="lastName"
//                 placeholder=" "
//                 className="border rounded-lg p-5 w-full peer"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               <label
//                 htmlFor="lastName"
//                 className={`absolute left-3 transform transition-all 
//                   ${
//                     formData.lastName
//                       ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
//                       : "top-3 text-base text-gray-400"
//                   } 
//                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                   peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                   peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//               >
//                 Last Name
//               </label>
//             </div>
//           </div>

//           {/* Email Field */}
//           <div className="mb-4 relative">
//             <input
//               type="email"
//               id="email"
//               placeholder=" "
//               className="border rounded-lg p-5 w-full peer mb-2"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label
//               htmlFor="email"
//               className={`absolute left-3 transform transition-all 
//                 ${
//                   formData.email
//                     ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
//                     : "top-3 text-base text-gray-400"
//                 } 
//                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                 peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                 peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//             >
//               Email
//             </label>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4 relative">
//             <input
//               type="password"
//               id="password"
//               placeholder=" "
//               className="border rounded-lg p-5 w-full peer"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <label
//               htmlFor="password"
//               className={`absolute left-3 transform transition-all 
//                     ${
//                       formData.password
//                         ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
//                         : "top-3 text-base text-gray-400"
//                     } 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                     peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//             >
//               Password
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
//           >
//             Create Account
//           </button>

//           <p className="text-sm text-left mt-4 ml-5">
//             Already have an account?{" "}
//             <span
//               className="text-pink-400 font-semibold cursor-pointer hover:underline"
//               onClick={() => navigate("/sign-up")}
//             >
//               Login
//             </span>
//           </p>

//           {/* Social Signup Section */}
//           <div className="mt-4 ml-5">
//             <h3 className="text-center text-gray-500 mb-4">
//               ------ Or Sign Up With ------
//             </h3>
//             <div className="flex justify-between items-center gap-4">
//               {/* Google */}
//               <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
//                 <img
//                   src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
//                   alt="Google"
//                   className="w-6 h-6"
//                 />
//                 <span className="text-gray-700 text-sm font-semibold">
//                   Google
//                 </span>
//               </div>
//               {/* Facebook */}
//               <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
//                   alt="Facebook"
//                   className="w-6 h-6"
//                 />
//                 <span className="text-gray-700 text-sm font-semibold">
//                   Facebook
//                 </span>
//               </div>
//               {/* Twitter */}
//               <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
//                   alt="X"
//                   className="w-6 h-6"
//                 />
//                 <span className="text-gray-700 text-sm font-semibold">X</span>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Image 1 */}
//       <div
//   className="absolute inset-0 overflow-hidden flex items-center justify-start mt-10"
//   style={{ zIndex: 1 }}
// >

//         <img
//           src={login}
//           alt="Intersecting Image"
//           className="absolute w-1/3  transform translate-x-[-50%] mt-20 w-80"
//           style={{ left: "23%", pointerEvents: "none" }}
//         />
//       </div>

//       {/* Image 2 */}
//       <div
//         className="absolute inset-0 flex items-center justify-start ml-10 mt-20"
//         style={{ zIndex: 1 }}
//       >
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

// export default CreateAccountPage;







import React, { useState } from "react";
import logo from "../../Assests/logo.png";
import login from "../../Assests/login.png";
import { useNavigate } from "react-router-dom";

function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
          <h1 className="text-3xl font-bold">Create an Account-</h1>
          <p className="mt-1 text-2xl">Your dream event awaits!</p>
        </div>
      </div>

      {/* Right Column (form area) */}
      <div className="basis-3/4 p-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-screen-sm z-10 relative"
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center">
            Create an Account
          </h2>

          {/* Name Fields */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                id="firstName"
                placeholder=" "
                className="border rounded-lg p-5 w-full peer"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="firstName"
                className={`absolute left-3 transform transition-all 
                  ${
                    formData.firstName
                      ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                      : "top-3 text-base text-gray-400"
                  } 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                  peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
              >
                First Name
              </label>
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                id="lastName"
                placeholder=" "
                className="border rounded-lg p-5 w-full peer"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="lastName"
                className={`absolute left-3 transform transition-all 
                  ${
                    formData.lastName
                      ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                      : "top-3 text-base text-gray-400"
                  } 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                  peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
              >
                Last Name
              </label>
            </div>
          </div>

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
                ${
                  formData.email
                    ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                    : "top-3 text-base text-gray-400"
                } 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
            >
              Email
            </label>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder=" "
              className="border rounded-lg p-5 w-full peer"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className={`absolute left-3 transform transition-all 
                    ${
                      formData.password
                        ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                        : "top-3 text-base text-gray-400"
                    } 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                    peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
          >
            Create Account
          </button>

          <p className="text-sm text-left mt-4 ml-5">
            Already have an account?{" "}
            <span
              className="text-pink-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/sign-up")}
            >
              Login
            </span>
          </p>

          {/* Social Signup Section */}
          <div className="mt-4 ml-5">
            <h3 className="text-center text-gray-500 mb-4">
              ------ Or Sign Up With ------
            </h3>
            <div className="flex justify-between items-center gap-4">
              {/* Google */}
              <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  Google
                </span>
              </div>
              {/* Facebook */}
              <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  Facebook
                </span>
              </div>
              {/* Twitter */}
              <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                  alt="X"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 text-sm font-semibold">X</span>
              </div>
            </div>
          </div>
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
          className="absolute w-1/3  transform translate-x-[-50%] mt-20 w-80"
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

export default CreateAccountPage;








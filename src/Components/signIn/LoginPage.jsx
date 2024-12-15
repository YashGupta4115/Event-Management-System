// import React, { useState } from "react";
// import logo from "../../Assests/logo.png";
// import login from "../../Assests/login.png";

// function LoginPage() {
//   const [formData, setFormData] = useState({
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
//           <p className="mt-1 text-2xl">Log in and let the planning begin!</p>
//         </div>
//       </div>

//       {/* Right side */}

//       <div className="basis-3/4 p-10 flex items-center justify-center mb-8 ">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-screen-sm z-10 relative"
//         >
//           <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center ">
//             Login
//           </h2>

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

//               {/* Password Field */}
//               <div className="mb-4 relative">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder=" "
//                   className="border rounded-lg p-3 w-full peer"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label
//                   htmlFor="password"
//                   className={`absolute left-3 transform transition-all 
//                     ${formData.password
//                       ? 'top-[-0.75rem] text-sm text-gray-400 bg-white px-1'
//                       : 'top-3 text-base text-gray-400'} 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
//                     peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
//                 >
//                   Password
//                 </label>
//               </div>


//           <button
//             type="submit"
//             className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
//           >
//             Login
//           </button>
          
//           <div className="flex justify-between items-center mb-4">
//               <div className="cursor-pointer">
//                 <input type="checkbox" id="remember" className="mr-2 cursor-pointer" />
//                 <label htmlFor="remember" className="text-sm cursor-pointer">
//                   Remember me?
//                 </label>
//               </div>
//               <a href="#" className="text-sm text-pink-500">
//                 Forgot password?
//               </a>
//             </div>

//           {/* Social Signup Section */}
//           <div className="mt-4 ml-5">
//             <h3 className="text-center text-gray-500 mb-4">------ Or Sign Up With ------</h3>
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

// export default LoginPage;







import React, { useState } from "react";
import logo from "../../Assests/logo.png";
import login from "../../Assests/login.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, 
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
          <h1 className="text-4xl font-semibold">Welcome Back,</h1>
          <h1 className="text-3xl font-bold">Login to your Account</h1>
          <p className="mt-1 text-2xl">We missed you!</p>
        </div>
      </div>

      {/* Right Column (form area) */}
      <div className="basis-3/4 p-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-screen-sm z-10 relative"
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center">
            Login
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
                    ${formData.password
                      ? "top-[-0.75rem] text-sm text-gray-400 bg-white px-1"
                      : "top-3 text-base text-gray-400"}
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] 
                    peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1`}
            >
              Password
            </label>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 w-3 h-3 mt-1"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-5"
          >
            Login
          </button>

          <p className="text-sm text-left mt-4 ml-5">
            Don't have an account?{" "}
            <span
              className="text-pink-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </span>
          </p>
          
          <p className="text-sm text-left mt-4 ml-5">
            Forget Password?{" "}
            <span
              className="text-pink-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/forget-pass")}
            >
              Reset
            </span>
          </p>

          {/* Social Login Section */}
          <div className="mt-4 ml-5">
            <h3 className="text-center text-gray-500 mb-4">
              ------ Or SignIn With ------
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

export default LoginPage;

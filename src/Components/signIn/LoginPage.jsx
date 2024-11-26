import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Left Side */}
      <div className="basis-1/4 bg-gradient-to-b from-black to-purple-800 text-white p-10 flex flex-col items-center justify-start">
        <div className="p-5 mt-20">
          <h1 className="text-4xl font-semibold">Hello,</h1>
          <p className="mt-1 text-2xl font-Syne">Log in and let the planning begin!</p>
        </div>
      </div>

      {/* Right side */}
      <div className="basis-3/4 p-10 flex items-center justify-center mb-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-screen-sm"
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center ">
            Login
          </h2>

          {/* Email Field */}
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="border rounded-lg p-3 w-full peer mb-7"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 text-sm transform transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1"
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
              className="border rounded-lg p-3 w-full peer"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-3 text-gray-500 text-sm transform transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.75rem] peer-focus:text-sm peer-focus:text-gray-400 bg-white px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-pink-400 mt-8"
          >
            Login
          </button>

          <div className="flex justify-between items-center mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">
                  Remember me?
                </label>
              </div>
              <a href="#" className="text-sm text-pink-500">
                Forgot password?
              </a>
          </div>

          {/* Social Signup Section */}
          <div className="mt-10">
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-sm text-gray-500">Or SignUp with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex justify-between items-center gap-4">
              {/* Google */}
              <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="	https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 text-sm font-semibold">Google</span>
              </div>
              {/* Facebook */}
              <div className="flex items-center gap-2 p-3 border rounded-lg w-1/3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 text-sm font-semibold">Facebook</span>
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
    </div>
  );
}

export default LoginPage;

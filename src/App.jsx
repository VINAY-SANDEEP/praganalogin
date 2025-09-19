import React from "react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-white">
      {/* Background Hover Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-40 h-40 bg-white/20 rounded-full blur-2xl top-10 left-10 animate-pulse hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute w-56 h-56 bg-purple-400/30 rounded-full blur-3xl bottom-20 right-20 hover:rotate-12 transition-transform duration-500"></div>
        <div className="absolute w-32 h-32 bg-blue-300/30 rounded-full blur-2xl bottom-32 left-32 hover:scale-125 transition-transform duration-500"></div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md px-8 py-10 rounded-2xl shadow-xl bg-white/20 backdrop-blur-lg border border-white/30 text-gray-800">
        {/* College Logo Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            LOGO
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Login
        </h2>

        {/* Input Fields */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Email / Username</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/60 focus:bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/60 focus:bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all duration-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-blue-500"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-700">
          <a href="#" className="hover:text-purple-600 transition-colors">
            Forgot Password?
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}

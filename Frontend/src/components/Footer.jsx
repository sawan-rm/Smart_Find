import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#ed8033]">Portal</span>
          </h1>
          <p className="text-sm text-gray-600 mt-3">
            Find your dream job with ease. We connect talented people with the
            best companies around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-[#ed8033] cursor-pointer">Home</li>
            <li className="hover:text-[#ed8033] cursor-pointer">Browse Jobs</li>
            <li className="hover:text-[#ed8033] cursor-pointer">Companies</li>
            <li className="hover:text-[#ed8033] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Popular Categories</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-[#ed8033] cursor-pointer">Frontend Developer</li>
            <li className="hover:text-[#ed8033] cursor-pointer">Backend Developer</li>
            <li className="hover:text-[#ed8033] cursor-pointer">Data Science</li>
            <li className="hover:text-[#ed8033] cursor-pointer">DevOps Engineer</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © 2026 Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
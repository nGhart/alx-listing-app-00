import React from "react";
import Image from "next/image";

const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Apartments"];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* <Image
              src="/logo.png"               alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            /> */}
            <p>ALX</p>
          </div>

          <nav className="hidden md:flex space-x-6">
            {accommodationTypes.map((type) => (
              <a
                key={type}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {type}
              </a>
            ))}
          </nav>

          <div className="flex-1 mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search accommodations..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 py-2 border-t">
        <nav className="flex space-x-4 overflow-x-auto">
          {accommodationTypes.map((type) => (
            <a
              key={type}
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
            >
              {type}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

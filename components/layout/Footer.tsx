import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-start">
            {/* <Image
              src="/logo.png" 
              alt="Logo"
              width={120}
              height={40}
              className="object-contain mb-4"
            /> */}
            <p>ALX</p>
            <p className="text-gray-400 text-sm">
              Find your perfect stay anywhere in the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Mansion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Countryside
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Apartments
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

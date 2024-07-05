import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex items-end justify-end">
      <div className="underline ">
        <span className="bg-white h-3 w-3 rounded-full inline-block"></span>
        <span className="ml-2 text-white">Course</span>
        <div className="absolute bottom-0 left-0 h-1 w-10 "></div>
      </div>
    </nav>
  );
};

export default Navbar;

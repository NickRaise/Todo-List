import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-custom-nav-color text-white p-3 shadow-md">
      <div className="logo">
        <span className="font-bold text-3xl hover:cursor-pointer">ToDoLu</span>
      </div>
      <div className="flex gap-0 list-none">
        <li className="text-lg w-24 text-center hover:cursor-pointer hover:font-semibold ">
          Home
        </li>
        <li className="text-lg w-24 text-center hover:cursor-pointer hover:font-semibold ">
          Your Tasks
        </li>
      </div>
    </nav>
  );
};

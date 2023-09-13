import React from "react";
import dropdownStyle from "./NavBar/NavBar.module.css";
import Link from "next/link";
export default function FrontDropDownItem({ menuItems }) {
  return (
    <ul
      className={`min-w-[200px] absolute  bg-white text-black opacity-0 ${dropdownStyle.dropdownItems}`}
    >
      <li className="w-full h-[2px] bg-primary"></li>
      {menuItems &&
        menuItems.map((item, index) => {
          return (
            <>
              <li className="">{item.label}</li>
              <li className="w-full h-[0.1px] bg-gray-300"></li>
            </>
          );
        })}
    </ul>
  );
}

import React from "react";
import Image from "next/image";
import { Dropdown } from "antd";
const appearance = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Dashboard
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Menu
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Settings
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Widgets
      </a>
    ),
  },
];

const addNew = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Pages
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Post
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Users
      </a>
    ),
  },
];
const rightLinks = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="font-poppins"
      >
        Logout
      </a>
    ),
  },
];
export default function AdminBar() {
  return (
    <div className="h-9">
      <div className="bg-[#333333] fixed w-full z-10 top-0 px-5 ">
        <div className="flex items-center justify-between flex-wrap py-1  ">
          {/* Left Side */}
          <div className="flex">
            <Image
              src="/frontend/lg-logo.webp"
              width={105}
              height={100}
              className="mx-5"
              alt="logo"
            />

            <div className="space-x-3 flex">
              <Dropdown
                className="text-xs font-poppins"
                menu={{ items: appearance }}
                placement="bottomLeft"
                arrow
              >
                <p className="p-1 text-white text-xs cursor-pointer flex items-center">
                  Appearance
                  <ion-icon
                    name="chevron-down-outline"
                    className="px-2"
                  ></ion-icon>
                </p>
              </Dropdown>

              <Dropdown
                className="text-xs font-poppins"
                menu={{ items: addNew }}
                placement="bottomLeft"
                arrow
              >
                <p className="p-1 text-white text-xs cursor-pointer flex items-center">
                  Add new
                  <ion-icon
                    name="chevron-down-outline"
                    className="px-2"
                  ></ion-icon>
                </p>
              </Dropdown>
              <p className="p-1 text-white text-xs cursor-pointer flex items-center">
                Edit this page
              </p>
            </div>
          </div>
          {/* Right side */}
          <Dropdown
            className="text-xs font-poppins"
            menu={{ items: rightLinks }}
            placement="bottomRight"
            arrow
          >
            <p className="p-1 text-white text-xs cursor-pointer flex items-center">
              Add new
              <ion-icon name="chevron-down-outline" className="px-2"></ion-icon>
            </p>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

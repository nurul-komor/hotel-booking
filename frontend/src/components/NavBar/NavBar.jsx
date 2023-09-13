import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Dropdown, Space } from "antd";
import DropdownMenu from "../FrontDropDown";
import DropdownStyle from "./NavBar.module.css";
const navPageLinks1 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Our Rooms
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Room Details
      </a>
    ),
  },
];
const navPageLinks2 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Gallery
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        FAQ
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Team
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Team Details
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Services
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Service Detail
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        About us
      </a>
    ),
  },
  {
    key: "8",
    label: (
      <a
        target="_blank"
        className="w-full px-5 py-3 inline-block"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Contact
      </a>
    ),
  },
];
export default function NavBar() {
  return (
    <section className="absolute  w-full text-white  z-10 hidden lg:block">
      <div className="bg-primary">
        <div className="w-full max-w-[1200px] mx-auto px-5 py-3">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <p className="flex items-center space-x-1">
                <ion-icon name="time-outline"></ion-icon>
                <span>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</span>
              </p>
              <p className="flex items-center space-x-1">
                <ion-icon name="call-outline"></ion-icon>
                <a
                  href="tel:+908 987 877 09"
                  className="hover:text-primaryLite cursor-pointer font-bold"
                >
                  +908 987 877 09
                </a>
              </p>
            </div>
            <div className="space-x-5">
              <select name="" id="" className="bg-transparent outline-none">
                <option value="" selected className="text-black px-2">
                  {/* <Image
                    src="https://www.nicepng.com/png/detail/6-63506_usa-png-clipart-american-flag-icon-png.png"
                    height={5}
                    width={5}
                  /> */}
                  English
                </option>
                <option value="" className="text-black px-2">
                  BD
                </option>
              </select>
              <select name="" id="" className="bg-transparent outline-none">
                <option value="" selected className="text-black px-2">
                  USD
                </option>
                <option value="" className="text-black px-2">
                  BDT
                </option>
              </select>
              <Link href="#" className="space-x-2">
                <i class="fas fa-sign-in-alt"></i>
                <span className="text-sm">Login</span>
              </Link>
              <Link href="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "rgba(9, 9, 9, 0.459)" }} className="py-3">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/frontend/lg-logo.webp"
                width={180}
                height={180}
                alt="logo"
              />
            </Link>
            <ul className="space-x-5 flex font-medium ">
              <li className=" cursor-pointer">
                <Link href="#" className="p-2 hover:text-primaryLite">
                  Home
                </Link>
              </li>

              <li className={`cursor-pointer ${DropdownStyle.customDropdown}`}>
                <Link href="#" className="p-2 hover:text-primaryLite">
                  Our Rooms
                </Link>
                {/* dropdown */}
                <div className="relative">
                  <DropdownMenu menuItems={navPageLinks1} />
                </div>
              </li>
              <li className={`cursor-pointer ${DropdownStyle.customDropdown}`}>
                <Link href="#" className="p-2 hover:text-primaryLite">
                  Pages
                </Link>
                {/* dropdown */}
                <div className="relative">
                  <DropdownMenu menuItems={navPageLinks2} />
                </div>
              </li>

              <li className=" cursor-pointer">
                <Link href="#" className="p-2 hover:text-primaryLite">
                  Blogs
                </Link>
              </li>
            </ul>
            <div>
              <Link
                className="px-10 py-5 border-2 border-transparent hover:border-[#BE9874] bg-[#BE9874] hover:bg-primary duration-150 inline-block"
                href="#"
              >
                RESERVATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Dropdown, Space } from "antd";
const navPageLinks = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
        className=" pl-3 pr-5"
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
    <section className="absolute  w-full text-white  z-10">
      <div className="bg-primary">
        <div className="w-full max-w-[1200px] mx-auto px-5 py-3">
          <div className="flex justify-between">
            <div>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</div>
            <div>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</div>
          </div>
        </div>
      </div>
      <div className="bg-transparent py-3">
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
            <div className="space-x-5">
              <Link href="#">Home</Link>
              <Link href="#">Our Rooms</Link>
              <Dropdown
                menu={{
                  items: navPageLinks,
                }}
                arrow
                placement="bottomLeft"
              >
                <Link href="#" className="hover:text-yellow-700 duration-100">
                  Pages
                </Link>
              </Dropdown>

              <Link href="#">Blogs</Link>
            </div>
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

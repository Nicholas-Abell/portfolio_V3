"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={`${
        shadow && "shadow shadow-gray-500"
      } bg-darker text-light w-full fixed h-20 z-[100] hover:duration-200 ease-in no-print`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => scrollToTop()}
            className="w-[100px] h-[45px] flex justify-center items-center gap-2 p-2 shadow-lg hover:shadow-xl rounded-xl uppercase"
          >
            <FaHome size={25} className="w-full h-full" />
            <h3>Home</h3>
          </button>
        </div>
        <div>
          <FramerMotionWrapper variant="fromTop" duration={0.8}>
            <ul className="hidden md:flex font-bold">
              <Link
                href="/#projects"
                scroll={true}
                className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                scroll={true}
                className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer"
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                scroll={true}
                className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer"
              >
                Contact
              </Link>
            </ul>
          </FramerMotionWrapper>
        </div>
        <button onClick={handleMobileNav} className="md:hidden">
          <AiOutlineMenu
            size={25}
            className="cursor-pointer ease-in duration-200"
          />
        </button>
      </div>

      <div
        className={`${
          mobileNav ? "w-[75%] sm:w-[60%]" : "w-0"
        } fixed top-0 z-50 h-screen bg-darker ease-in-out duration-500 overflow-hidden`}
      >
        <div className="w-full flex justify-between items-center p-4 border-b-2 border-gray-400">
          <h1 className="dark:text-gray-100 text-black">Nick A</h1>
          <button
            onClick={handleMobileNav}
            className="p-3 rounded-full cursor-pointer"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <ul className="flex flex-col w-full gap-12 mt-8">
            <li className="ml-10 uppercase cursor-pointer">
              <Link
                href="/#projects"
                scroll={true}
                onClick={() => setMobileNav(false)}
              >
                Projects
              </Link>
            </li>
            <li className="ml-10 uppercase cursor-pointer">
              <Link
                href="/#skills"
                scroll={true}
                onClick={() => setMobileNav(false)}
              >
                Skills
              </Link>
            </li>
            <li className="ml-10 uppercase cursor-pointer">
              <Link
                href="/#contact"
                scroll={true}
                onClick={() => setMobileNav(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="pt-40">
          <p>{"Let's Connect"}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY >= 90) {
        setVisible(true);
      } else setVisible(false);
    };
    window.addEventListener("scroll", handleVisible);
  }, []);

  useEffect(() => {
    if (mobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [mobileNav]);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleHome() {
    if (mobileNav) setMobileNav(false);
    scrollToTop();
  }

  return (
    <div
      className={
        visible
          ? "bg-darker text-light w-full fixed h-12 z-[100] hover:duration-200 ease-in no-print shadow shadow-gray-500"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleHome()}
            className="w-[100px] h-[45px] flex justify-center items-center gap-2 p-2 shadow-lg hover:shadow-xl rounded-xl uppercase"
          >
            <FaHome size={25} className="w-full h-full" />
            <h3>Home</h3>
          </button>
        </div>
        <button onClick={handleMobileNav}>
          <AiOutlineMenu
            size={25}
            className="cursor-pointer ease-in duration-200"
          />
        </button>
      </div>

      <div
        className={`${
          mobileNav ? "w-full" : "w-0"
        } fixed top-0 left-0 pt-12 z-50 h-screen ease-in-out duration-500 overflow-hidden`}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black/70 -z-10"></div>
        <div className="w-full flex justify-between items-center p-4 border-b-2 border-gray-400 text-light z-50">
          <h1 className="text-light">Nick A</h1>
          <button
            onClick={handleMobileNav}
            className="p-3 rounded-xl cursor-pointer bg-main border shadow-sm shadow-gray-400"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div
          className={`${
            !mobileNav && "opacity-0"
          } w-full h-full flex justify-center items-center pb-32`}
        >
          <div className="w-[80%] md:w-[50%] mx-auto grid grid-cols-4 gap-4 items-stretch">
            <div className="rounded-lg bg-darker col-span-3 z-10 border shadow-md shadow-gray-400 py-8" />
            <button
              onClick={() => handleHome()}
              className="rounded-lg bg-main col-span-1 z-10 border shadow-md shadow-gray-400 py-4 text-light flex justify-center items-center"
            >
              <FaHome size={40} />
            </button>
            <Link
              onClick={handleMobileNav}
              href="#skills"
              className="rounded-lg bg-accent col-span-2 z-10 border shadow-md shadow-gray-400 py-6 text-center text-lg md:text-3xl font-bold"
            >
              Skills
            </Link>
            <Link
              onClick={handleMobileNav}
              href="#projects"
              className="rounded-lg bg-darkAccent col-span-2 z-10 border shadow-md shadow-gray-400 py-6 text-center text-lg md:text-3xl font-bold"
            >
              Projects
            </Link>
            <Link
              onClick={handleMobileNav}
              href="#contact"
              className="rounded-lg bg-main col-span-3 z-10 border shadow-md shadow-gray-400 py-6 text-center text-lg md:text-3xl font-bold"
            >
              Contact
            </Link>
            <div className="rounded-lg bg-accent col-span-1 z-10 border shadow-md shadow-gray-400 py-8"></div>
            <div className="rounded-lg bg-darkAccent col-span-1 z-10 border shadow-md shadow-gray-400 py-8"></div>
            <div className="rounded-lg bg-darker col-span-3 z-10 border shadow-md shadow-gray-400 py-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

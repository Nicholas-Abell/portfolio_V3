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
      className={
        shadow
          ? `w-full fixed h-20 shadow-xl z-[100] bg-[#ECF0F3] hover:duration-200 ease-in no-print`
          : `w-full fixed h-20 z-[100] bg-white no-print`
      }
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
            <ul className="hidden md:flex text-gray-900 font-bold">
              <Link
                href="/#skills"
                scroll={true}
                className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer"
              >
                About Me
              </Link>
              <li className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer">
                Skills
              </li>
              <li className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer">
                Projects
              </li>
              <li className="ml-10 uppercase hover:text-[#1251ff] cursor-pointer">
                Contact
              </li>
            </ul>
          </FramerMotionWrapper>
        </div>
        <div onClick={handleMobileNav} className="md:hidden">
          <AiOutlineMenu
            size={25}
            className="cursor-pointer ease-in duration-200"
          />
        </div>
      </div>

      <div
        className={
          mobileNav
            ? "md:hidden fixed left-0 top-0 bg-black/70 h-screen w-full"
            : "hidden"
        }
      >
        <div
          className={
            mobileNav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10 ease-in duration-500"
          }
        >
          <div className="w-full flex justify-between items-center p-4 border-b-2 border-gray-400">
            <h1 className="dark:text-gray-100 text-black">Nick A</h1>
            <div
              onClick={handleMobileNav}
              className="neon p-3 rounded-full cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <ul className="flex flex-col w-full gap-12 mt-8">
              <Link href="/#about">
                <li className="ml-10 uppercase cursor-pointer">About Me</li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 uppercase cursor-pointer">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 uppercase cursor-pointer">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 uppercase cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p>{"Let's Connect"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

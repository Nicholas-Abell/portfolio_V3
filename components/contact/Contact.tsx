"use client";
import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-12 px-2.5 xl:px-20 py-24"
    >
      <FramerMotionWrapper variant="fromLeft">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl">Contact</h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom" className="w-full p-4">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 shadow-gray-400 rounded-xl p-4 text-center border shadow-md">
            <div className="p-8 lg:p-4 h-full">
              <div className="w-full h-auto flex justify-center items-center">
                <Image
                  src="/profile.png"
                  alt="profile"
                  height={280}
                  width={280}
                  className="rounded-xl"
                />
              </div>
              <div className="py-8">
                <h2 className="py-4 dark:text-red-600">Nick Abell</h2>
                <p>Software Developer</p>
              </div>
              <p className="uppercase pt-24 text-center">Connect With Me</p>
              <div className="flex items-center justify-center w-full gap-4 py-2 text-gray-800">
                <Link
                  href="https://github.com/Nicholas-Abell"
                  className="rounded-full p-2 shadow-lg shadow-gray-400 ease-in-out duration-200 hover:text-purple-700 shadow:text-purple-700"
                >
                  <SiGithub size={30} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nicholas-abell-348807192/"
                  className="rounded-full p-2 shadow-lg shadow-gray-400 ease-in-out duration-200 hover:text-blue-400 hover:shadow-purple-200"
                >
                  <SiLinkedin size={30} />
                </Link>
                <Link
                  href="mailto:nicholaswabell@gmail.com"
                  className="rounded-full p-2 shadow-lg shadow-gray-400 ease-in-out duration-200 hover:text-red-400 hover:shadow-purple-200"
                >
                  <SiGmail size={30} />
                </Link>
              </div>
            </div>
          </div>
          <div
            id="email"
            className="col-span-3 w-full shadow-gray-400 rounded-xl lg:p-4 border shadow-md"
          >
            <div className="p-4">
              <form
                action="https://formsubmit.co/nicholaswabell@gmail.com"
                method="POST"
              >
                <div className="grid grid-cols-2 gap-2 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone #</label>
                    <input
                      name="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="text-area"
                    rows={6}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <input
                  type="hidden"
                  name="_next"
                  value="https://nicholas-abell-mr5i.vercel.app/"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting me. I will get in touch soon."
                />
                <button className="w-full my-4 p-4 hover:duration-200 ease-in text-gray-800 bg-blue-200 hover:bg-blue-100 border rounded-lg duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <button
            onClick={scrollToTop}
            className="rounded-full cursor-pointer p-3 shadow-lg shadow-gray-300 hover:shadow-sm hover:shadow-purple-200 duration-200 ease-in-out"
          >
            <HiChevronDoubleUp size={30} className="m-auto" />
          </button>
        </div>
      </FramerMotionWrapper>
    </div>
  );
};

export default Contact;

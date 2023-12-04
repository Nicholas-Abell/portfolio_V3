"use client";
import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

const Contact = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-12 mx-auto px-2.5 xl:px-20 py-24">
      <FramerMotionWrapper variant="fromBottom">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl">Contact</h2>
        </div>
      </FramerMotionWrapper>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-3 lg:col-span-2 shadow-gray-400 rounded-xl p-4 text-center">
          <div className="p-8 lg:p-4 h-full">
            <div className="w-full h-auto flex justify-center items-center">
              <Image
                src="/profile.png"
                alt="profile"
                height={600}
                width={600}
                className="rounded-xl"
              />
            </div>
            <div className="py-8">
              <h2 className="py-4 dark:text-red-600">Nick Abell</h2>
              <p>Front End Developer</p>
            </div>
            <div>
              <p className="uppercase pt-12 text-center">Connect With Me</p>
            </div>
          </div>
        </div>
        <div
          id="email"
          className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4"
        >
          <div className="p-4">
            <form
              action="https://formsubmit.co/nicholaswabell@gmail.com"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
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
                  rows={10}
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
              <button className="w-full my-4 p-4 hover:duration-200 ease-in text-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div
          onClick={scrollToTop}
          className="rounded-full cursor-pointer p-3 border border-black"
        >
          <HiChevronDoubleUp size={30} className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

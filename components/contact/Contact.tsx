"use client";
import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-12 py-24"
    >
      <FramerMotionWrapper variant="fromLeft">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl">Contact</h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom" className="w-full p-4">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 grid grid-cols-3 grid-rows-4 text-center gap-4">
            <div className="h-full w-full row-span-3 col-span-3 border shadow-md shadow-gray-400 bg-gradient-to-r from-dark to-darker text-light rounded-xl z-10">
              <div className="w-full h-auto flex justify-center items-center py-8">
                <Image
                  src="/profile.png"
                  alt="profile"
                  height={280}
                  width={280}
                  className="rounded-xl"
                />
              </div>
              <div className="py-8">
                <h2 className="py-4 text-main">Nick Abell</h2>
                <p>Software Developer</p>
              </div>
            </div>
            <Link
              href="https://github.com/Nicholas-Abell"
              className="row-span-2 z-[2]"
            >
              <motion.div
                whileHover={{
                  rotate: [-5, 5, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="bg-main w-full h-full rounded-lg flex
            justify-center items-center border shadow-md shadow-gray-400"
              >
                <SiGithub size={45} className="text-light" />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholas-abell-348807192/"
              className="row-span-2 z-[1]"
            >
              <motion.div
                whileHover={{
                  rotate: [5, -5, 5, -5, 0],
                  transition: { duration: 0.3 },
                }}
                initial={{ x: "-105%", y: "-110%" }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  y: { type: "spring", stiffness: 50, delay: 0 },
                  x: { type: "spring", stiffness: 60, delay: 1 },
                }}
                className="bg-accent rounded-lg flex justify-center items-center w-full h-full border shadow-md shadow-gray-400"
              >
                <SiLinkedin size={45} className="text-light" />
              </motion.div>
            </Link>
            <Link href="mailto:nicholaswabell@gmail.com" className="row-span-2">
              <motion.div
                whileHover={{
                  rotate: [-5, 5, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 1 }}
                className="bg-darkAccent w-full h-full rounded-lg flex
            justify-center items-center z-[1] border shadow-md shadow-gray-400"
              >
                <SiGmail size={45} className="text-light" />
              </motion.div>
            </Link>
          </div>

          <div
            id="email"
            className="col-span-3 w-full shadow-gray-400 rounded-xl lg:p-4 border shadow-md bg-gradient-to-r from-dark to-darker"
          >
            <div className="p-4">
              <form
                action="https://formsubmit.co/nicholaswabell@gmail.com"
                method="POST"
              >
                <div className="grid sm:grid-cols-2 gap-2 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-light">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-light">
                      Phone #
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light">
                    Message
                  </label>
                  <textarea
                    name="text-area"
                    rows={6}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <input type="hidden" name="_next" value="/" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting me. I will get in touch soon."
                />
                <button className="w-full my-4 p-4 hover:duration-200 ease-in text-gray-800 bg-darkAccent hover:bg-accent rounded-lg duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </FramerMotionWrapper>
      <div className="w-full px-4">
        <motion.button
          whileHover={{ y: "-5%" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-full flex justify-center bg-dark text-light py-12 shadow-lg shadow-gray-400 border rounded-xl"
        >
          <HiChevronDoubleUp size={30} className="m-auto" />
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;

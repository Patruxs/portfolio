"use client";

import { TbFileDownload } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import WorkAndEducation from "@/components/WorkAndEducation";
import ProjectHome from "@/components/ProjectHome";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const projectRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const contactRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  return (
    <>
      <Navbar
        homeRef={homeRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <div className="flex justify-center w-full" ref={homeRef}>
        <div className="flex flex-col w-[90vw] md:w-2/3 lg:w-1/2">
          <div className="mt-32 md:hidden text-4xl dark:text-white font-rollingStone">
            {"hi there! I'm Phat."}
          </div>
          <div className="flex flex-row md:mt-32 mb-12 justify-between items-center">
            <div className="flex flex-col justify-center h-full w-1/2 md:w-3/5">
              <div className="hidden md:block text-6xl dark:text-white font-rollingStone">
                {"hi there! I'm Phat."}
              </div>
              <div className="pt-6 dark:text-white">
                {"I turn real-world problems"}
              </div>

              <div className=" dark:text-white">
                {"into scalable, production-ready software."}
              </div>

              <div className="flex flex-row gap-2 mt-6 ml-2 items-center animate-pulse">
                <div className="h-2 w-2 bg-lime-500 rounded-full"></div>
                <div className=" dark:text-white font-bold">
                  {"Available for work · remote/hybrid"}
                </div>
                {/* <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <div className=" dark:text-white font-bold">
                  {"Currently unavailable"}
                </div> */}
              </div>
              <div className="flex flex-row gap-5 items-center mt-6">
                <a
                  className="py-1 px-4 shadow-md border-1 border-base-100 dark:border-base-400 dark:text-white rounded-md  flex items-center gap-3 text-base-500 hover:bg-base-100/50 dark:hover:bg-base-400"
                  href="/files/Lai_Thuan_Phat_CV.pdf"
                  download
                >
                  Resume
                  <TbFileDownload className="text-lg" />
                </a>
                <a
                  className="hover:text-base-300 cursor-pointer hover:underline"
                  href="https://www.linkedin.com/in/patruxs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-xl text-base-400 dark:text-white dark:hover:text-white hover:text-base-500" />
                </a>
                <a
                  className="hover:text-base-300 cursor-pointer hover:underline"
                  href="https://github.com/Patruxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-xl text-base-400 dark:text-white dark:hover:text-white hover:text-base-500" />
                </a>
                <a
                  className="hover:text-base-300 cursor-pointer hover:underline"
                  href="mailto:laithuanphat.work@gmail.com"
                  aria-label="Email"
                >
                  <GoMail className="text-xl text-base-400 dark:text-white dark:hover:text-white hover:text-base-500" />
                </a>
              </div>
            </div>
            {/* tablet & desktop */}
            <Image
              src="/images/profile.jpg"
              alt="Lai Thuan Phat"
              width={250}
              height={300}
              priority
              className={`shadow-md rounded-md hidden md:block`}
            />
            {/* mobile */}
            <Image
              src="/images/profile.jpg"
              alt="Lai Thuan Phat"
              width={160}
              height={192}
              priority
              className={`shadow-md rounded-md md:hidden mb-12`}
            />
          </div>

          <WorkAndEducation />
          <div ref={projectRef}>
            <ProjectHome />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <div className="my-8"></div>
        </div>
      </div>
    </>
  );
}

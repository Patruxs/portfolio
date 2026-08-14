"use client";

import { useState } from "react";

import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("laithuanphat.work@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="w-full flex flex-col py-16 mt-12 border-t-1 border-b-1 border-base-400/20 dark:border-base-100/20">
        <div className="text-3xl font-rollingStone">contact</div>
        <div className="w-full flex flex-col gap-4 mt-8 md:ml-6">
          <div className="flex flex-row gap-2 items-center">
            <GoMail />
            <div className="flex flex-row gap-2">
              <div>Email :</div>
              <div>laithuanphat.work@gmail.com</div>
            </div>
            <button
              className="flex items-center cursor-pointer mt-1"
              onClick={handleCopy}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? (
                <TbCopyCheck className="text-base-500 hover:text-base-300 dark:text-base-100 dark:hover:text-base-100/60" />
              ) : (
                <TbCopy className="text-base-500 hover:text-base-300 dark:text-base-100 dark:hover:text-base-100/60" />
              )}
            </button>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiPhone />
            <div className="flex flex-row gap-2">
              <div>Phone :</div>
              <div>+84 919 113 275</div>
            </div>
          </div>
          <div className="flex flex-row gap-2  items-center">
            <FiGithub />

            <div className="flex flex-row gap-2 items-center">
              <div>Github :</div>
              <a
                className="hover:text-base-400/80 dark:hover:text-base-100/60 cursor-pointer hover:underline text-sm md:text-base"
                href="https://github.com/Patruxs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Patruxs
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full items-center">
            <FiLinkedin />
            <div className="flex flex-row gap-2 items-center">
              <div>Linkedin :</div>
              <a
                className="hover:text-base-400/80 dark:hover:text-base-100/60 cursor-pointer hover:underline text-sm md:text-base"
                href="https://www.linkedin.com/in/patruxs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/patruxs/
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-base-400 dark:text-base-100 font-light">
          {`I'm always excited to make new connections, hear about new ideas,
          and explore potential opportunities, so please feel free to reach out
          to me :)`}
        </div>
      </div>
    </>
  );
}

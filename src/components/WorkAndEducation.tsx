"use client";

import { useState } from "react";
import { LuBuilding2, LuGraduationCap } from "react-icons/lu";

export default function WorkAndEducation() {
  const [selectedWork, setSelectedWork] = useState(true);

  return (
    <div className="w-full flex flex-col mt-8">
      <div className="w-full p-1 bg-base-400/10 dark:bg-base-400 rounded-lg">
        <div className="flex flex-row w-full">
          <button
            type="button"
            aria-pressed={selectedWork}
            className={`${
              selectedWork
                ? "bg-white dark:bg-base-500 text-base-500 dark:text-base-100 shadow-xs shadow-base-400/30"
                : "text-base-400/80 dark:text-base-100/50"
            } rounded-md py-1 w-1/2 text-center cursor-pointer`}
            onClick={() => setSelectedWork(true)}
          >
            Work
          </button>
          <button
            type="button"
            aria-pressed={!selectedWork}
            className={`${
              selectedWork
                ? "text-base-400/80 dark:text-base-100/50"
                : "bg-white dark:bg-base-500 text-base-500 dark:text-base-100 shadow-xs shadow-base-400/30"
            } rounded-md py-1 w-1/2 text-center cursor-pointer`}
            onClick={() => setSelectedWork(false)}
          >
            Education
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full border-1 border-base-400/10 dark:border-base-400 rounded-xl mt-2 shadow-md shadow-base-400/20">
        <ul className="ml-10 pt-4 pb-8 border-l border-base-400/30 dark:border-base-400">
          {/* Experiences */}
          <li className={`relative ml-10 py-4 ${selectedWork ? "" : "hidden"}`}>
            <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
              <span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full size-12 border-1 border-base-400/30 text-base-500">
                <LuBuilding2 className="text-2xl" />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>Mar 2026</span>
                <span> - </span>
                <span>Jul 2026</span>
              </time>
              <h2 className="font-semibold leading-none">Saigon Precision</h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                IT Support Intern
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Managed and resolved technical incidents through the ticketing
                  system while meeting SLA requirements.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Installed and configured Windows/Linux systems, business
                  applications, printers, and peripheral devices.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Administered user accounts, permissions, password resets, and
                  access revocation across Active Directory, Google Workspace,
                  and Microsoft 365.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Diagnosed and resolved LAN/WAN, Wi-Fi, VPN, TCP/IP, DNS, and
                  DHCP connectivity issues locally and remotely.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Supported Windows/Linux servers, security patching, antivirus
                  deployment, and network access control.
                </li>
              </ul>
            </div>
          </li>
          {/* Education */}
          <li className={`relative ml-10 py-4 ${selectedWork ? "hidden" : ""}`}>
            <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
              <span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full size-12 border-1 border-base-400/30 text-base-500">
                <LuGraduationCap className="text-2xl" />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <h2 className="font-semibold leading-none">
                Saigon Technology University
              </h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                Software Engineering
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Coursework: Operating Systems, Computer Networks, Database
                  Systems, Database Administration, Information Security,
                  Cryptography, Systems Analysis & Design.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Led cross-functional student teams of 5-6 members across
                  multiple software projects, coordinating task assignments,
                  sprint progress, and collaboration among backend, frontend,
                  and AI roles.
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Used Jira and GitHub branching workflows to track
                  deliverables, address integration blockers, and support
                  timely project completion.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

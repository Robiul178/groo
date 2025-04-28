"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const GropperNav = () => {
  const pathname = usePathname();

  return (
    <footer className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between text-slate-800">
        <div className="relative right-[35px]">
          <Link href="/">
            <img src="/logo.svg" alt="dfh" />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-10 mt-2 max-sm:hidden font-semibold text-cyan-700">
            <li>
              <a
                href="/"
                className={`${
                  pathname === "/"
                    ? "border-b  text-cyan-950 border-slate-500 "
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                {" "}
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`${
                  pathname === "/services"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/how-it-works"
                className={`${
                  pathname === "/how-it-works"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                How It Work
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                {" "}
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/event"
                className={`${
                  pathname === "/event"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                {" "}
                Events
              </a>
            </li>
            <li>
              <a
                href="/user/dashboard"
                className={`${
                  pathname === "/user/dashboard"
                    ? "border-b  text-cyan-950 border-slate-500"
                    : ""
                }`}
              >
                {" "}
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/signup">
            <button className="py-1 px-4 border border-slate-600">Login</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default GropperNav;

import React from "react";
import Link from "next/link";
import logo from "../images/Earnbee.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <Image src={logo} alt="Logo" className="h-10 sm:h-14 w-auto" />
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Copyright All Right Reserved —
          <Link
            href="/admin"
            className="text-gray-500 ml-1"
            rel="noopener noreferrer"
          >
            Are you an Admin?
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href={"mailto:ranasahbg7777@gmail.com"}
            className="text-gray-400 flex items-center gap-2"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 -2.5 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-300.000000, -922.000000)"
                  fill="currentColor"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z"
                      id="email-[#1573]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            ranasahbg7777@gmail.com
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

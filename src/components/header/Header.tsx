// components/header/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center relative z-10">
        <Link href="/" className="flex-row flex items-center">
          <Image
            src="/logo.png"
            alt="House Of Dragons Logo"
            width={40}
            height={40}
            className="h-10"
          />
          <h2 className="text-xl md:text-2xl font-bold ml-2">
            House of Dragons
          </h2>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative md:flex md:space-x-3 bg-black md:bg-transparent w-full md:w-auto left-0 top-full md:top-auto md:pt-0 md:px-0`}
        >
          <li>
            <Link
              href="/"
              className={`block md:border md:border-gray-500 rounded-md text-sm px-4 py-2 hover:bg-gray-800 transition ${
                isMenuOpen ? "mt-2" : "md:mt-0"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block md:border md:border-gray-500 rounded-md text-sm px-4 py-2 hover:bg-gray-800 transition"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block md:border md:border-gray-500 rounded-md text-sm px-4 py-2 hover:bg-gray-800 transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

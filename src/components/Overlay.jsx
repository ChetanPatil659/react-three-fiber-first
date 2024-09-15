import { Scroll } from "@react-three/drei";
import React from "react";

function Overlay() {
  return (
    <Scroll html style={{ width: "100vw", height: "100vh" }}>
      <nav className="border-gray-200 fixed top-0 left-0 z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Navbar
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <i class="ri-menu-4-line text-3xl"/>
          </button>
        </div>
      </nav>

      <footer className="rounded-lg shadow bottom-0 left-0 w-full absolute">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Chetan Patil ™
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Scroll>
  );
}

export default Overlay;

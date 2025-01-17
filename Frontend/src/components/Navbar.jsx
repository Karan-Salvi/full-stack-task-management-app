import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  const cart = useSelector((store) => store.cart.cart);
  return (
    <nav class=" border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center logo-style text-2xl font-semibold tracking-wider text-orange-500 whitespace-nowrap dark:text-white">
            FoodSwift.
          </span>
        </a>
        <div class="flex items-center gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to={"/cart"}
            class="relative inline-flex items-center p-1 text-sm font-medium text-center text-white  rounded-lg"
          >
            <IoCartOutline className="text-2xl text-orange-500 font-bold" />
            <span class="sr-only">Notifications</span>
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[0.65rem] font-bold text-white bg-orange-600 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900">
              {cart?.length}
            </div>
          </Link>

          {user.username == "undefined" ? (
            <Link
              to={"/login"}
              className="text-white w-full  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-base roboto font-bold  px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Login
            </Link>
          ) : (
            <>
              <button
                type="button"
                class="flex text-sm bg-orange-500 rounded-full md:me-0 focus:ring-4 focus:ring-orange-100 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/default.jpg"
                  alt="user photo"
                />
              </button>

              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Username
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user.username}
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      class="block mx-1 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-orange-50 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block mx-1 px-4 py-2  hover:bg-orange-50 rounded-md  text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul class="flex flex-col gap-1 font-medium p-4 md:p-0 mt-4 border border-orange-100 rounded-md  bg-orange-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                class="block py-2 px-3 poppins hover:text-white md:hover:bg-white text-orange-500 
                hover:bg-orange-500 rounded md:bg-transparent md:text-gray-500 md:hover:text-orange-400 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/menu"}
                class="block py-2 px-3  poppins text-orange-500  md:hover:bg-white   hover:text-white hover:bg-orange-400 rounded md:bg-transparent md:text-gray-500 md:hover:text-orange-400 md:p-0"
                aria-current="page"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to={"/order"}
                class="block py-2 px-3 poppins  text-orange-500 md:hover:bg-white hover:text-white hover:bg-orange-400 rounded md:bg-transparent md:text-gray-500 md:hover:text-orange-400 md:p-0"
                aria-current="page"
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

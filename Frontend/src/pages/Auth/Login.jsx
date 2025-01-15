import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="w-full font-sans height-screen flex justify-center items-center  bg-orange-300 p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2  rounded-lg h-9/12 w-11/12 lg:w-9/12 p-6 bg-white">
          <div className="hidden md:flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-lg">
            <img
              src="/images/welcome.png"
              alt=""
              className="order-3 w-full h-full"
            />
          </div>

          <div className="bg-white p-5 md:p-12 w-full ">
            <h1 class="self-center mb-2 logo-style text-2xl font-semibold tracking-wider text-orange-500 whitespace-nowrap dark:text-white">
              FoodSwift.
            </h1>
            <h1 className="text-2xl  font-bold text-gray-800 mb-4">
              Login to your account
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome back! Please login to your account.
            </p>

            <form className="space-y-6 w-full">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="roboto peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="roboto peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="text-white w-full  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-base roboto font-bold  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Login
              </button>
              <p className="text-gray-600 text-center mt-4 roboto">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-600 hover:underline roboto"
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

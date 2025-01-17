import React, { useRef } from "react";
import useCreateMenuItem from "../hooks/useCreateMenuItem";

const CreateMenu = ({ ActiveCreate }) => {
  const nameElement = useRef();
  const categoryElement = useRef();
  const priceElement = useRef();
  const { loading, error, success, createMenuItem } = useCreateMenuItem();

  const handleCreateMenu = async (event) => {
    event.preventDefault();
    let item = {
      name: nameElement.current.value,
      category: categoryElement.current.value,
      price: parseInt(priceElement.current.value),
    };
    await createMenuItem(item);
    window.location.reload();
  };
  return (
    <div className="absolute bg-black w-full height-screen opacity-90 z-50 flex justify-center items-center">
      <form
        onSubmit={handleCreateMenu}
        class="w-96 mx-auto opacity-100 bg-white py-10 px-8 flex flex-col justify-center rounded-md shadow-lg"
        style={{ opacity: 1 }}
      >
        <div className=" flex justify-end items-center">
          <button
            className="text-xl text-gray-600 font-bold"
            onClick={ActiveCreate}
          >
            X
          </button>
        </div>
        <h1 className="mb-5 text-center font-bold poppins text-2xl text-orange-500">
          Create Food Item
        </h1>

        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter the name of Food Item:
          </label>
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            ref={nameElement}
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            ref={categoryElement}
          >
            <option className="hover:bg-orange-300" selected>
              Choose Category
            </option>
            <option className="hover:bg-orange-300" value="appetizers">
              Appetizers
            </option>
            <option className="hover:bg-orange-300" value="maincourse">
              Main Course
            </option>
            <option className="hover:bg-orange-300" value="sidedishes">
              Side Dishes
            </option>
            <option className="hover:bg-orange-300" value="desserts">
              Desserts
            </option>
            <option className="hover:bg-orange-300" value="salads">
              Salads
            </option>
            <option className="hover:bg-orange-300" value="beverages">
              Beverages
            </option>
            <option className="hover:bg-orange-300" value="soups">
              Soups
            </option>
            <option className="hover:bg-orange-300" value="grills">
              Grills
            </option>
            <option className="hover:bg-orange-300" value="vegetarian">
              Vegetarian
            </option>
            <option className="hover:bg-orange-300" value="vegan">
              Vegan
            </option>
            <option className="hover:bg-orange-300" value="seafood">
              Sea Food
            </option>
            <option className="hover:bg-orange-300" value="pasta">
              Pasta
            </option>
            <option className="hover:bg-orange-300" value="burgers">
              Burger
            </option>
            <option className="hover:bg-orange-300" value="sandwiches">
              Sandwiches
            </option>
            <option className="hover:bg-orange-300" value="pizza">
              Pizza
            </option>
          </select>
        </div>

        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Prize
          </label>
          <input
            type="number"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required
            ref={priceElement}
          />
        </div>

        <button
          type="submit"
          className="text-white w-full  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-base roboto font-bold  px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Create Item
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;

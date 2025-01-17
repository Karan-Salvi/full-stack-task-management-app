import React, { useEffect, useState } from "react";
import Menucard from "../../components/Menucard";
import useFetchMenu from "../../hooks/useFetchMenu";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../../store/menuSlice";
import useSearchMenu from "../../hooks/useSearchMenu";

const Menu = () => {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    { id: 1, name: "Desserts" },
    { id: 2, name: "Main Course" },
    { id: 3, name: "Starters" },
    { id: 5, name: "Snacks" },
  ];

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  let { menu, loading, error } = useFetchMenu(
    "http://localhost:5000/api/v1/menu"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length > 0) {
      dispatch(menuActions.setInitialMenu(menu));
    }
  }, [menu, dispatch]);

  const menuItems = useSelector((store) => store.menu.menu);

  let { searchQuery, handleSearchChange, filteredMenu } =
    useSearchMenu(menuItems);

  return (
    <>
      <section class="w-full h-auto flex flex-col justify-start items-center">
        <div class="w-11/12 py-5 flex justify-between items-center">
          <h1 class="self-center poppins text-2xl font-extrabold tracking-wider text-black whitespace-nowrap">
            Explore Categories.
          </h1>

          <form class="flex items-center max-w-sm">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 block w-full ps-5 p-2.5 "
                onChange={handleSearchChange}
                placeholder="Search Food..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 "
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div class="w-11/12 flex justify-between items-start gap-4">
          <div className="w-3/12 h-96 rounded-md">
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-[300px]">
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">₹{priceRange[0]}</span>
                      <span className="text-gray-600">₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF4D00]"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            onChange={() => toggleCategory(category.name)}
                            className="w-4 h-4 rounded border-gray-300 text-[#FF4D00] focus:ring-[#FF4D00]"
                          />
                          <span className="ml-3 text-gray-700 group-hover:text-[#FF4D00] transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500"></span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Availability
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="availability"
                        className="w-4 h-4 rounded border-gray-300 text-[#FF4D00] focus:ring-[#FF4D00]"
                      />
                      <span className="ml-3 text-gray-700 group-hover:text-[#FF4D00] transition-colors">
                        In Stock
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="availability"
                        className="w-4 h-4 rounded border-gray-300 text-[#FF4D00] focus:ring-[#FF4D00]"
                      />
                      <span className="ml-3 text-gray-700 group-hover:text-[#FF4D00] transition-colors">
                        Out of Stock
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
            {filteredMenu.map((item) => (
              <Menucard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

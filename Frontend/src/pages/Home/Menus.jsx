import React, { useEffect, useState } from "react";
import Menucard from "../../components/Menucard";
import useFetchMenu from "../../hooks/useFetchMenu";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../../store/menuSlice";
import useSearchMenu from "../../hooks/useSearchMenu";
import CreateMenu from "../../components/CreateMenu";
import UpdateMenuCard from "../../components/UpdateMenuCard.";

const Menus = () => {
  const [createActive, setCreateActive] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [id, setId] = useState();

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
    `${import.meta.env.VITE_API_URL}/api/v1/menu`
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

  const ActiveCreate = () => {
    setCreateActive(!createActive);
  };

  const handleId = (id) => {
    setId(id);
    setUpdateActive(true);
  };

  const setUpdateNo = () => {
    setUpdateActive(false);
  };

  return (
    <>
      {updateActive && <UpdateMenuCard id={id} ActiveCreate={setUpdateNo} />}

      {createActive && <CreateMenu ActiveCreate={ActiveCreate} />}

      <section class="w-full h-auto flex flex-col justify-start items-center">
        <div class="w-11/12 py-5 flex justify-between items-center">
          <h1 class="self-center poppins text-2xl font-extrabold tracking-wider text-black whitespace-nowrap">
            Top Dishes near you.
          </h1>
        </div>

        <div class="w-11/12 flex justify-between items-start gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
            {filteredMenu.map((item) => (
              <Menucard key={item._id} item={item} handleId={handleId} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menus;

import { useState } from "react";

const useSearchMenu = (menu) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMenu = menu.filter((item) => {
    const query = searchQuery.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      searchQuery === "" ||
      item.availability.toString() === searchQuery
    );
  });

  return { searchQuery, handleSearchChange, filteredMenu };
};

export default useSearchMenu;

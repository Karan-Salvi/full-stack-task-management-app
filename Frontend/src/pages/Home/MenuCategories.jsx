import React from "react";

const categories = [
  {
    name: "Salad",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Rolls",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Deserts",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sandwich",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Cake",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pure Veg",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pasta",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Noodles",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const MenuCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore our menu
        </h2>
        <p className="text-lg text-gray-600">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-orange-500 transition-colors duration-300">
              <img
                src={"./images/welcome.png" || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <span className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;

import React from "react";

const CategorySidebar = ({
  categories,
  selectedCategory,
  handleCategoryFilter,
  clearFilter,
  menuOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-4 z-40 transform transition-transform duration-300 rounded-xl opacity-85
      ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <h2 className="text-white text-xl font-semibold mb-3 mt-8">
        Element Categories
      </h2>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`px-0 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat.name
                ? "ring-2 ring-white transform scale-105"
                : "hover:scale-105"
            }`}

            style={{
              backgroundColor: cat.color,
              color: "#000",
              boxShadow: `0 0 10px ${cat.color}40`,
            }}

            onClick={() => handleCategoryFilter(cat.name)}>
            
            {cat.name} ({cat.count})

          </button>
        ))}

        {selectedCategory && (
          <button
            className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-600 text-white hover:bg-gray-500"
            onClick={clearFilter}>
            Clear Filter
          </button>
        )}

      </div>
    </div>
  );
};

export default CategorySidebar;
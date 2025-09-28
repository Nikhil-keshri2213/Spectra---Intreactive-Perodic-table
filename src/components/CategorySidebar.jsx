import React, { useEffect, useState } from "react";

const CategorySidebar = ({
  categories,
  selectedCategory,
  handleCategoryFilter,
  clearFilter,
  menuOpen,
}) => {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-fit "w-72" bg-black/70 backdrop-blur-md p-4 pt-14 z-40 transform transition-transform duration-300 rounded-xl opacity-70 overflow-hidden
      ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
      <h2 className="text-white text-lg font-medium mb-3 mt-12">
        Element Categories
      </h2>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
            className="px-3 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-gray-500"
            onClick={clearFilter}>
            Clear Filter
          </button>
        )}
      </div>
    </div>
  );
};

export default CategorySidebar;

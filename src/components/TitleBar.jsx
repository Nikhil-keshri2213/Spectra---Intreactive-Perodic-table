import React from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import CategorySidebar from "./CategorySidebar";

const TitleBar = ({
  menuOpen,
  setMenuOpen,
  categories,
  selectedCategory,
  handleCategoryFilter,
  clearFilter,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-[70] bg-black/80 backdrop-blur-0">
        {/* Hamburger / Cross */}
        <button
          className="text-white text-3xl hover:text-gray-300 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* App Name + Subtitle */}
        <div className="text-center text-white flex flex-col items-center">
          <h1 className="text-2xl font-bold uppercase">Spectra</h1>
          <p className="text-sm text-gray-300">
            A Periodic Table Explore Chemical Elements
          </p>
        </div>

        {/* User Profile Icon */}
        <a
          href="https://nikhil-keshri2213.github.io/MyPortfolio/"
            target="_blank"
          className="text-white text-3xl hover:text-gray-300 transition-colors duration-200">
          <FaUserCircle />
        </a>
      </div>

      {/* Sidebar */}
      <CategorySidebar
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryFilter={handleCategoryFilter}
        clearFilter={clearFilter}
        menuOpen={menuOpen}
      />
    </>
  );
};

export default TitleBar;

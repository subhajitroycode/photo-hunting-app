import React from "react";

const Header = () => {
  return (
    <header className="text-center p-4">
      <h1 className="text-7xl sm:text-9xl mt-9 font-jaro text-gray-800 dark:text-gray-200">
        Photo Hunt App
      </h1>
      <p className="font-roboto text-2xl mt-4 sm:mt-2">
        Let the{" "}
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
          <span className="relative">hunt</span>
        </span>{" "}
        begin
      </p>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="text-center p-4">
      <h1 className="text-9xl font-jaro text-gray-800">Photo Hunt App</h1>
      <p className="font-roboto text-2xl mt-2">
        Let the <span className="italic text-[#ff6600]">hunt</span> begin
      </p>
    </header>
  );
};

export default Header;

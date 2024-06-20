import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineClear } from "react-icons/md";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    onSearch(searchTerm);
  };

  return (
    <form
      className="flex justify-center items-center my-4 relative w-full max-w-lg mx-auto border border-gray-300 bg-zinc-100 rounded-lg pl-2 form-container"
      onSubmit={handleSearch}
    >
      <GoSearch size={24} className="text-gray-500 mr-2" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow border-none outline-none bg-inherit text-base"
        placeholder="Search for images..."
      />
      {searchTerm && (
        <button
          type="button"
          className="mr-2 text-gray-500 hover:text-orange-700"
          onClick={() => setSearchTerm("")}
        >
          <MdOutlineClear size={24} />
        </button>
      )}
      <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-2 rounded-tl-none rounded-bl-none">
        Search
      </button>
    </form>
  );
};

export default SearchBox;

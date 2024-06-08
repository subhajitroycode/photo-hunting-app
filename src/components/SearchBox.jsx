import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    onSearch(searchTerm);
  };

  return (
    <form
      className="flex justify-center items-center my-4"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-gray-300 rounded-lg p-2 mr-2 w-1/2"
        placeholder="Search for images..."
      />
      <button className="bg-orange-600 text-white rounded-lg px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default SearchBox;

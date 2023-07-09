"use client";

import React, { useState } from "react";

const Search = ({ searchValue, setSearchValue, searchFood }) => {
  return (
    <div>
      <input
        className="inputIskanjeHrane"
        type="text"
        placeholder="Food..."
        value={searchValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchFood(searchValue);
          }
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="buttonIskanjeHrane"
        onClick={() => searchFood(searchValue)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

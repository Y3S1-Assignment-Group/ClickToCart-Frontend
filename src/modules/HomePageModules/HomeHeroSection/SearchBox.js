import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div>
      <div className="searchBoxBody mt-2">
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;

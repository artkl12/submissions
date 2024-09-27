import React from "react";

const Filter = ({ searchVal, handleSearchVal }) => {
  return (
    <>
      filter shown with <input value={searchVal} onChange={handleSearchVal} />
    </>
  );
};

export default Filter;

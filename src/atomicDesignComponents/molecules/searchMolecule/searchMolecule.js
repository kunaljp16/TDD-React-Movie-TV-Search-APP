import { useState } from "react";

import "./searchMolecule.scss";

const SearchMolecule = (props) => {
  const onChangeHandler = (e) => {
    props.searchMoviesHandler(e.target.value);
  };

  return (
    <>
      <input
        className={"form-control mr-sm-2 search"}
        type="search"
        name="search"
        id="searchInput"
        placeholder={"Search title and add to grid"}
        aria-label={"Search title and add to grid"}
        autoComplete="off"
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchMolecule;

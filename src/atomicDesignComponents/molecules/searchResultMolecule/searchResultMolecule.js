import React from "react";

const SearchResultMolecule = (props) => {
  const filteredData = props.filteredData;

  let movieList = filteredData.map((movie) => {
    return (
      <li key={movie.id} onClick={(e) => props.movieIdHandler(movie.id)}>
        {movie.name}
      </li>
    );
  });

  return (
    <>
      {filteredData.length > 0 && (
        <div className="searchResult">
          <ul>{movieList}</ul>
        </div>
      )}
    </>
  );
};

export default SearchResultMolecule;

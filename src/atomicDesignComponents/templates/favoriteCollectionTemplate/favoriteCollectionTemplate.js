import React, { useState, useEffect } from "react";
import SearchMolecule from "../../molecules/searchMolecule/searchMolecule";
import VideoCardMolecule from "../../molecules/videoCardMolecule/videoCardMolecule";
import "./favoriteCollectionTemplate.scss";
import SearchResultMolecule from "./../../molecules/searchResultMolecule/searchResultMolecule";
import favoritesData from "../../../data/favorites-data";
function FavoriteCollectionTemplate() {
  const [movieCollection, setMovieCollection] = useState([]);
  const [newMovieCollection, setNewMovieCollection] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedMovieObj, setSelectedMovieObj] = useState([]);
  const [favoritesCollection, setFavoritesCollection] = useState(favoritesData);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovieCollection(data);

        function iterateMoviesData(movieObj) {
          let newArray = [];

          movieObj.forEach((movie) => {
            let newObj = {};
            newObj.id = movie.id;
            newObj.image = movie.image;
            newObj.name = movie.name;
            newObj.rating = movie.rating;
            newObj.summary = movie.summary;
            newArray.push(newObj);
          });

          return newArray;
        }
        const newMovie = iterateMoviesData(data);
        setNewMovieCollection(newMovie);
      });
  }, []);

  const searchMoviesHandler = (val) => {
    setSearchInput(val);
  };

  const movieIdHandler = (id) => {
    // alert(id);
    setSelectedMovieId(id);

    let selectedMovie = newMovieCollection.filter(function (movie) {
      return movie.id === id;
    });
    setSelectedMovieObj(selectedMovie);

    if (!isMovieInFavorites(id)) {
      setFavoritesCollection((movie) => [...movie, ...selectedMovie]);
    } else {
      return favoritesCollection;
    }
  };

  const isMovieInFavorites = (id) => {
    return favoritesCollection.some(function (movie) {
      return movie.id === id;
    });
  };

  useEffect(() => {
    if (searchInput !== "") {
      const filteredData = newMovieCollection.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredMovies(filteredData);
    } else {
      setFilteredMovies([]);
    }
  }, [searchInput, newMovieCollection]);

  const deleteVideoCardHandler = (id) => {
    let removedFavoriteCollection = favoritesCollection.filter(function (
      movie
    ) {
      return movie.id !== id;
    });
    setFavoritesCollection(removedFavoriteCollection);
  };
  return (
    <>
      <section className="container-fluid grayBg">
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-md-12 mb-4">
              <div className="row d-flex justify-content-between border-bottom">
                <div className="col-md-9 col-sm-12">
                  <h2>Collect your favorites</h2>
                </div>
                <div className="col-md-3 col-sm-12 mt-sm-3 mb-sm-3 mt-md-0">
                  <SearchMolecule searchMoviesHandler={searchMoviesHandler} />
                  <SearchResultMolecule
                    filteredData={filteredMovies}
                    movieIdHandler={movieIdHandler}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <VideoCardMolecule
                  favoritesCollection={favoritesCollection}
                  deleteVideoCardHandler={deleteVideoCardHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FavoriteCollectionTemplate;

import { Fragment, useState } from "react";
import MovieData from "./components/MovieData/MovieData";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = () => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((data) => {
        const transFormedMovieHandler = data?.results.map((item) => {
          return {
            title: item.title,
            id: item.episode_id,
            openingText: item.opening_crawl,
          };
        });
        setMovies(transFormedMovieHandler);
      });
  };
  console.log(movies);

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesData}>Fetch Movies</button>
      </section>
      <section>
        <MovieData movies={movies}></MovieData>
      </section>
    </Fragment>
  );
}

export default App;

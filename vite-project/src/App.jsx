import { Fragment, useState } from "react";
import MovieData from "./components/MovieData/MovieData";
import "./App.scss";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const transFormedMovieHandler = data?.results.map((item) => {
        return {
          title: item.title,
          id: item.episode_id,
          openingText: item.opening_crawl,
        };
      });

      setMovies(transFormedMovieHandler);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  });

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesData}>Fetch Movies</button>
      </section>
      <section>
        {!loading && <MovieData movies={movies}></MovieData>}
        {loading && <h2>Loading</h2>}
        {!loading && error && <p>{error}</p>}
      </section>
    </Fragment>
  );
}

export default App;

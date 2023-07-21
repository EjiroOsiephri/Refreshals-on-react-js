import { Fragment, useState } from "react";
import MovieData from "./components/MovieData/MovieData";
import "./App.scss";
import { useEffect } from "react";
import { useCallback } from "react";
import AddMovie from "./components/MovieData/AddMovie";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://react-https-def9f-default-rtdb.firebaseio.com/Movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const transFormedMovieHandler = response.data?.results.map((item) => {
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
  }, []);

  async function addMovieHandler(movie) {
    const response = await axios.post(
      "https://react-https-def9f-default-rtdb.firebaseio.com/Movies.json",
      movie
    );
    console.log(response.data);
  }

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
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

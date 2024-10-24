import "./App.css";
import { useEffect, useState } from "react";
import { Movies, Search } from "./components";
import { useMovies } from "./hooks";

function App() {
  const [search, setSearch] = useState<string>("");
  const { movies, getMovies, loading } = useMovies({ search });

  useEffect(() => {
    if (!search) return;

    getMovies(search);
  }, [search]);

  return (
    <div className="page">
      <header>
        <h1> Movies Searcher </h1>
        {
          <Search
            useTypeAhead={true}
            ms={650}
            hideSearchButton={false}
            placeHolder={"Avengers, Alien, Ironman..."}
            onSearchChange={(search) => setSearch(search)}
          />
        }
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

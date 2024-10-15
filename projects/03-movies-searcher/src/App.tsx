import "./App.css";
import { useEffect, useState } from "react";
import { Movies, Search } from "./components";
import { useMovies } from "./hooks";

function App() {
  const [search, setSearch] = useState<string>("");
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSearchChange = (search: string): void => {
    setSearch(search);
  };

  useEffect(() => {
    if (!search) return;

    getMovies();
  }, [search]);

  return (
    <div className="page">
      <header>
        <h1> Movies Searcher </h1>
        {
          <Search
            useTypeAhead={false}
            ms={650}
            hideSearchButton={false}
            placeHolder={"Avengers, Alien, Ironman..."}
            onSearchChange={handleSearchChange}
          />
        }
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

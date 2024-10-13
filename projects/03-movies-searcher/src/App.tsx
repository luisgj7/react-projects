import { useEffect, useState } from "react";
import "./App.css";
import { Movies, Search } from "./components";
import { useMovies } from "./hooks";

function App() {
  const [ search, setSearch ] = useState<string>("");
  const { movies, getMovies, loading } = useMovies({ search });

  const habdleSearchChange = (search: string): void => {
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
            useTypeAhead={true}
            ms={650}
            hideSearchButton={false}
            placeHolder={"Avengers, Alien, Ironman..."}
            onSearchChange={habdleSearchChange}
          />
        }
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

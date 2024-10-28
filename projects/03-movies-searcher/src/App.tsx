import "./App.css";
import { Movies, Search } from "./components";
import { useMovies } from "./hooks";

function App() {
  const { movies, getMovies, loading } = useMovies();

  return (
    <div className="page">
      <header>
        <h1> Movies Searcher </h1>
        {
          <Search
            useTypeAhead={true}
            ms={450}
            hideSearchButton={false}
            placeHolder={"Avengers, Alien, Ironman..."}
            onSearchChange={(search) => getMovies(search)}
          />
        }
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

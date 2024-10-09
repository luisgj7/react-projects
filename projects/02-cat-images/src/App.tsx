import "./App.css";
import { useCatFact, useCatImage } from "./hooks";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };
 
  return (
    <main>
      <h1> Kitty's App</h1>
      <button onClick={handleClick}> Get Fact!</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;

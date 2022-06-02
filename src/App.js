import { useState } from "react";
import "./App.css";
import Characters from "./componentes/Characters";
import imageRickMorty from "./img/rick-morty.png";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch(
      "https://rickandmortyapi.com/api/character/?page=2"
    );
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  //console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

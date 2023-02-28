import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState([]);

  async function handlePokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    setData([await response.json()]);
  }

  return (
    <div className="wrapper">
      <input
        className="input"
        type="text"
        placeholder="Enter Pokemon Name / ID"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <button className="search" onClick={handlePokemon}>
        Search
      </button>
        <img src={data.length > 0 ? data[0].sprites.front_shiny : ''} alt="" />
      <h1 className="data">{data.length > 0 && data[0].name}</h1>
      <h3>Abilities</h3>
      <div className="data">
        {data.length > 0 &&
          data[0].abilities.map((val) => (
            <li key={val.ability.name}>{val.ability.name}</li>
          ))}
      </div>
      <h3>Moves</h3>
      <div>
        {data.length > 0 &&
          data[0].moves.map((val, ind) => (
            <div key={val.move.name}>{ind+1 + " " + val.move.name}</div>
          ))}
      </div>
    </div>
  );
}

export default App;

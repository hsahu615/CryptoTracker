import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const link =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const request = axios.get(link);
    request.then((data) => setData(data.data));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <form>
        <input
          type="text"
          id="search-input"
          onChange={handleChange}
          placeholder="Search"
        />
      </form>
      <Coin data={filteredCoins} />
    </div>
  );
}

export default App;

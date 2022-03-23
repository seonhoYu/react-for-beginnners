import Button from "./Button";
import Styles from "./App.module.css";
import { useState, useEffect } from "react";

 

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
  const [owned, setOwend] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const ownedChange = (event) => {
    setOwend(event.target.value);
  }

  const coinChange = (event) =>{
    const selectedCoin = coins.filter(coin => coin.symbol == event.target.value);
    setSelectedCoinPrice(selectedCoin[0].quotes.USD.price);
    console.log(selectedCoinPrice);
  }

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading....</strong> : 
      <div>
        <select onChange={coinChange}>
        {
          coins.map((coin, idx) => (
            <option value={coin.symbol} key={idx}>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD 
            </option>
          ))
        }
        </select>
        <br/>
        구매금액 : <input type="text" value={owned} onChange={ownedChange}></input>
        <br/>
        구매량 : <input type="text" value={owned > 0 ? (owned / selectedCoinPrice) : 0} readOnly></input>
       </div>
      }
      
    </div>
  );
}

export default App;

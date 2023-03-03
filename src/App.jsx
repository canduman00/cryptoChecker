import { useState, useEffect } from 'react'
import './App.css'
import Coin from '../components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect( () => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0").then(res => res.json()).then(data => {setListOfCoins(data.coins)})
  }, []);

  const filteredList = listOfCoins.filter(coin => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return (
    <>
      <div className="cryptoHeader">
        <input type="text" className="searchBar" placeholder="search for a coin..." onChange={event => setSearchWord(event.target.value)}/>
      </div>
      <div className="cryptoDisplay">
        {filteredList.map(coin => {
          return <Coin icon={coin.icon} name={coin.name} symbol={coin.symbol} price={coin.price}
          priceChange1h={coin.priceChange1h} priceChange1d={coin.priceChange1d} priceChange1w={coin.priceChange1w}/>
        })}
      </div>
    </>
  )
}

export default App

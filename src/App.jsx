import { useState } from 'react'
import './App.css'
import GamesOutcome from './components/GamesOutcome/GamesOutcome';
import playGames from './utils/gamble';
import RouletteWheel from './components/RouletteWheel/RouletteWheel';

function App() {
  const [gamesResult, setGamesResult] = useState({})
  const [totalSpins, setTotalSpins] = useState(200);
  const [numbersPlayed, setnumbersPlayed] = useState(10);
  const [betAmount, setBetAmount] = useState(1);

  const handleTotalSpinsChange = (event)=>{
    setTotalSpins(event.target.value)
  }

  const handleNumbersPlayedChange = (event)=>{
    setnumbersPlayed(event.target.value)
  }

  const handleBetAmountChange = (event)=>{
    setBetAmount(event.target.value)
  }


  function doGames(event) {
    event.preventDefault();
    console.log(event.target.totalSpins.value)
  
    const tempGamesResult = playGames(
      event.target.totalSpins.value,
      event.target.numbersPlayed.value,
      event.target.betAmount.value
    );

    setGamesResult(tempGamesResult)

  }

  return (
    <>
      <RouletteWheel />
      <h1>Roulette Regret</h1>
      <h2>Bet it all on black until your bank account is in the red or you see all green!</h2>
      <form className="game-config-form" onSubmit={doGames}>
        <label htmlFor="totalSpins">Total Spins:</label>
        <input name="totalSpins" type="number" value={totalSpins} onChange={handleTotalSpinsChange} />
        <label htmlFor="numbersPlayed">Numbers to Play:</label>
        <input name="numbersPlayed" type="number" value={numbersPlayed} onChange={handleNumbersPlayedChange}/>
        <label htmlFor="betAmount">Bet Amount:</label>
        <input name="betAmount" type="number" value={betAmount} onChange={handleBetAmountChange}/>
        <button type="submit" >Play Games!</button>
      </form>

      {gamesResult.totalEarnings && <GamesOutcome gamesResult={gamesResult} />}
    </>
  )
}

export default App

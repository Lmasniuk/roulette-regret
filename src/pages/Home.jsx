import RouletteWheel from "../components/RouletteWheel/RouletteWheel"
import GamesOutcome from "../components/GamesOutcome/GamesOutcome";
import "./Home.scss"
import { Link } from "react-router-dom";

import { useState } from 'react'

import playGames from '../utils/gamble';
import EarningsGraph from "../components/EarningsGraph/EarningsGraph";


export default function Home({bettingConfig}) {


  const [gamesResult, setGamesResult] = useState({})
  const [totalSpins, setTotalSpins] = useState(200);
  const [numbersPlayed, setnumbersPlayed] = useState(10);
  const [betAmount, setBetAmount] = useState(1);
  const [earningsHistory, setEarningsHistory] = useState([])

  const handleTotalSpinsChange = (event) => {
    setTotalSpins(event.target.value)
  }

  const handleNumbersPlayedChange = (event) => {
    setnumbersPlayed(event.target.value)
  }

  const handleBetAmountChange = (event) => {
    setBetAmount(event.target.value)
  }


  function doGames(event,bettingConfig) {
    event.preventDefault();

    const tempGamesResult = playGames(
      event.target.totalSpins.value,
      event.target.numbersPlayed.value,
      event.target.betAmount.value,
      bettingConfig
    );

    
    setGamesResult(tempGamesResult)
    setEarningsHistory(tempGamesResult.earningsHistory)
  }
  return (
    <>
      <RouletteWheel />
      <h1 className="title">Roulette Regret</h1>
      <h2 className="slogan">Bet it all on black until your bank account is in the red or you see all green!</h2>
      <Link to="/strategy"><button className="strategy-button">Betting Strategy Configuration</button></Link>
      <form className="game-config-form" onSubmit={(event)=>doGames(event, bettingConfig)}>
        <label htmlFor="totalSpins">Total Spins:</label>
        <input name="totalSpins" type="number" value={totalSpins} onChange={handleTotalSpinsChange} />
        <label htmlFor="numbersPlayed">Numbers to Play:</label>
        <input name="numbersPlayed" type="number" value={numbersPlayed} onChange={handleNumbersPlayedChange} />
        <label htmlFor="betAmount">Bet Amount:</label>
        <input name="betAmount" type="number" value={betAmount} onChange={handleBetAmountChange} />
        <button type="submit" >Simulate Games!</button>
      </form>

      {gamesResult.totalEarnings && <GamesOutcome gamesResult={gamesResult} />}
      {earningsHistory.length > 0 && <EarningsGraph earningsHistory={earningsHistory}/>}
    </>
  )
}
import { useState } from 'react'
import './App.css'
import GamesOutcome from './components/GamesOutcome/GamesOutcome';
import playGames from './utils/gamble';
import RouletteWheel from './components/RouletteWheel/RouletteWheel';

function App() {
  const [gamesResult, setGamesResult] = useState({})


  function doGames(){
    const tempGamesResult = playGames(200, 25, 1);
  
    setGamesResult(tempGamesResult)

  }

  return (
    <>
      <RouletteWheel />
      <h1>Roulette Regret</h1>
      <h2>Bet it all on black until your bank account is in the red or you see all green!</h2>

      <button onClick={doGames}>Play Games!</button>

      {gamesResult.totalEarnings && <GamesOutcome gamesResult={gamesResult}/>} 
    </>
  )
}

export default App

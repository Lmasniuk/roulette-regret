import './GamesOutcome.scss'

function GamesOutcome({gamesResult}){


    return (
<div class="games-outcome">
    <h3>Total Earnings: <span className={gamesResult.totalEarnings >0 ? "positive-earnings" : "negative-earnings"}>${gamesResult.totalEarnings}</span></h3>
    <h4>Total Spins Where a Number was Hit: {gamesResult.wins}</h4>
    <h4>Total Spins Where a Number was Not Hit:  {gamesResult.losses}</h4>
  </div>
    )
    
}

export default GamesOutcome;


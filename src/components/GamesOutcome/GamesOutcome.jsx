function GamesOutcome({gamesResult}){


    return (
<div class="games-outcome">
    <h3>Total Earnings: ${gamesResult.totalEarnings}</h3>
    <h3>Total Spins Where a Number was Hit: {gamesResult.wins}</h3>
    <h3>Total Spins Where a Number was Not Hit:  {gamesResult.losses}</h3>
  </div>
    )
    
}

export default GamesOutcome;


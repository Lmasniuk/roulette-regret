import './GamesOutcomeStats.scss'

function GamesOutcomeStats({ gamesResult }) {
    return (
        <div className="games-outcome-container">
            <h2>Total Earnings: <span className={gamesResult.totalEarnings > 0 ? "positive-earnings" : "negative-earnings"}>${gamesResult.totalEarnings.toLocaleString('en-us')}</span></h2>
            <h4>Total Spins: {gamesResult.totalSpins}</h4>
            <h4>Total Spins Where a Number was Hit: {gamesResult.wins}</h4>
            <h4>Total Spins Where a Number was Not Hit:  {gamesResult.losses}</h4>
        </div>
    )
}

export default GamesOutcomeStats;
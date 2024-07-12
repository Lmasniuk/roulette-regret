import "./GamesOutcomeStats.scss";

function GamesOutcomeStats({ gamesResult }) {
    return (
        <div className="games-outcome-container">
            <h2>
                Total Earnings:{" "}
                <span
                    className={
                        gamesResult.totalEarnings > 0
                            ? "positive-earnings"
                            : "negative-earnings"
                    }
                >
                    ${gamesResult.totalEarnings.toLocaleString("en-us")}
                </span>
            </h2>
            <h4>
                Winning Spins: {gamesResult.wins} / {gamesResult.totalSpins}
            </h4>
        </div>
    );
}

export default GamesOutcomeStats;

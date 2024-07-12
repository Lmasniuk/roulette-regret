import GamesOutcomeStats from "../GamesOutcomeStats/GamesOutcomeStats";
import EarningsGraph from "../EarningsGraph/EarningsGraph";

import "./GamesOutcome.scss";

export default function GamesOutcome({ gamesResult, earningsHistory }) {
    return (
        <div className="games-outcome">
            {/* {gamesResult.totalEarnings && (
                <GamesOutcome
                    gamesResult={gamesResult}
                    earningsHistory={earningsHistory}
                />
            )} */}

            {gamesResult.totalEarnings ? (
                <>
                    <GamesOutcomeStats gamesResult={gamesResult} />
                    <EarningsGraph earningsHistory={earningsHistory} />
                </>
            ) : (
                <h2>Simulate Games To See Performance!</h2>
            )}
        </div>
    );
}

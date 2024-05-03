import GamesOutcomeStats from "../GamesOutcomeStats/GamesOutcomeStats";
import EarningsGraph from "../EarningsGraph/EarningsGraph";

import "./GamesOutcome.scss";

export default function GamesOutcome({ gamesResult, earningsHistory }) {
  return (
    <div className="games-outcome">
      <GamesOutcomeStats gamesResult={gamesResult} />
      <EarningsGraph earningsHistory={earningsHistory} />
    </div>
  );
}

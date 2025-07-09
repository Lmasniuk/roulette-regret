import "./Home.scss";

import Header from "../components/Header/Header";
import GamesOutcome from "../components/GamesOutcome/GamesOutcome";

import { useState } from "react";

import playGames from "../utils/gamble";
import SettingsCard from "../components/SettingsCard/SettingsCard";

export default function Home({ bettingConfig }) {
    const [gamesResult, setGamesResult] = useState({});
    const [totalSpins, setTotalSpins] = useState(200);
    const [numbersPlayed, setnumbersPlayed] = useState(10);
    const [betAmount, setBetAmount] = useState(1);
    const [earningsHistory, setEarningsHistory] = useState([]);

    const handleTotalSpinsChange = (event) => {
        setTotalSpins(event.target.value);
    };

    const handleNumbersPlayedChange = (event) => {
        setnumbersPlayed(event.target.value);
    };

    const handleBetAmountChange = (event) => {
        setBetAmount(event.target.value);
    };

    function doGames(event, bettingConfig) {
        event.preventDefault();

        const tempGamesResult = playGames(
            event.target.totalSpins.value,
            event.target.numbersPlayed.value,
            event.target.betAmount.value,
            bettingConfig
        );

        setGamesResult(tempGamesResult);
        setEarningsHistory(tempGamesResult.earningsHistory);
    }
    return (
        <div className="container">
            <Header />
            <SettingsCard
                doGames={doGames}
                totalSpins={totalSpins}
                handleTotalSpinsChange={handleTotalSpinsChange}
                numbersPlayed={numbersPlayed}
                handleNumbersPlayedChange={handleNumbersPlayedChange}
                betAmount={betAmount}
                handleBetAmountChange={handleBetAmountChange}
                bettingConfig={bettingConfig}
            />

            <GamesOutcome
                gamesResult={gamesResult}
                earningsHistory={earningsHistory}
            />
        </div>
    );
}

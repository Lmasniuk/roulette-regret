import "./Home.scss";

import RouletteWheel from "../components/RouletteWheel/RouletteWheel";
import GamesOutcome from "../components/GamesOutcome/GamesOutcome";

import { Link } from "react-router-dom";

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
        <>
            <RouletteWheel />
            <h1 className="title">Roulette Regret</h1>
            <h2 className="slogan">
                Bet it all on black until your bank account is in the red or you
                see all green!
            </h2>
            <Link to="/strategy">
                <button className="strategy-button">
                    Betting Strategy Configuration
                </button>
            </Link>

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

            {gamesResult.totalEarnings && (
                <GamesOutcome
                    gamesResult={gamesResult}
                    earningsHistory={earningsHistory}
                />
            )}
        </>
    );
}

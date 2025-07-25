import "./SettingsCard.scss";

export default function SettingsCard({
    doGames,
    totalSpins,
    handleTotalSpinsChange,
    numbersPlayed,
    handleNumbersPlayedChange,
    betAmount,
    handleBetAmountChange,
    bettingConfig,
}) {
    return (
        <form
            className="game-config-form"
            onSubmit={(event) => doGames(event, bettingConfig)}
        >
            <label htmlFor="totalSpins">Total Spins:</label>
            <input
                name="totalSpins"
                type="number"
                value={totalSpins}
                onChange={handleTotalSpinsChange}
            />
            <label htmlFor="numbersPlayed">Numbers to Play:</label>
            <input
                name="numbersPlayed"
                type="number"
                value={numbersPlayed}
                onChange={handleNumbersPlayedChange}
            />
            <label htmlFor="betAmount">Bet Amount:</label>
            <input
                name="betAmount"
                type="number"
                value={betAmount}
                onChange={handleBetAmountChange}
            />
            <label htmlFor="bettingStrategy">Select Betting Strategy</label>
            <select name="bettingStrategy">
                <option>Martingale</option>
                <option>D’Alembert</option>
                <option>Fibonacci</option>
            </select>
            <button className="simulate-games" type="submit">Simulate Games!</button>
        </form>
    );
}

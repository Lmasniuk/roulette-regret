import "./BettingStrategy.scss"

export default function BettingStrategy({ bettingConfig, setBettingConfig }) {
  const doNothing = ()=>{

  }

  const addBet = ()=>{
    const lastBet = bettingConfig[bettingConfig.length-1]
    console.log(lastBet)
    const newBettingConfig = [...bettingConfig, lastBet];
    setBettingConfig(newBettingConfig)
  }

  return (
    <>
      <h1>Betting Strategy</h1>
      <button onClick={addBet}>Add Bet Amount</button>
      <div className="bet-inputs">
        {bettingConfig.map(
          (bet,index) =>
          (
            <p key={index}>
              <label>Bet {index+1}:</label>
              <input type="number" value={bet} onChange={doNothing}/>
            </p>
          )
        )}
      </div>
    </>
  )
}

import { Link } from "react-router-dom";
import "./BettingStrategy.scss"

export default function BettingStrategy({ bettingConfig, setBettingConfig }) {
  const changeBettingConfig = (event, index)=>{
    const newBettingConfig = [...bettingConfig];
    newBettingConfig[index] = event.target.value;
    setBettingConfig(newBettingConfig);
  }

  const addBet = ()=>{
    const lastBet = bettingConfig[bettingConfig.length-1];
    const newBettingConfig = [...bettingConfig, lastBet];
    setBettingConfig(newBettingConfig);
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
              <input type="number" value={bet} onChange={(event) => changeBettingConfig(event, index)}/>
            </p>
          )
        )}
      </div>
      <Link to="/"><button>Back to Simulator</button></Link>
    </>
  )
}

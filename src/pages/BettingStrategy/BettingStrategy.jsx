import { Link } from "react-router-dom";
import "./BettingStrategy.scss"
import deleteIcon from "../../assets/delete-X.png"

export default function BettingStrategy({ bettingConfig, setBettingConfig }) {
  const changeBettingConfig = (event, index) => {
    const newBettingConfig = [...bettingConfig];
    newBettingConfig[index] = event.target.value;
    setBettingConfig(newBettingConfig);
  }

  const addBetMultiplier = () => {
    const lastBet = bettingConfig[bettingConfig.length - 1];
    const newBettingConfig = [...bettingConfig, lastBet];
    setBettingConfig(newBettingConfig);
  }

  const removeBet = (index) =>{
    console.log(index)
    if(bettingConfig.length >1){
      const newBettingConfig = [...bettingConfig];
      newBettingConfig.splice(index,1)
      setBettingConfig(newBettingConfig);
    }
  }

  return (
    <>
      <div className="strategy-info-container">
        <h1>Betting Strategy</h1>
        <h2>Set your betting configuration strategy!</h2>
        <p className="strategy-info">
          When a spin is missed/lost(does not land on a number you bet on), you will increase your bet multiplier to the next consective bet configuration.<br/><br/>
          When you are at your final bet multiplier(last one in the list), and a spin is is missed/lost, the betting strategy will be reset and go back to the initial bet multiplier.<br/><br/>
          When a spin is hit/won(lands on a number you bet on), the bet multiplier will be reset and go back to the initial bet multiplier.<br/><br/>

          Ex) <br />
          You are betting $1 a number. You have a betting strategy with multipliers 1,2,4,8,16,32. You're playing 10 numbers at a time, and you are doing your first spin. The initial bet amount would be $10.<br/><br/>
           If you lost the spin, you would increase your multiplier to 2, so your next spin would be $20(2 x $1/spin * 10 numbers). If another spin is missed, you would increase your multiplier to 4, so your next spin would be $40(4 x $1/spin * 10 numbers).<br/>
           <br/> This increasing of your bet multipliers would continue until you made a bet for $320(32 x $1/spin * 10 numbers), and then the multiplier would reset back to 1.<br/>

        </p>
      </div>
      <button onClick={addBetMultiplier}>Add Bet Multiplier</button>
      <div className="bet-inputs">
        {bettingConfig.map(
          (bet, index) =>
          (
            <p key={index}>
              <label>Multiplier {index + 1}: </label>
              <input type="number" value={bet} onChange={(event) => changeBettingConfig(event, index)} />
              <img onClick={()=>removeBet(index)} className="delete-icon" src={deleteIcon}/>
            </p>
          )
        )}
      </div>
      <Link to="/"><button>Back to Simulator</button></Link>


    </>
  )
}

import './GamesOutcome.scss'

function GamesOutcome({ gamesResult }) {

    const formatEarnings=(earnings)=>{

        let earningsString = earnings.toString();
        
        if(earningsString.length < 4){
            return earningsString;
        }else if( earningsString.length <7){
            //deal with negative numbers that are 3 digits long
            if( earningsString.length == 4 && earnings < 0){
                return earningsString;
            }
            const earningsArray = earningsString.split("")
            earningsArray.splice(earningsArray.length-3,  0, ",")
            earningsString = earningsArray.join('')
            return earningsString
        } else if( earningsString.length < 10){
            //deal with negative numbers that are 6 digits long
            const earningsArray = earningsString.split("")
            if( earningsString.length == 7 && earnings < 0){
                earningsArray.splice(earningsArray.length-3,  0, ",")
                earningsString = earningsArray.join('')
                return earningsString;
            }
            earningsArray.splice(earningsArray.length-3,  0, ",")
            earningsArray.splice(earningsArray.length-7,  0, ",")
            earningsString = earningsArray.join('')
            return earningsString
        }


        return earnings
    }


    return (

        <div className="games-outcome">
            <h3>Total Earnings: <span className={gamesResult.totalEarnings > 0 ? "positive-earnings" : "negative-earnings"}>${formatEarnings(gamesResult.totalEarnings)}</span></h3>
            <h4>Total Spins: {gamesResult.totalSpins}</h4>
            <h4>Total Spins Where a Number was Hit: {gamesResult.wins}</h4>
            <h4>Total Spins Where a Number was Not Hit:  {gamesResult.losses}</h4>
        </div>
    )

}

export default GamesOutcome;


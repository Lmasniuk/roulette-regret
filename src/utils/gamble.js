const TOTAL_SPINS = 200;
const NUMBERS_PLAYED = 10;

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function calculateSingleSpinWin(numbersPlayed){
    const pickedNumber = getRandomInt(38);
    if(pickedNumber <= numbersPlayed){
        return true;
    } else {
        return false;
    }
}

function playGames(totalSpins, numbersPlayed, betAmount){
    let wins =  0;
    let losses = 0;
    let totalEarnings = 0;

    for(let i=0; i<totalSpins; i++){
        //place your bet(subtract from totalEarnings)
        totalEarnings -= (betAmount * numbersPlayed);

        //do the spin
        const spinVictory = calculateSingleSpinWin(numbersPlayed)

        //if a win occurs, add to total earnings based on numbersPlayed and betAmount
        if(spinVictory){
            wins +=1;
            totalEarnings += (35 * betAmount)
        } else{
            losses +=1;
        }
        
    }

    const results = {
        wins: wins,
        losses: losses,
        totalEarnings: totalEarnings
    }

    return results
}

export default playGames;



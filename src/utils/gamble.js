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

//how should I represent my earnings....



function playGames(totalSpins, numbersPlayed, betAmount, bettingConfig){
    const earningsHistory = []
    let wins =  0;
    let losses = 0;
    let totalEarnings = 0;
    let betConfigIndex = 0;

    for(let i=0; i<totalSpins; i++){
        //place your bet(subtract from totalEarnings)
        totalEarnings -= ((betAmount * bettingConfig[betConfigIndex]) * numbersPlayed);

        //do the spin
        const spinVictory = calculateSingleSpinWin(numbersPlayed)

        //if a win occurs, add to total earnings based on numbersPlayed and betAmount
        if(spinVictory){
            wins +=1;
            totalEarnings += (36 * (betAmount * bettingConfig[betConfigIndex]))
            betConfigIndex = 0;
        } else{
            losses +=1;
            betConfigIndex+=1
            if(betConfigIndex >= bettingConfig.length){
                betConfigIndex = 0;
            }
        }
        earningsHistory.push(totalEarnings)
        
    }

    const results = {
        totalSpins: totalSpins,
        numbersPlayed: numbersPlayed,
        betAmount: betAmount,
        wins: wins,
        losses: losses,
        totalEarnings: totalEarnings,
        earningsHistory: earningsHistory
    }

    return results
}

export default playGames;



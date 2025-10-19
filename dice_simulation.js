// q3_dice_simulation.js

function simulateDiceRolls(trials = 10000) {
    let count7 = 0;

    for (let i = 0; i < trials; i++) {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        if (die1 + die2 === 7) count7++;
    }

    const experimentalProb = count7 / trials;
    const theoreticalProb = 6 / 36; // (6 combinations give sum=7 out of 36)

    console.log(`Total Trials: ${trials}`);
    console.log(`Sum = 7 occurred: ${count7} times`);
    console.log(`Experimental Probability: ${experimentalProb}`);
    console.log(`Theoretical Probability: ${theoreticalProb}`);
}

simulateDiceRolls(10000);

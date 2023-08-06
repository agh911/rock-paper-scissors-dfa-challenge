import express from 'express';

const router = express.Router();

function declareWinner(playerOption, computerOption) {
    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (playerOption === computerOption) {
        return "It's a tie!";
    }

    if (winningCombinations[playerOption] === computerOption) {
        return "You win!";
    }

    return "Computer wins!"
}

router.post('/', (req, res) => {
    const match = req.app.locals.match;
    const playerOption = req.body.option;
    const computerOption = match.computer.chooseOption();

    const result = declareWinner(playerOption, computerOption);

    res.render('outcome', {
        playerOption: playerOption,
        computerOption: computerOption,
        result: result
    })
})

export default router;
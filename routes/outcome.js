import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const match = req.app.locals.match;
    const playerOption = req.body.option;
    let computerOption = match.computer.chooseOption();

    const result = match.getRoundWinner(playerOption, computerOption);
    match.roundsPlayed++;

    let matchResult = result;
    let showMatchResultLink = false;

    if (match.roundsPlayed === 3) {
        showMatchResultLink = true;
    }

    res.render('outcome', {
        playerOption: playerOption,
        computerOption: computerOption,
        result: result,
        roundsPlayed: match.roundsPlayed,
        showMatchResultLink: showMatchResultLink,
        matchResult: matchResult
    })
})

export default router;

import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const match = req.app.locals.match;
    const playerOption = req.body.option;

    const result = match.playRound(playerOption);
    match.roundsPlayed++;

    let matchResult = result;

    if (match.roundsPlayed === 3) {
        matchResult = match.getMatchWinner();
        res.render('matchResult', {
            result: matchResult
        })
        match.reset();
    }
    res.render('outcome', {
        playerOption: playerOption,
        computerOption: match.computer.chooseOption(),
        result: matchResult,
    })
})

export default router;
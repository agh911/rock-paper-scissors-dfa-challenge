import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const match = req.app.locals.match;
    const playerOption = req.body.option;
    let computerOption = match.computer.chooseOption();

    const result = match.getRoundWinner(playerOption, computerOption);
    match.roundsPlayed++;

    let matchResult = result;

    if (match.roundsPlayed === 3) {
        matchResult = match.getMatchWinner();
        match.reset();
        res.render('matchResult', {
            result: matchResult
        })
        return;
    }

    res.render('outcome', {
        playerOption: playerOption,
        computerOption: computerOption,
        result: result,
    })
})

export default router;

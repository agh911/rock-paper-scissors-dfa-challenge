import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const match = req.app.locals.match;
    const matchResult = match.getMatchWinner();
    match.reset();

    res.render('matchResult', {
        result: matchResult
    })
})

export default router;

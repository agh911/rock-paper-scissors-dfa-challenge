import express from 'express';
import Match from '../src/match.js';
import Player from '../src/player.js';
import ComputerPlayer from '../src/computerPlayer.js';

const router = express.Router();

router.post('/', (req, res) => {
    const match = new Match();
    const playerName = req.body.playerName;
    match.setup(playerName);
    req.app.locals.match = match;

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const player = req.app.locals.match.player;

    res.render('game', {
        playerName: player.name,
    })
})

export default router;
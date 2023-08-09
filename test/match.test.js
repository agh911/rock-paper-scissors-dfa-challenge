import chai from 'chai';
import Match from '../src/match.js';
import Player from '../src/player.js';
import ComputerPlayer from '../src/computerPlayer.js';

const expect = chai.expect;

describe('Match Logic', () => {
    let match;
    let playerName;

    beforeEach(() => {
        match = new Match();
        playerName = 'Player';
    })

    describe('setup', () => {
        it('should create a new match with a player and a computer', () => {
            match.setup(playerName);

            expect(match.player).to.be.an.instanceof(Player);
            expect(match.player.name).to.equal(playerName);
            expect(match.computer).to.be.an.instanceof(ComputerPlayer);
        })
    })
})
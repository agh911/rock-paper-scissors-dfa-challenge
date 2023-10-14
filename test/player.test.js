import chai from 'chai';
import Player from '../src/player.js';

const expect = chai.expect;

describe('Player Class', () => {
    it('should create a player with the given name', () => {
        const playerName = 'TestPlayer';
        const player = new Player(playerName);

        expect(player).to.be.an.instanceof(Player);
        expect(player.name).to.equal(playerName);
    })
})
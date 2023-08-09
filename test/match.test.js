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

    describe('getRoundWinner', () => {
        it('should correctly handle a tie scenario', () => {
            const result = match.getRoundWinner('rock', 'rock');
            expect(result).to.equal("It's a tie!");
        })

        it('should correctly identify player wins', () => {
            const playerWins = [
                { player: 'rock', computer: 'scissors' },
                { player: 'paper', computer: 'rock' },
                { player: 'scissors', computer: 'paper' },
                { player: 'lizard', computer: 'Spock' },
                { player: 'Spock', computer: 'rock' }
            ]

            playerWins.forEach(scenario => {
                const { player, computer } = scenario;
                it(`should correctly identify ${player} wins`, () => {
                    const result = match.getRoundWinner(player, computer);
                    expect(result).to.equal("You win!");
                })
            })
        })

        it('should correctly identify computer wins', () => {
            const computerWins = [
                { player: 'rock', computer: 'paper' },
                { player: 'paper', computer: 'scissors' },
                { player: 'scissors', computer: 'rock' },
                { player: 'lizard', computer: 'paper' },
                { player: 'Spock', computer: 'lizard' }
            ]

            computerWins.forEach(scenario => {
                const { player, computer } = scenario;
                it(`should correctly identify ${computer} wins`, () => {
                    const result = match.getRoundWinner(player, computer);
                    expect(result).to.equal("Computer wins!");
                })
            })
        })
    })

    describe('getMatchWinner', () => {
        it('should correctly determine the match winner for different scenarios', () => {
            match.setup(playerName);
            // Test player win
            match.playerWins = 2;
            match.computerWins = 1;
            expect(match.getMatchWinner()).to.equal('Congratulations, Player wins the match!');

            // Test computer win
            match.playerWins = 1;
            match.computerWins = 2;
            expect(match.getMatchWinner()).to.equal('Computer wins the match!');

            // Test tie scenario
            match.playerWins = 0;
            match.computerWins = 0;
            match.ties = 3;
            expect(match.getMatchWinner()).to.equal("It's a tie!");

            // Test undecided scenario
            match.playerWins = 1;
            match.computerWins = 1;
            match.ties = 1;
            expect(match.getMatchWinner()).to.equal('Match result is still undecided.');

            // Test no clear match result
            match.playerWins = 0;
            match.computerWins = 0;
            match.ties = 0;
            expect(match.getMatchWinner()).to.equal('No clear match result.');
        })
    })
})
import Player from "./player.js";
import ComputerPlayer from "./computerPlayer.js";

class Match {
    constructor() {
        this.roundsPlayed = 0;
        this.playerWins = 0;
        this.computerWins = 0;
        this.ties = 0;
    }

    setup(playerName) {
        this.player = new Player(playerName);
        this.computer = new ComputerPlayer();
    }


    getRoundWinner(playerOption, computerOption) {
        const winningCombinations = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        }

        if (playerOption === computerOption) {
            this.ties++
            return "It's a tie!";
        }

        if (winningCombinations[playerOption] === computerOption) {
            this.playerWins++;
            return "You win!";
        }

        this.computerWins++;
        return "Computer wins!"
    }

    getMatchWinner() {
        if (this.playerWins > this.computerWins) {
            return `Congratulations, ${this.player.name} wins the match!`;
        }

        if (this.playerWins < this.computerWins) {
            return "Computer wins the match!";
        }

        // Had a case of two round ties and one round player win which resulted in the player being the match winner
        if (this.ties > this.playerWins && this.ties > this.computerWins) {
            return "It's a tie!";
        }

        // Had a case of one round player win, one round computer win and one round tie
        if (this.playerWins === this.computerWins && this.playerWins === 1 && this.ties === 1) {
            return "Match result is still undecided.";
        }

        return "No clear match result.";
    }

    reset() {
        this.roundsPlayed = 0;
        this.playerWins = 0;
        this.computerWins = 0;
        this.ties = 0;
    }
}

export default Match;

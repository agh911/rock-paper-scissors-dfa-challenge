import Player from "./player.js";
import ComputerPlayer from "./computerPlayer.js";

class Match {
    constructor() {
        this.roundsPlayed = 0;
        this.playerWins = 0;
        this.computerWins = 0;
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

        return "It's a tie!";
    }

    reset() {
        this.roundsPlayed = 0;
        this.playerWins = 0;
        this.computerWins = 0;
    }
}

export default Match;

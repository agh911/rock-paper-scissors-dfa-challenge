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

    playRound(playerOption) {
        const computerOption = this.computer.chooseOption();

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
            return "You win this round!";
        }

        this.computerWins++;
        return "Computer wins this round!";
    }

    getMatchWinner() {
        if (this.playerWins === this.computerWins) {
            return "It's a tie!";
        }

        if (this.playerWins > this.computerWins) {
            return `Congratulations, ${this.player.name} wins the match!`;
        }

        return "Computer wins the match!";
    }

    reset() {
        this.roundsPlayed = 0;
        this.playerWins = 0;
        this.computerWins = 0;
    }
}

export default Match;

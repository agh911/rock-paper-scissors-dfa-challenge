import Player from "./player.js";
import ComputerPlayer from "./computerPlayer.js";

class Match {
    setup(playerName) {
        this.player = new Player(playerName);
        this.computer = new ComputerPlayer();
    }
}

export default Match;
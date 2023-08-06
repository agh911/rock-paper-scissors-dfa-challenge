import Player from "./player";
import ComputerPlayer from "./computerPlayer";

class Match {
    setup(playerName) {
        this.player = new Player(playerName);
        this.computer = new ComputerPlayer();
    }
}

export default Match;
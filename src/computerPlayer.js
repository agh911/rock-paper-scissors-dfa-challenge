class ComputerPlayer {
    chooseOption() {
        const options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * options.length)];
    }
}

export default ComputerPlayer;
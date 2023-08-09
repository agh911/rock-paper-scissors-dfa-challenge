import chai from 'chai';
import ComputerPlayer from '../src/computerPlayer.js';

const expect = chai.expect;

describe('ComputerPlayer', () => {
    it('should choose an option from available choices', () => {
        const computerPlayer = new ComputerPlayer();
        const chosenOption = computerPlayer.chooseOption();

        expect(chosenOption).to.be.oneOf(['rock', 'paper', 'scissors', 'lizard', 'Spock']);
    })
})
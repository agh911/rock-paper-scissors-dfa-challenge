import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Game Route', () => {
    const testServer = chai.request(app).keepOpen();

    it('should start a new match and redirect to the game page', async () => {
        const res = await testServer
            .post("/game")
            .type('form')
            .send({ playerName: 'Player' });
        expect(res).to.have.status(200);
    })

    it('should render the game page with the player name', async () => {
        const res = await testServer
            .get('/game');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Time to make your choice, Player!');
    })
})

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Index Route', () => {
    const testServer = chai.request(app).keepOpen();

    it('should render the index page successfully', async () => {
        const res = await testServer.get('/');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Welcome to the Rock Paper Scissors Lizard Spock Game!');
    })

    it('should start a new game when submitting the form', async () => {
        const res = await testServer
            .post("/game")
            .type('form')
            .send({ playerName: 'Player' });
        expect(res).to.have.status(200);
    })
})
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Index Route', () => {
    it('should render the index page successfully', async () => {
        const res = await chai.request(app).get('/');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Welcome to the Rock Paper Scissors Lizard Spock Game!');
    })
})

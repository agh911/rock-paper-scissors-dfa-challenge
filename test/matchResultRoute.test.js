import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('MatchResult Route', () => {
    const testServer = chai.request(app).keepOpen();

    it('should display the match result page', async () => {
        const res = await testServer.get('/matchResult');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Match Outcome');
        expect(res.text).to.include('Play Again');
    })
})

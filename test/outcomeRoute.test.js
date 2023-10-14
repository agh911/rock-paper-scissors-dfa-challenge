import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Outcome Route', () => {
    const testServer = chai.request(app).keepOpen();

    it('should render the outcome page with correct data', async () => {
        const res = await testServer
            .post('/outcome')
            .type('form')
            .send({ option: 'rock' });

        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Round 1');
        expect(res.text).to.include('You chose');
        expect(res.text).to.include('Computer chose');
    })
})

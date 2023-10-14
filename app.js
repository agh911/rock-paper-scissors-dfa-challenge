import express from 'express';

const app = express();

const host = "http://localhost:";
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('css'));
app.use(express.static('assets'));

import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import outcomeRouter from './routes/outcome.js';
import matchResultRouter from './routes/matchResult.js';

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/outcome', outcomeRouter);
app.use('/matchResult', matchResultRouter);

app.listen(port, () => {
    console.log(`App listening at ${host}${port}`);
})

export default app;
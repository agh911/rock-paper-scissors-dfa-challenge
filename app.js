import express from 'express';
const app = express();
const host = "http://localhost:";
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import outcomeRouter from './routes/outcome.js';

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/outcome', outcomeRouter);

app.listen(port, () => {
    console.log(`App listening at ${host}${port}`);
})
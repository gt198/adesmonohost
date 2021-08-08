const express = require('express');
const cors = require('cors');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', 10);
const MasterMindNum = require('./mastermind');
const createHttpError = require('http-errors');

const app = express();
app.use(cors());

sessions = {};

app.get('/', function (req, res, next) {
    return res.json({
        Hello: "The game isn't here, go to https://gt198.github.io/adesmonohost/ instead",
    });
});

app.post('/', function (req, res, next) {
    const sessionId = nanoid();
    const masterMindNumber = 
    sessions[sessionId] = 1;
    console.log(sessionId);
    return res.send({
        "gameId": sessionId,
        "MastermindNumber": MasterMindNum.create(MastermindNumber)
    })
});

app.get('/guess', function (req, res, next) {
    const guess = req.query.guess;
    return res.send({
        "guess": guess
    })
    .catch(next);
});


app.use((req, res, next) => next(createHttpError(404, `Unknown resource ${req.method} ${req.originalUrl}`)));

app.use(function (err, req, res, next) {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || 'Unknown Error!';
    return res.status(status).json({
        error: message,
    });
});

const port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log('App is listening to port ' + port);
});
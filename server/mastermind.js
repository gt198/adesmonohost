const { Pool } = require('pg');
const connectionString =
    'postgres://zvdqqhvfawjiec:b6b7246328753cfb402fd5180d6e97c11572e7a9b7d90ff47a42847cbbe07eed@ec2-23-21-4-7.compute-1.amazonaws.com:5432/d4rua75tj9i9of';
    
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports = class MasterMindNum {

    static init() {
        return pool.query(
            `DROP TABLE IF EXISTS MasterMind_Game;
            CREATE TABLE MasterMind_Game (
                id SERIAL primary key,
                session_id VARCHAR not null,
                mastermind_number not null,
                guessed_number int not null
            );`,
        );
    }

    static create(sessionId) {
        const masterMindNumber = getRandomInt(1,1000);
        return MasterMindNum.startGame(sessionId, masterMindNumber);
    }

    static startGame(sessionId, masterMindNumber) {
        return pool.query(
            `INSERT INTO MasterMind_Game
            (session_id,mastermind_number)
            VALUES
            ($1,$2)`,
            [sessionId, threeDigits(masterMindNumber)],
        );
    }

    threeDigits(num) {
        if (num < 10) {
            num.push(0, 0); //adds 2 zeros in front of the digit
            return num;
        }

        else if (num > 10 && num < 100) {
            num.push(0); //adds 1 zero in front of the digit
            return num;
        }

        return;
    }

    progress() {
        return [this.attempt];
    }

    checkGuess(attempt) {
        this.threeDigits(this.masterMindNumber);

        for (i = 0; i < attempt.length; i++) {
            if (attempt === this.masterMindNumber) {
                return this.progress();
            }
        }
    }
};

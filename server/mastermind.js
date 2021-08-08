function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports = class MasterMindNum {

    create() {
        const masterMindNumber = getRandomInt(1,1000);
        return masterMindNumber;
    }

    threeDigits(num) {
        if (num < 10) {
            num.unshift(0, 0); //adds 2 zeros in front of the digit
            return num;
        }

        else if (num > 10 && num < 100) {
            num.unshift(0); //adds 1 zero in front of the digit
            return num;
        }

        return;
    }

    separateDigits(num) {
        for (i = 0; i < 3; i++) {
            var arr = []
            var separateNum = Math.floor(num % 10);
            arr.push(separateNum);
            num /= 10;
        }
        return arr;
    }

    progress() {
        return [this.attempt];
    }

    checkGuess(attempt) {
        this.threeDigits(separateDigits(this.masterMindNumber));
        this.threeDigits(separateDigits(attempt));

        for (i = 0; i < attempt.length; i++) {
            if (attempt === this.masterMindNumber) {
                return this.progress();
            }

            for (j = 0; j < masterMindNumber.length; j++) {
                if (attempt[i] == masterMindNumber[j]) {
                    return;
                }

                else {
                    return;
                }
            }
        }
    }
};

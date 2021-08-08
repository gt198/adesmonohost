function separateDigits(num) {
    for (i = 0; i < 3; i++) {
        var arr = []
        var separateNum = Math.floor(num % 10);
        arr.push(separateNum);
        num /= 10;
        console.log(arr);
    }
}

separateDigits(257);
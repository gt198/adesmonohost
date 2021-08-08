window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('session-id').innerHTML = localStorage["sessionId"];

    document.getElementById('check-guess').addEventListener('click', function () {
        var guess = document.getElementById('guess-number').innerHTML;
        if (isNaN(guess)) {
            window.alert('Invalid Guess. Please enter a number');
            return;
        }

        if (guess > 999 || guess < 1) {
            window.alert('Guess must be in the range of 1 to 999');
            return;
        }

        fetch(`${host}/guess?=${guess}`, {method: 'GET'})
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            document.getElementById('last-guess').innerHTML = guess;
        })
    })
})
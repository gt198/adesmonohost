const host = 'https://mastermind-ades.herokuapp.com/';

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-game').addEventListener('click', function () {
        document.getElementById('start-game').disabled = true;
        fetch(`${host}/`, {method: 'POST'})
        .then(function (response) {
            document.getElementById('start-game').disabled = false;
            return response.json();
        })
        .then(function (json) {
            window.alert('Mastermind game ' + json.gameId + ' has started');
            localStorage["sessionId"] = json.gameId;
            window.location.href = "./game.html"
        })
    })

   
});
const host = 'http://localhost:8080';

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-game').addEventListener('click', function () {
        document.getElementById('start-game').disabled = true;
        fetch(`${host}/`, {method: 'POST'})
        .then(function (response) {
            document.getElementById('start-game').disabled = false;
            return response.json();
        })
        .then(function (json) {
            window.alert('Mastermind game ' + json.game_Id + ' has started');
            localStorage["sessionId"] = json.game_Id;
            console.log(localStorage["sessionId"]);
            window.location.href = "./game.html"
        })
    })

   
});
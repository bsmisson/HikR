const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let stateNameE1 = document.getElementById('city-input'); 
let searchEl = document.getElementById("mybtn");

const requestURL = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+ stateNameE1.value +'&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR';

function findPark() {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log
    });
}

searchEl.addEventListener("click", function() {
    var stateNameE2 = document.getElementById('city-input').value;
    findPark(stateNameE1.value);
    console.log(stateNameE1.value);
})
// searchEl.onclick = findPark;

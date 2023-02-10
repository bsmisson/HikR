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

        var stateName= data.data[0].states;
        console.log(stateName)
    });
}

searchEl.addEventListener("click", function() {
    stateInput= stateNameE1.value
    findPark(stateInput);
    console.log(stateInput);
})
// searchEl.onclick = findPark;

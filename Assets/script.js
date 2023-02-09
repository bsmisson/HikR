
const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let stateName = document.getElementById('state-code'); 
let searchEl = document.getElementById("myBtn");

const requestURL = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+ stateName.value +'&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR';

function findPark() {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}

searchEl.addEventListener("click", function() {
    findPark();
})
// searchEl.onclick = findPark;
console.log(searchEl);
console.log(stateName.value);

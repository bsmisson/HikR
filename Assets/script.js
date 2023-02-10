
// fetch(endpoint)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     imageEl.src = jsonData.urls.regular;
//     imageLink.setAttribute("href", jsonData.links.html);
// })
// .catch(function(error){
//     console.log("error: ",error);
// });

const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let stateName = document.getElementById('city-input'); 
let searchEl = document.getElementById("mybtn");

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

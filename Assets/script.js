// //photos API
// var clienId = "VdEHKKmqqxAx4RxDgF-oMV9fdq9XsQK70OBycvs5H1Q";
// var endpoint =
//   "https://api.unsplash.com/photos/random?client_id=VdEHKKmqqxAx4RxDgF-oMV9fdq9XsQK70OBycvs5H1Q";

// var imageEl = document.querySelector(".adventue-pic");
// var imageLink = document.getElementById("imglink");


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
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');

function findPark() {
    const requestURL = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+ stateName.value +'&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR';
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}

searchEl.addEventListener("click", function() { 
    const stateName = document.getElementById('city-input').value;
    findPark(stateName);
    console.log(stateName);

})
// searchEl.onclick = findPark;
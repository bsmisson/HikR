const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');

function findPark() {
    const requestURL = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+ stateName.value +'&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR';
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const parkName =(data.data[0].fullName);
        const parkActivities =(data.data[0].activities[0].name);
        console.log(parkName);
        console.log(parkActivities);
        const heading = document.createElement('h1');
        const activitiesList = document.createElement('ul');
        heading.innerHTML = parkName;
        activitiesList.innerHTML = parkActivities;
        parkSec.appendChild(heading);
        parkSec.appendChild(activitiesList);
    });

}
searchEl.addEventListener("click", function() { 
    const stateName = document.getElementById('city-input').value;
    findPark(stateName);
    console.log(stateName);

})
// searchEl.onclick = findPark;

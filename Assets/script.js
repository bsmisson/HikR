const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');


function findPark() {
    
  clearHistory()
   
  const requestURL =
    "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" +
    stateName.value +
    "&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var numberParks = data.total;
      console.log(numberParks);

      for (var i = 0; i < numberParks; i++) {
        const parkName = data.data[i].fullName;
        //const parkActivities =(data.data[i].activities[i].name);
        console.log(parkName);
        // console.log(parkActivities);
        const heading = document.createElement("h1");
        const activitiesList = document.createElement("ul");
        heading.innerHTML = parkName;
        //activitiesList.innerHTML = parkActivities;
        parkSec.appendChild(heading);
        parkSec.appendChild(activitiesList);

       // parkSearch.innerHTML= parkName

       //images loop
        var demoDiv = document.getElementById("park-info");
       for (var j = 0; j < data.data[i].images.length; j++) {
    
         var linkURL = data.data[i].images[j].url;
         console.log(linkURL);
         
         var img = document.createElement("img");
         img.classList.add("result-img");
         img.setAttribute("src", linkURL);
         img.style.width = "200px";
         img.style.height = "200px";
         demoDiv.appendChild(img);
       }
      }
      
    });
  
}
//this function is to clear the history every time the user search for a new state
 function clearHistory(){
var clear = document.getElementById("park-info");
while (clear.firstChild) {
  clear.removeChild(clear.lastChild);
}
 }


searchEl.addEventListener("click", function() {
  const stateName = document.getElementById("city-input").value;
  findPark(stateName);
  console.log(stateName);
})
// searchEl.onclick = findPark;

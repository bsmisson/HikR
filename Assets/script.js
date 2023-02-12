const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
const googleApi_key= "AIzaSyAp_D9dzwfAO2zPUbuoIjKutKpsxM-JtdI"
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');

function getMaps(){
    var requestURL= "https://maps.googleapis.com/maps/api/js?key=" + googleApi_key+ "&callback=initMap";
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
             console.log(data);
    }
    )}



function findPark() {
    
  clearHistory()
   
  var requestURL =
    "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" +
    stateName.value +
    "&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var numberParks = data.data.length;
      console.log(numberParks);
      

      for (var i = 0; i < numberParks; i++) {
        var parkName = data.data[i].fullName;
        console.log(parkName);
        var unorderedList = document.createElement("ol");
        unorderedList.innerHTML = parkName;
        parkSec.appendChild(unorderedList);
        var numberActivities=data.data[i].activities.length
        console.log(numberActivities);
            for (var j=0; j<numberActivities;j++){
                var activityType=data.data[i].activities[j].name;
                console.log(activityType);
                var listItem=document.createElement('li');
                listItem.style.fontSize= "15px";
                listItem.style.textIndent= "24px"                                                     
                listItem.innerHTML= activityType;
                unorderedList.appendChild(listItem);
            }
        }




       // parkSearch.innerHTML= parkName
      });
  
}
//this function is to clear the history every time the user search for a new state
 function clearHistory(){
    while (parkSec.firstChild) {
        //console.log(parkSec.firstChild);
        //console.log(parkSec.lastChild)
        parkSec.removeChild(parkSec.lastChild);
}
 }


searchEl.addEventListener("click", function() {
  const stateName = document.getElementById("city-input").value;
  findPark(stateName);
  console.log(stateName);
})
// searchEl.onclick = findPark;
getMaps();
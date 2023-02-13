const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');


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
        var numberActivities = data.data[i].activities.length;
        for (var j = 0; j < numberActivities; j++) {
          var activityType = data.data[i].activities[j].name;
          console.log(activityType);
          var listItem = document.createElement("li");
          listItem.style.fontSize = "15px";
          listItem.style.textIndent = "24px";
          listItem.innerHTML = activityType;
          unorderedList.appendChild(listItem);
        }
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
        //park directions
          var parkDirection = data.data[i].directionsInfo;
          console.log(parkDirection);

          var directions = document.createElement("p");
          directions.style.fontSize = "15px";
          directions.style.textIndent = "24px";
          directions.innerHTML = `<strong>Park directions:</strong> </br> ${parkDirection}`;
          parkSec.appendChild(directions);
// added park fees
          var parkFee = data.data[i].entranceFees[0].cost;
          console.log(parkFee);
          var fee = document.createElement("p");
          fee.style.fontSize = "15px";
          fee.style.textIndent ="24px";
          fee.innerHTML = `<strong> Park Fees </strong> </br> ${parkFee}`;
          parkSec.appendChild(fee);
// added addresses
          var parkAddress = data.data[i].addresses[i].line2;
          console.log(parkAddress);
          var address = document.createElement("p");
          address.style.fontSize = "15px";
          address.style.textIndent ="24px";
          address.innerHTML = `<strong> Park Address </strong> </br> ${parkAddress}`;
          parkSec.appendChild(address);
          
      }
        });
        




       // parkSearch.innerHTML= parkName
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



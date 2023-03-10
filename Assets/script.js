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
        var parkDiv =  document.createElement('div')
        var container1 = document.createElement("div");
        var container2 = document.createElement("div");
        var container3 = document.createElement("div");
        var container4 = document.createElement("div")
        container1.classList.add('containerItem')
        container2.classList.add('containerImages')
        container3.classList.add('containerInfo')
        container2.classList.add('hidden');
        container3.classList.add('hidden');
        parkDiv.classList.add('parksContainer')
        
        //park name
        var parkName = data.data[i].fullName;
        console.log(parkName);
        var parkNameEl = document.createElement('h2')
        parkNameEl.classList.add('parkNames');
        var unorderedList = document.createElement("ol");
        parkNameEl.textContent = parkName;

        //activities for each park
        var numberActivities = data.data[i].activities.length;
        for (var j = 0; j < numberActivities; j++) {
          var activityType = data.data[i].activities[j].name;
          console.log(activityType);
          var listItem = document.createElement("p");
          listItem.innerHTML = `${activityType}`;
          listItem.style.fontSize = "15px";
          listItem.style.textIndent = "24px";
          container3.append(listItem);
        }
        //images loop
        for (var j = 0; j < data.data[i].images.length; j++) {
          var linkURL = data.data[i].images[j].url;
          console.log(linkURL);
          
          var img = document.createElement("img");
          img.classList.add("result-img");
          img.setAttribute("src", linkURL);
          img.style.width = "200px";
          img.style.height = "200px";
          container2.appendChild(img);
        }
        container1.append(parkNameEl, container2, unorderedList);
        parkDiv.append(container1,  container3)
        parkSec.append(parkDiv)
      
        //park directions
        var parkDirection = data.data[i].directionsInfo;
        console.log(parkDirection);
        
        var directions = document.createElement("p");
        directions.innerHTML = `<strong>Park directions:</strong> </br> ${parkDirection}`;
       
        // added park fees
        var parkFee = data.data[i].entranceFees[0]?.cost;
        console.log(parkFee);
        var fee = document.createElement("p");
        if(!data.data[i].entranceFees[0]?.cost){
          fee.innerHTML = `No Information Given`
          
        }
        else{
          console.log(parkFee)
          fee.innerHTML = `<strong> Park Fees </strong> </br> ${parkFee}`;
        }
     
        // added addresses
        var parkAddress0 = data.data[i].addresses[0].line1;
        var parkAddress1 = data.data[i].addresses[0].line2;
        var parkAddress2 = data.data[i].addresses[0].postalCode;
        var parkAddress3 = data.data[i].addresses[0].stateCode;

        console.log(parkAddress1, parkAddress2);

        var address = document.createElement("p");
        address.innerHTML = `<strong> Park Address </strong> </br> ${parkAddress0} ${parkAddress1}</br> ${parkAddress3} ${parkAddress2}`;
        container3.append(directions, fee, address)
        var parkLat = data.data[i].latitude;
        var parkLong = data.data[i].longitude;
        console.log(parkLat, parkLong);
        
        parkDiv.append(container1, container3, container4)
        parkSec.append(parkDiv)

        parkNameEl.addEventListener("click",function(event){
          var target1=event.target.parentNode.children[1]
          var target2=event.target.parentNode.nextElementSibling
          target1.classList.toggle('hidden');
          target2.classList.toggle('hidden');
         
       
        })

         


        weatherapi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + parkLat + "&lon=" + parkLong + "&exclude=&appid=21d47407360625ced584e99e4dbc0da8";

        
        
      }
    });
    
}



//this function is to clear the history every time the user search for a new state
function clearHistory() {
  while (parkSec.firstChild) {
    //console.log(parkSec.firstChild);
    //console.log(parkSec.lastChild)
    parkSec.removeChild(parkSec.lastChild);
  }
}


searchEl.addEventListener("click", function () {
  const stateName = document.getElementById("city-input").value;
  findPark(stateName);
  console.log(stateName);
})
// searchEl.onclick = findPark;

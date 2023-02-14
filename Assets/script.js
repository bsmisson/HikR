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
        container1.classList.add('containerItem')
        container2.classList.add('containerImages')
        parkDiv.classList.add('parksContainer')
        container2.style.display='none';
        container3.style.display='none';

        var parkName = data.data[i].fullName;
        console.log(parkName);
        var parkNameEl = document.createElement('h2')
        var unorderedList = document.createElement("ol");
        parkNameEl.textContent = parkName;
        
        var numberActivities = data.data[i].activities.length;
        for (var j = 0; j < numberActivities; j++) {
          var activityType = data.data[i].activities[j].name;
          console.log(activityType);
          var listItem = document.createElement("p");
          listItem.textContent = `${activityType}`;
          listItem.style.fontSize = "15px";
          listItem.style.textIndent = "24px";
          container3.append(listItem);
        }
        //images loop
        // var parkSec = document.getElementById("park-info");
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
        //park directions
        var parkDirection = data.data[i].directionsInfo;
        console.log(parkDirection);
        
        var directions = document.createElement("p");
        directions.style.fontSize = "15px";
        directions.style.textIndent = "24px";
        directions.innerHTML = `<strong>Park directions:</strong> </br> ${parkDirection}`;
        // parkSec.appendChild(directions);
        // added park fees
        var parkFee = data.data[i].entranceFees[0].cost;
        console.log(parkFee);
        var fee = document.createElement("p");
        fee.style.fontSize = "15px";
        fee.style.textIndent = "24px";
        fee.innerHTML = `<strong> Park Fees </strong> </br> ${parkFee}`;
        // parkSec.appendChild(fee);
        // added addresses
        var parkAddress0 = data.data[i].addresses[0].line1;
        var parkAddress1 = data.data[i].addresses[0].line2;
        var parkAddress2 = data.data[i].addresses[0].postalCode;
        var parkAddress3 = data.data[i].addresses[0].stateCode;
        console.log(parkAddress1, parkAddress2);
        var address = document.createElement("p");
        address.style.fontSize = "15px";
        address.style.textIndent = "24px";
        address.innerHTML = `<strong> Park Address </strong> </br> ${parkAddress0} ${parkAddress1}</br> ${parkAddress3} ${parkAddress2}`;
        // parkSec.appendChild(address);
        container3.append(directions, fee, address)

        var parkLat = data.data[i].latitude;
        var parkLong = data.data[i].longitude;
        console.log(parkLat, parkLong);
        
        parkDiv.append(container1,  container3)
        parkSec.append(parkDiv)
        parkNameEl.addEventListener("click", function(event){
          console.log(event.target.parentNode);
          event.target.parentNode.children[1].style.display='flex';
          event.target.parentNode.nextElementSibling.style.display='initial';
        })
        

        weatherapi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + parkLat + "&lon=" + parkLong + "&exclude=&appid=21d47407360625ced584e99e4dbc0da8";

        
        
      }
    });
    


  // parkSearch.innerHTML= parkName
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




/*const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById("city-input");
let parkSec = document.getElementById("park-info");
var parkNumber;

function getActivities(numberParks, data, unorderedList) {
  for (var i =0; i < numberParks; i++) {
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
  }
}
function getImages(numberParks, container, data) {
  //images loop
  // var parkSec = document.getElementById("park-info");
  for (var i =0; i < numberParks; i++) {
    for (var j = 0; j < data.data[i].images.length; j++) {
      var linkURL = data.data[i].images[j].url;
      console.log(linkURL);

      var img = document.createElement("img");
      img.classList.add("result-img");
      img.setAttribute("src", linkURL);
      img.style.width = "200px";
      img.style.height = "200px";
      container.appendChild(img);
    }
  }
  //container1.append(parkNameEl, container2, unorderedList);
}

function getDirectionsInfo(numberParks, data,container) {
  //park directions
  for (var i = 0; i < numberParks; i++) {
    var parkDirection = data.data[i].directionsInfo;
    console.log(parkDirection);

    var directions = document.createElement("p");
    directions.style.fontSize = "15px";
    directions.style.textIndent = "24px";
    directions.innerHTML = `<strong>Park directions:</strong> </br> ${parkDirection}`;
    container.append(directions);
  }
}
function getParkFee(parkNumber) {
  // parkSec.appendChild(directions);
  // added park fees
  for (var i = parkNumber; i < numberParks; i++) {
    var parkFee = data.data[i].entranceFees[0].cost;
    console.log(parkFee);
    var fee = document.createElement("p");
    fee.style.fontSize = "15px";
    fee.style.textIndent = "24px";
    fee.innerHTML = `<strong> Park Fees </strong> </br> ${parkFee}`;
    container3.append(fee);
  }
  // parkSec.appendChild(fee);
}

function getParkAddress(parkNumber) {
  for (var i = parkNumber; i < numberParks; i++) {
    var parkAddress1 = data.data[i].addresses[0].line2;
    var parkAddress2 = data.data[i].addresses[0].postalCode;
    console.log(parkAddress1, parkAddress2);
    var address = document.createElement("p");
    address.style.fontSize = "15px";
    address.style.textIndent = "24px";
    address.innerHTML = `<strong> Park Address </strong> </br> ${parkAddress1}</br> ${parkAddress2}`;
    // parkSec.appendChild(address);
    container3.append(address);
  }

  //parkDiv.append(container1,  container3)
  //parkSec.append(parkDiv)
}

function getContainer() {
  for (var i = 0; i < numberParks; i++) {
    var containerId = document.getElementById("container" + i);
    containerId.addEventListener("click", function () {
      getActivities();
      getImages();
    });
  }
}

function findPark() {
  clearHistory();

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
        var parkDiv = document.createElement("div");
        var container1 = document.createElement("div");
        var container2 = document.createElement("div");
        var container3 = document.createElement("div");
        var container4=document.createElement("div");
        container1.classList.add("containerItem");
        //sets id for each
        container1.setAttribute("id", "container" + i);
        container4.style.display='none';
        container2.classList.add("containerImages");
        parkDiv.classList.add("parksContainer");

        var parkName = data.data[i].fullName;
        console.log(parkName);
        var parkNameEl = document.createElement("h2");
        var unorderedList = document.createElement("ol");
        parkNameEl.textContent = parkName;
        container4.append(unorderedList,container2);
        container1.append(parkNameEl, container4);
        parkDiv.append(container1, container3);
        parkSec.append(parkDiv);
        parkNameEl.addEventListener("click", function(event){
          console.log(event.target.parentNode);
          event.target.parentNode.children[1].style.display='initial';


        })

        getActivities(numberParks, data, unorderedList);
        //getImages(numberParks, container2,data);
        //getDirectionsInfo(numberParks,data,container2)
      }
    });
}

// parkSearch.innerHTML= parkName

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
});
// searchEl.onclick = findPark;*/

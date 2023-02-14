const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');

function findAudio() {
  
    var requestURL =
      "https://developer.nps.gov/api/v1/multimedia/audio?stateCode=" + stateName.value + "&api_key=aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
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
          var container4 = document.createElement("div");
    
          var parkAudio = data.data[i].versions[0].url;
          var parkAudioName = data.data[i].title;
          var parkAudioDescription = data.data[i].description;
        
          console.log(parkAudioName);
          console.log(parkAudio);
          console.log(parkAudioDescription);

          var audioName = document.createElement("h6");
          audioName.style.fontSize = "15px";
          audioName.style.textIndent = "24px";
          audioName.textContent = `<strong> Listen to History </strong> </br> ${parkAudioDescription}`;




}})}

    searchEl.addEventListener("click", function () {
        const stateName = document.getElementById("city-input").value;
        findAudio(stateName);
        console.log(stateName);
    })
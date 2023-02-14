const api_key = "aRYOMb7qWKmAkeRqI32IlmrDh2cpdBE6k64szJUR";
let searchEl = document.getElementById("mybtn");
let stateName = document.getElementById('city-input');
let parkSec = document.getElementById('park-info');

function findAudio() {
  clearHistory();
  
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
          container1.classList.add('containerItem');
          container2.classList.add('containerImages');
          container3.classList.add('containerInfo');
          parkDiv.classList.add('parksContainer');
          container2.classList.add('hidden');
        container3.classList.add('hidden');
          container1.style.display='flex';
          var parkAudioName = data.data[i].title;
          var parkAudioDescription = data.data[i].description;
          var audioName = document.createElement("h2");
          audioName.classList.add('audioNames');
          var audioDescription=document.createElement('p');
          audioDescription.innerHTML=`<strong> Audio Description: </strong> </br> ${parkAudioDescription}`;
          audioName.style.fontSize = "15px";
          audioName.style.textIndent = "24px";
          audioName.textContent =parkAudioName;
          container1.append(audioName);
          container3.append(audioDescription);
          parkDiv.append(container1,container3);
          parkSec.append(parkDiv); 
         for(j=0;j<data.data[i].versions.length; j++){
          var linkURL = data.data[i].versions[j].url;
          var parkAudio = document.createElement("audio");
          parkAudio.id= 'audio-player';
          parkAudio.controls = 'controls';
          parkAudio.src=linkURL;
          parkAudio.type= 'audio/mpeg';
          //parkAudio.classList.add("result-audio");
          //parkAudio.setAttribute("src", linkURL);
          container2.append(parkAudio);
          }
          container1.append(container2);
          audioName.addEventListener("click",function(event){
            var target1=event.target.parentNode.children[1]
            var target2=event.target.parentNode.nextElementSibling
            target1.classList.toggle('hidden');
            target2.classList.toggle('hidden');
          })  
        
        //console.log(parkAudioName);
         // console.log(parkAudio);
         // console.log(parkAudioDescription);

         




}})}

function clearHistory() {
  while (parkSec.firstChild) {
    //console.log(parkSec.firstChild);
    //console.log(parkSec.lastChild)
    parkSec.removeChild(parkSec.lastChild);
  }
}

    searchEl.addEventListener("click", function () {
        const stateName = document.getElementById("city-input").value;
        findAudio(stateName);
        console.log(stateName);
    })
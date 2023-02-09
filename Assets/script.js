const api_key= "0JZql2LooCmwKdSlgCcTL1TNSmRyqkyf2yDwKBzE"
let cityName=document.getElementById('city');
let searchE1= document.getElementById('myBtn');


const requestUrl="https://developer.nps.gov/api/v1/parks?stateCode="+ cityName.value + "&limit=0&start=50&api_key=" + api_key;

function findPark(){
    fetch(requestUrl)  
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

searchE1.addEventListener("click",function(){
    findPark();
})
console.log(searchE1);






//photos API
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
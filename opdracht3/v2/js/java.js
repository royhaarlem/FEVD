var section = document.querySelector('section');

var dataurl = 'http://dennistel.nl/movies';
console.log("dataurl: "+ dataurl);

var datarequest = new XMLHttpRequest();
datarequest.open('get', dataurl);
datarequest.responseType = 'json';

datarequest.send();
datarequest.addEventListener('load',function(){
    var Loadmovies = datarequest.response;
        showFilms(Loadmovies);
});
datarequest.addEventListener('error',function(){
   console.log("we hebben een error");
});



function showFilms(jsonObj) {
  var allfilms = jsonObj;
    
for (var i = 0; i < allfilms.length; i++) {
  console.log("Titel:" + allfilms[i].title);
    console.log("Genres:" + allfilms[i].genres);
     console.log("Release date:" + allfilms[i].release_date);
    
    var myArticle = document.createElement('article');
    
    var title = document.createElement('h2');
    var datum = document.createElement('p');
    var genre = document.createElement('p');
    var image = document.createElement('img');

    title.textContent = allfilms[i].title;
    datum.textContent = allfilms[i].genres;
    genre.textContent = allfilms[i].release_date;
    image.src = allfilms[i].cover;
 
    
    myArticle.appendChild(title);
    myArticle.appendChild(genre);
    myArticle.appendChild(datum);
    myArticle.appendChild(image);


    section.appendChild(myArticle); 
    }
}



/*
oReq.addEventListener("load", reqListener);
//oReq.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=9f0d462a");


oReq.responseType = 'json';
oReq.send();

function reqListener () {
  console.log(this.responseText);
}




// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest //

var jsonVar = {
        text: "Title",
    };

var jsonStr = JSON.stringify(jsonVar);

document.body.innerHTML = jsonStr;

*/

/* Werkende 
var requestURL = 'http://dennistel.nl/movies';
var section = document.querySelector('section');

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.addEventListener('load', function(){
    console.log(request.response);
});

*/
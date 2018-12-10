var section = document.querySelector('section');

var dataurl = 'https://royhaarlem.github.io/FEVD/datab.json';
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
    console.log("Plot:" + allfilms[i].plot);
    
    var myArticle = document.createElement('article');
    
    var title = document.createElement('h2');
    var datum = document.createElement('p');
    var genre = document.createElement('p');
    var image = document.createElement('img');
    var simplot = document.createElement('h3');
    


    title.textContent = allfilms[i].title;
    datum.textContent = allfilms[i].release_date;
    genre.textContent = allfilms[i].genres;
    simplot.textContent = allfilms[i].plot;
    image.src = allfilms[i].cover;
 
    
    myArticle.appendChild(image);
    myArticle.appendChild(title);
    myArticle.appendChild(datum);
    myArticle.appendChild(genre);
    
    
    myArticle.appendChild(simplot);

    


    section.appendChild(myArticle); 
    }
}





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        document.getElementById("omhoog").style.display = "block";
    } else {
        document.getElementById("omhoog").style.display = "none";
    }
   
}

function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'slow');
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
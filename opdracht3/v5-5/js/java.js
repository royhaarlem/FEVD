var section = document.querySelector('section');

var dataurl = 'https://royhaarlem.github.io/FEVD/opdracht3/v5-5/datab.json';
console.log("dataurl: " + dataurl);

var datarequest = new XMLHttpRequest();
datarequest.open('get', dataurl);
datarequest.responseType = 'json';

datarequest.send();
datarequest.addEventListener('load', function () {
	var Loadmovies = datarequest.response;
	console.log("Loadmovies", Loadmovies);
	showFilms(Loadmovies);

	setTimeout(function () {
		$('#loader').fadeOut('slow');
	}, 5000); /* na 1sec na inladen van de data gaat de loader weg, die zet een visibility none erop */

});
datarequest.addEventListener('error', function () {
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
		datum.setAttribute("class", "datum");
		genre.textContent = allfilms[i].genres;
		genre.setAttribute("class", "genre");
		simplot.textContent = allfilms[i].plot;
		image.src = allfilms[i].cover;

		/* added*/
		console.log("TRAILER !!!!:" + allfilms[i].vidtrailer);
		var trailer = document.createElement('a');
		trailer.setAttribute("href", allfilms[i].vidtrailer);

		/* added*/
		myArticle.appendChild(trailer);
		myArticle.appendChild(image);
		myArticle.appendChild(title);
		myArticle.appendChild(datum);
		myArticle.appendChild(genre);
		myArticle.appendChild(simplot);

		section.appendChild(myArticle);
	}
}





window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
		document.getElementById("omhoog").style.display = "block";
	} else {
		document.getElementById("omhoog").style.display = "none";
	}

}

function topFunction() {

	$('html, body').animate({
		scrollTop: 0
	}, 'slow');
}




/*var elem = document.getElementById("loader");
elem.parentNode.removeChild(elem); //

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

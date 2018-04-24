function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=9f0d462a");
oReq.send();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest //

var jsonVar = {
        text: "Title",
    };

var jsonStr = JSON.stringify(jsonVar);

document.body.innerHTML = jsonStr;


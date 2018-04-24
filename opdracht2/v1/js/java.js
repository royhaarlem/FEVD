var volgende = document.querySelector('.next');
var vorige = document.querySelector('.prev');
var section = document.querySelector('section');
var counter = 0

/*
function sliderprev(){
    section.classList.add("vorige")  
}
volgende.addEventListener('click',sliderprev);
*/




function slidernext(){
    counter++;
    if (counter > 3) {
        counter = 1;
    }
    console.log(counter);
    if(counter == 1) {
        section.classList.remove("volgende3");
        section.classList.add("volgende1");
    }
    if(counter == 2) {
        section.classList.remove("volgende1");
        section.classList.add("volgende2");
        
    }
     if(counter == 3) {
        section.classList.remove("volgende2");
        section.classList.add("volgende3");
        
    }
    
}
vorige.addEventListener('click',slidernext);




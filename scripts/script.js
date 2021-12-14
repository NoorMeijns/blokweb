var fontsizeKnop = document.querySelector(".font-bigger");
var fontsizeKnop1 = document.querySelector(".font-smaller");
var main = document.querySelector(".tweedepagina");

fontsizeKnop.addEventListener('click', fontVergroten);
fontsizeKnop1.addEventListener('click', fontVerkleinen);


function fontVergroten() {
    console.log(fontsizeKnop);
    main.style.setProperty("font-size", "1.5em");
}

function fontVerkleinen() {
    main.style.setProperty("font-size", "1.2em");
}

var fontsizeKnop = document.querySelector(".font-size");
var main = document.querySelector(".tweedepagina");

fontsizeKnop.addEventListener("click", fontVergroten);

function fontVergroten() {
    console.log(fontsizeKnop);
    main.style.setProperty("font-size", "1.5em");
}

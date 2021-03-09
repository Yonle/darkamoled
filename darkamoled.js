var DarkAmoled = (function(){var elements=document.querySelectorAll("*");for(element in elements){if (typeof elements[element]=="object") {if(!elements[element].src||!elements[element].duration){elements[element].style.color = "white";elements[element].style["background-color"]="black";}}}});
// Node.js Support


if (typeof module === "object" && module.exports) {
	console.warn("This package is not ready to used as module yet, In the next updates, We will add some function for this module soon.");
}

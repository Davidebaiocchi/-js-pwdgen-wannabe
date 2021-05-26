// Nome 
var Nome = prompt("Hey, come ti chiami?");
console.log(Nome);

// Cognome 
var Cognome = prompt("Il tuo cognome?");
console.log(Cognome);

// Colore preferito 
var Colore = prompt("Colore preferito?");
console.log(Colore);

var password = Nome + Cognome + Colore + "21";

// Risultato 
document.getElementById("password").innerHTML = password.toLowerCase();

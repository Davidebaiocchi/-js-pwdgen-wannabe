// Nome 
var nome = prompt("Hey, come ti chiami?");
console.log(nome);

// Cognome 
var cognome = prompt("Il tuo cognome?");
console.log(cognome);

// Colore preferito 
var colore = prompt("Colore preferito?");
console.log(colore);

var password = nome + cognome + colore + "21";

// Risultato 
document.getElementById("password").innerHTML = password.toLowerCase();

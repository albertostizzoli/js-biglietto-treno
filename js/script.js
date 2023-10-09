let mioDiv = document.getElementById('text');
console.dir(mioDiv);


// Variabili

let prezzo = 0.21;
let età = parseInt(prompt('Età'));
let km = parseInt(prompt('Numero di chilometri'));

console.log('Numero di chilometri', km ,'Età', età);

//Condizioni

if(isNaN(età) || isNaN(km)){
    window.location.reload();
}

if(età >= 65){
    let discount = km * prezzo * 0.6
    mioDiv.innerHTML= discount;
} else if(età < 18){
    let discount_2 = km * prezzo * 0.8
    mioDiv.innerHTML= discount_2;
}






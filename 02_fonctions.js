
function hello(){
    return 'Hello !';
}

// let bonjour = hello();
// console.log(bonjour);

console.log(hello());

function helloName(name){
    return 'Hello ' + name;
}

console.log(helloName('Kévin'))

const tableau = [12,9,14,16]

// Pour accéder à chacune des valeurs via son index
// console.log(tableau[0])
// console.log(tableau[1])
// console.log(tableau[2])
// console.log(tableau[3])


function moyenne (tableau) {
    let x = 0;
    // let nbrElements = 0;

    for(let i = 0; i < tableau.length; i++) {
        // x = x + tableau[i];
        x += tableau[i];
        // nbrElements ++;
    }

    // return x / nbrElements;

    return x / tableau.length;
}

let moy = moyenne(tableau)
console.log(moy);

//  _______________________________________________________________________

console.log('_____________ Fonctions fléchées _____________')

const hello2 = () => { return 'Hello 2!'; }

// Sur le fonctions fléchées, si je n'utilise pas de '{ }' , il y a un 'return' implicite
const hello3 = () => 'hello 3!';

console.log(hello2());
console.log(hello3());

const moyenne2 = (tableau) => {
    let x = 0;

    for(let i = 0; i < tableau.length; i++) {
        // x = x + tableau[i];
        x += tableau[i];
        // nbrElements ++;
    }
    // return x / nbrElements;
    return x / tableau.length;
}

console.log('moyenne avec fonction fléchée: ', moyenne2(tableau))

const somme = (a, b = 10) => a + b

// Equivalent: 
// const somme = (a, b) => { return a + b }

console.log(somme(5))
console.log(somme(5, 20))

const soustraction = (a = 10, b) => a - b
console.log('soustraction: ', soustraction(undefined, 5))
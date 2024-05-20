// const myConst = 6;
// let myLet = 4;
// var myVar = 5;
// console.log(myConst, myLet, myVar);

function test() {
    if(true){
        const myConst = 6;
        let myLet = 4;
        var myVar = 5;

        console.log('myconst:', myConst);
        console.log('myLet', myLet);
        console.log('myVar', myVar);
    }

    // A l'extérieur du bloc
    try {
        console.log('myconst:', myConst); 
    }
    catch {
        console.log("myConst n'est pas accessible");
    }

    try {
        console.log('myLet', myLet);
    }
    catch {
        console.log("myLet n'est pas accessible");
    }
    
    console.log("myVar, a l'extérieur du bloc", myVar);
}

test();


// Exo 

console.log("____EXO___")

var x = 10;
console.log('1', x);
// --> valeur de x: 10

{
    // x = 8;
    // -> Pas faisable. On peut accéder au var mais on ne peut pas le redéfinir ici
   
    let x = 2;

    console.log('2', x);
    // --> valeur de x: 2

    var y = 5;
    const z = 6;
}

console.log('3', x);
// --> valeur de x: 10

console.log('4', y);
// --> valeur de y: 5

// console.log('5', z);
// --> renvoie une erreur
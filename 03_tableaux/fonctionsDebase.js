let myArray = [];

let names = ['Riri', 'Fifi', 'Loulou']

let myArray3 = new Array(5);

console.log(myArray, names, myArray3);

// Ajouter un élément à la fin du tableau
myArray.push('toto');
names.push('toto');
myArray3.push('toto');

// Supprimer un élément
// 'splice()' prend en paramètre 2 éléments: 
//  - 1er paramètre: index du premier élément à supprimer
//  - 2nd paramètre: nombre d'éléments à supprimer

myArray.splice(1,1);
names.splice(1,1)
myArray3.splice(1,1);

console.log(myArray, names, myArray3);

// A savoir: la fonction splice() retourne un tableau contenant l'ensemble des éléments supprimés
let elementSupprime = names.splice(0,1);
console.log(elementSupprime)

// Insérer des éléments à un endroit précis du tableau avec le splice()
//  - 1er paramètre: position à laquelle je souhaite insérer mon/mes éléments
//  - 2nd paramètre: Pour insérer (et non remplacé) -> il sera toujours à 0
//  - les autres paramètres: toutes les valeurs que je souhaite insérer
elementSupprime.splice(1, 0, "Martin", "Jean")
console.log(elementSupprime)

// Remplacer des éléments à un endroit précis du tableau avec le splice()
//  - 1er paramètre: position du premier item que je souhaite remplacer
//  - 2nd paramètre: Le nombre d'items que je veux remplacer
//  - les autres paramètres: toutes les valeurs que je souhaite insérer

numbers = [12,34,56,78,90]

numbers.splice(2,2, 100, 100)
console.log(numbers)


// Depuis ES6
for(element of numbers) {
    console.log(element)
}

// fonction .forEach
console.log('________ Fonction forEach ________')

numbers.forEach((currentValue, index, arr) => {
    console.log(index + ': ' + currentValue + ' présent dans le tableau ' + arr )
})

numbers.forEach((currentValue) => console.log(currentValue))

numbers.forEach( () => console.log('forEach sans paramètre !'))

// Exercice : Faire une fonction qui 
//  - prend en paramètre un tableau
//  - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

// ==> si j'ai [1,2,3,4], la fonction doit retourner le tableau suivant: [1,4,9,16]


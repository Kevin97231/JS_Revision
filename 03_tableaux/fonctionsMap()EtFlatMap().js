
// La fonction map()
// La fonciton map permet de duppliquer un tableau en appliquant la même opération sur chacun des éléments du tableau

const person = { firstName: 'John', lastName: 'Doe' }

const persons = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Malcolm', lastName: 'Frye' },
    { firstName: 'Jayne', lastName: 'Cobb' },
]

const personsFullName = persons.map( (user) => [user.firstName, user.lastName].join(' ')) 

console.log('persons -> ', persons)
console.log('personsFullName -> ', personsFullName)

// Exercice : Faire une fonction qui 
//  - prend en paramètre un tableau
//  - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

// ==> si j'ai [1,2,3,4,5], la fonction doit retourner le tableau suivant: [1,4,9,16,25]

const valeurs = [1,2,3,4,5]

const carresDesValeurs = (tableau) => tableau.map( val => val * val)

console.log('carresDesValeurs -> ', carresDesValeurs(valeurs))

// Equivalent: 
function carresDesValeurs2(tableau) {
    return tableau.map(function(val){
        return val * val;
    })
}

console.log('carresDesValeurs 2 -> ', carresDesValeurs2(valeurs))

// Méthode flatMap()
let mapResult = valeurs.map( val => [val * val])
console.log('mapResult -> ', mapResult)

let flatMapResult = valeurs.flatMap( val => [val * val])
console.log('mapResult -> ', flatMapResult)
const tableau = [1,2,3,4]

// Somme de tous les chiffres du tableau
// 0 est la valeur initial, avant d'itérer sur chacun des éléments
const sommeTableau = tableau.reduce((total, currentValue) => total + currentValue, 0)

console.log(sommeTableau)

// Exercice 
// Somme de tous les chiffres au carré

const sommeCarre = tableau.reduce( (total, currentValue) => total + currentValue * currentValue, 0)

const sommeCarre2 = tableau.reduce ( (total, currentValue, index) => {
    console.log(`Index: ${index}, carré: ${currentValue * currentValue}`)
    return total + currentValue * currentValue
})

console.log(sommeCarre2)
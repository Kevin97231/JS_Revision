const firstName = 'John'
const LastName = 'Doe'

// Utilisation des backsticks (`) pour délimiter un littéral de modèle
// On utilisera ' ${} ' pour incorporer des expressions variables

const message = `Bonjour ${firstName} ${LastName} !`
console.log(message)

const array = [1,2,3,4]
const sumArray = `La somme de l'ensemble des éléments de mon tableau est ${array.reduce((total, currentValue) => total + currentValue)}`

console.log(sumArray)
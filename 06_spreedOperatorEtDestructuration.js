const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]

// En js, le '...' est appelé le spreed operator
const numbersOneCopy = [...numbersOne]
console.log('numbersOneCopy: ', numbersOneCopy)

const numbersCombined = [...numbersOne, ...numbersTwo]
console.log('numbersCombined: ', numbersCombined)



const cars = ['mustang', 'f-150', 'expedition']

// La destructuration
const [car, truck, suv] = cars

// const car = cars[0]
// const truck = cars[1]
// const suv = cars[2]

console.log('cars -> ',cars)
console.log('car -> ', car)
console.log('truck -> ', truck)
console.log('suv -> ', suv)


console.log('numbersCombined: ', numbersCombined)
const [one, two, ...rest] = numbersCombined

console.log(`one: ${one}, two: ${two}, rest: ${rest}`);

const calculate = (a, b) => {
    const add = a + b;
    const substract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, substract, multiply, divide]
}

const [add, substract, multiply, divide] = calculate(4, 7)
console.log(`add: ${add}, substract: ${substract}, multiply: ${multiply}, divide: ${divide}`);

const [somme] = calculate(4, 7)
console.log('somme: ', somme)

const [,soustraction,,division] = calculate(4, 7)

const person = { name:'John' , age: 30, city:'New York' };

// Ici, en utilisant la destructuration, je crée un constante 'city' et je lui attribue la valeur
// de 'person.city'
// const city = person.city

const { city } = person;
console.log('city: ', city);

const { age, name } = person;
console.log('age: ', age);
console.log('name: ', name);

// Pour renommer et donc utiliser une 'const' qui n'a pas le même nom que le propriété de l'objet
const { name: firstName } = person;
console.log('firstName: ', firstName)

// Copier un objet avec le spreed operator
const person2 = {...person}
console.log(person2)
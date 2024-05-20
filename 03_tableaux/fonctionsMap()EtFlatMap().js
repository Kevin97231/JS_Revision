
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

// 
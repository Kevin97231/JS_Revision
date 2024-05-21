class Car {
    constructor(name, year) {
        if( name === undefined || year === undefined ) {
            throw new Error ("Les propriétés 'name' et 'year' doivent être spécifiées !")
        }
        this.name = name;
        this.year = year;
    }

    toString() {
        return `nom: ${this.name}, année: ${this.year}`;
    }
}

const myCar = new Car('Peugeot', 2006)
console.log(myCar);
console.log(myCar.toString());

try {
    const myCar2 = new Car();
}
catch (error) {
    console.log(error.message);
}

// Accès aux propriétés
console.log(myCar.name)
console.log(myCar.year)

console.log(myCar['name'])
console.log(myCar['year'])


// Copier un objet

// --> A éviter.
// En faisant un simple égal, je copie la référence de l'objet, mais l'objet et l'objet copié ont les même valeurs.
// ==> Si je modifie une des propriétés de l'objet ou de l'objet copié, cela modifiera la propriété des deux objets
const myCar3 = myCar;
console.log(`car 1 ${myCar} et car 3 = ${myCar3}`)

myCar3.year = 2008;
console.log(`car 1 ${myCar} et car 3 = ${myCar3}`)


// Pour copier un objet 'proprement'
// Attention!! => object.assign ne copie pas les méthodes de classes. Il copie uniquement les propriétés et leur valeur de l'objet
const myCar4 = {}

Object.assign(myCar4, myCar)
console.log(`car 1 ${myCar} et car 3 = ${myCar4}`)

// Copier un objet avec le spreed operator 
const myCar5 = { ...myCar }


const person = { name:'John' , age: 30, city:'New York' };
const person2 = {...person}

console.log(person2)
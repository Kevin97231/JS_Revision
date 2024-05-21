// Exemple 1 : la librairie
const book1 = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald"
};
const book2 = {
    title: "The GeeksforGeeks",
    author: "Geek"
};

const myLibrary = { 
    name: "My Library", 
    books: [book1, book2],

    addBook: function(book) {
        this.books.push(book);
    },

    displayBooks: function() {
        console.log(`Books in ${this.name} `);
        this.books.forEach( (book, index) => console.log(`${index} : Title: ${book.title}, Author: ${book.author}`))
    }
}

const book3 = {
    title: "2023",
    author: "George Orwell"
};

myLibrary.displayBooks();
myLibrary.addBook(book3);
myLibrary.displayBooks();


// Exemple 2: L'équipe
// Approche fonctionnelle

function Player(name, age){
    this.name = name;
    this.age = age;
}

const player1 = new Player('Kumar', 31)
const player2 = new Player('Bob', 29)

const team = {
    name: 'red team',
    players: [player1, player2],

    addPlayer: function(player){
        this.players.push(player);
    },

    displayPlayers: function(){
        this.players.forEach( player => console.log(`joueur -> name:${player.name}, age:${player.age}`))
    }
}

const player3 = new Player('Raj', 32)

team.displayPlayers();
team.addPlayer(player3)
team.displayPlayers();


// Héritage
class Car {
    constructor(name) {
        this.name = name;
    }
    
    present() {
        return `I have a ${this.name}`
    }
}

// Le mot clé 'extends' est utilisé pour l'héritage.
// Ici, ma class 'Model' hérite de 'Car' 
// --> ainsi elle héritera de l'ensemble des propriétés et des méthodes de 'Car'
class Model extends Car {
    constructor(name, model) {
        // le mot clé 'super' appelle le constructeur parent
        super(name);
        this.model = model;
    }

    show() {
        return this.present() + "it's a " + this.model
    }
}

const car1 = new Car('Peugeot')
// console.log(car1.present())

const model1 = new Model('Peugeot', '206')

console.log(car1)
console.log(model1)

console.log(model1.present())

// Getters et setters:
// En POO (programmantion orientée objet): 
// - les getters sont utilisés pour l'accès aux valeurs des propriétés
// - les setters sont utilisés pour modifiées les valeurs des propriétés

class Model2 extends Car {
    constructor(name, model){
        super(name);
        this._model = model;
    }

    show() {
        return this.present() + "it's a " + this.model
    }

    get model(){
        return this._model;
    }

    set model(model){
        this._model = model;
    }
}

const model2 = new Model2('Ford', 'Mustang')

// Ici, je passe par le setter
model2.model = 'Fiesta';
// Ici, je passe par le getter
console.log(model2.model);

// Ici je ne passe pas ni par le getter ni par le setter
model2._model = 'Focus';
console.log(model2._model);


// Avec Encapsulation
// Il s'agit de rendre les propriétés privées (donc inaccessible en dehors de la classe)
// Puis on va gérer l'accès avec les getters et setters. Ce seront les méthodes get et set qui seront accessibles (et non les propriétés directement)

console.log('__________________________ ENCAPSULATION__________________________')

class Person {
    #name;
    #age;

    constructor(name, age){
        // de cette façon, je mets à jour directement la propriété.
        // this.#name = name;
        // this.#age = age;

        // De cette façon, je mets à jour EN PASSANT PAR LE SETTER
        this.name = name;
        this.age = age;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName
    }

    get age(){
        return this.#age;
    }

    set age(newAge){
        if(newAge > 0 && newAge < 99){
            this.#age = newAge;
        } else {
            console.error("l'âge doit être compris entre 0 et 99ans")
        }
    }

    hello() {
        return `Hello my name is ${this.name}`
    }

}


const user1 = new Person('John', 45)
console.log('user1', user1)

// en faisant user1.name, je passe par le getter
console.log(user1.name)

// Ici, je passe par mon setter 
user1.name = 'Toto'
// Ici, je passe par mon getter
console.log(user1.name)

// Ici, je passe par mon setter 
user1.age = 52
// Ici, je passe par mon getter
console.log(user1.age)

const user2 = new Person('Martin', 115)
console.log(user2.age)

class Ninja extends Person {
    #speciality

    constructor(name, age, speciality){
        super(name, age)
        this.#speciality = speciality
    }

    hello() {
        return `Hello my name is ${this.name} and my speciality is ${this.#speciality}`
    }

}

const ninja = new Ninja('Bruce', 22, 'Karate')
console.log(ninja.hello())

// pas accessible pare que pas de getter
console.log(ninja.speciality)

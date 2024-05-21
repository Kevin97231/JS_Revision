// Exercice : Création d'un système de gestion d'employés
// Partie 1 : Création des classes de base

//     Définissez une classe Employee avec les propriétés suivantes :
//         name (nom de l'employé)
//         age (âge de l'employé)
//         baseSalary (salaire de base de l'employé)
//         employeeId (identifiant de l'employé)

//     Ajoutez une méthode calculateSalary() à la classe Employee qui calcule le salaire total de l'employé en ajoutant un bonus de performance au salaire de base.
//      ==> calculeSalary() renverra -> baseSalary * 1.1;

// Partie 2 : Création d'une sous-classe
//     Créez une sous-classe appelée Manager qui hérite de la classe Employee.

//     Ajoutez une propriété privée à la classe Manager appelée bonusPercentage qui représente le pourcentage de bonus que le manager reçoit en fonction de la performance.
//      -> bonusPercentage est égal à 15% pour tous les managers. 
//      -> calculateSalary() renverra baseSalary * bonusPercentage

//     Redéfinissez la méthode calculateSalary() dans la classe Manager pour prendre en compte le bonus de performance en fonction du pourcentage de bonus.
//       ==> calculeSalary() renverra -> baseSalary * bonusPercentage;

// Partie 1

class Employee {
    constructor(name, age, baseSalary, employeeId) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        this.employeeId = employeeId;
    }

    calculateSalary() {
        return this.baseSalary * 1.1
    }
}

// PARTIE 2

// Je n'ai pas besoin de constructeurs. Une classe enfant sans constructeur utilisera
// le constructeur de la classe parente.
class Manager extends Employee {
    #bonusPercentage = 1.15;

    calculateSalary() {
        return this.baseSalary * this.#bonusPercentage
    }
}


employe = new Employee('Jean', 42, 1000);
manager = new Manager('Jean', 42, 1000);

console.log(employe.calculateSalary())
console.log(manager.calculateSalary())

// __________________________________________________________________________________________________________________

// Exemple avec getter / setter (hors consigne)
class Manager2 extends Employee {
    #bonusPercentage = 1.15;

    calculateSalary() {
        return this.baseSalary * this.#bonusPercentage
    }

    get bonusPercentage (){
        return this.#bonusPercentage
    }

    set bonusPercentage(newBonusPercentage) {
        this.#bonusPercentage = newBonusPercentage
    }

}


manager2 = new Manager2('Jean', 42, 1000);

console.log(manager2.bonusPercentage)

manager2.bonusPercentage = 5.3
console.log(manager2.bonusPercentage)
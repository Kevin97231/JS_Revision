const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const wordsFilter = words.filter( word => word.length > 6 );

console.log(wordsFilter);

const filtreTexte = (entreeUtilisateur) => {
    return words.filter( 
        word => word.indexOf(entreeUtilisateur) !== -1
    )
}

// Equivalent:
const filtreTexte2 = (entreeUtilisateur) => words.filter( word => word.indexOf(entreeUtilisateur) !== -1)

console.log(filtreTexte('es'));
console.log(filtreTexte('s'));

const numbers = [1,2,3,4,5]
const numbersFilter = numbers.filter( number => number > 3)

console.log(numbersFilter);
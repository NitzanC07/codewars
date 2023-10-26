/** 
 * Sort Animals
 * CodeWars: https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
 * 
 * Consider the following class:
 * 
 * var Animal = { 
 *  name: "Cat", 
 *  numberOfLegs: 4 
 * }
 * 
 * Write a method that accepts a list of objects of type Animal, and returns a new list. 
 * The new list should be a copy of the original list, sorted first by the animal's 
 * number of legs, and then by its name.
 * 
 * If null or None is passed in, the method should return the same. If an empty list 
 * is passed in, it should return an empty list back.
*/

const animals = [
    { name: "Cat", numberOfLegs: 4 }, 
    { name: "Snake", numberOfLegs: 0 }, 
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Fish", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 }
];

function sortAnimal(animals) {
    let sortedAnimals = animals.slice();

    sortedAnimals = animals.sort(
        (a1, a2) => 
            (a1.numberOfLegs < a2.numberOfLegs) ? -1 : (a1.numberOfLegs > a2.numberOfLegs) ? 1 : 
            (a1.name < a2.name) ? -1 : (a1.name > a2.name) ? 1 : 0);
    
    return sortedAnimals;
}

const result = sortAnimal(animals);
console.log(result);
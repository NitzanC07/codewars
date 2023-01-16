/** 
 * There is a bus moving in the city which takes and drops some people at each bus stop.
 * You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of 
 * people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
 * Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
 * Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
 * they are probably sleeping there :D
 * Take a look on the test cases.
 * Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
 * The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
 */

function peopleOnBus(busStops) {
    let passngers = 0;
    busStops.forEach(station => {
        passngers += station[0] - station[1]
    })
    if (passngers < 0) {
        return "Invalid input";
    }
    return passngers;
}

const busStops = [[2, 0], [5, 1], [7, 5], [0, 2]] // 6
const busStops1 = [[15, 0], [12, 4], [4, 4], [2, 17], [0, 5]] // 3
const busStops2 = [[0, 0]] // 0
const busStops3 = [[6, 0], [2, 9]] // 'Invalid input'
const result = peopleOnBus(busStops3);
console.log(result);
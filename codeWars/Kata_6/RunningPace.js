/** 
 * In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.
 * Create the following function:
 * runningPace(distance, time)
 * Where: distance - A float with the number of kilometres
 * time - A string containing the time it took to travel the distance. 
 * It will always be minutes:seconds. For example "25:00" means 25 minutes. 
 * You don't have to deal with hours.
 * The function should return the pace, for example "4:20" means it took 
 * 4 minutes and 20 seconds to travel one kilometre.
 * 
 * Note: The pace should always return only the number of minutes and seconds. 
 * You don't have to convert these into hours. Floor the number of seconds.
 */

const TIME = "8:30"
const KM = 2

// Level 1
// Calculate the running's pace in minutes per kilometer.
function runningPace(distance, time){
    const timeSeconds = Number(time.split(":")[0])*60 + Number(time.split(":")[1])
    const paceSeconds = timeSeconds / distance;
    const paceMins = `${Math.floor(paceSeconds / 60)}`.padStart(2, '0');
    const paceSecs = `${Math.floor(paceSeconds % 60)}`.padStart(2, '0');
    return `${paceMins}:${paceSecs}`
}

const pace = runningPace(KM, TIME);
console.log(`Pace: ${pace}`);

// Calculate the running's speed in kilometer per hour.
function runningSpeed(distance, time) {
    const timeSeconds = Number(time.split(":")[0])*60 + Number(time.split(":")[1])
    const timeHour = timeSeconds / 3600
    const speed = (distance / timeHour).toFixed(2);
    return speed
}

const speed = runningSpeed(KM, TIME);
console.log(`Speed: ${speed}`);

// Level 2 - Convert pace in minutes per kilometer to speed in kilometers per hour.
function convertPaceToSpeed(pace) {
    return runningSpeed(1, pace);
}

const s = convertPaceToSpeed(pace);
console.log(s);

// Level 3 - Convert speed in kilometers per hour to pace in minutes per kilometer.
function convertSpeedToPace(speed) {
    const minutesPerKilometer = 60 / speed;
    const paceMins = `${Math.floor(minutesPerKilometer)}`.padStart(2, '0');
    const paceSecs = `${Math.floor((minutesPerKilometer-paceMins)*60)}`.padStart(2, '0');    

    return `${paceMins}:${paceSecs}`;
}

const p = convertSpeedToPace(speed)
console.log(p);

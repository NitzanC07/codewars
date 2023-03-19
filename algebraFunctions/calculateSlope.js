function getSlope(p1, p2) {
    // Return the slope of the line through p1 and p2
    if (p1 == p2) {
        return null
    }
    return ((p2[1] - p1[1]) / (p2[0] - p1[0]))
}



const answer = getSlope([104, -196], [-64, 140])
console.log(answer);
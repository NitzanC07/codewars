/** 
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
 * IPs should be considered valid if they consist of four octets, 
 * with values between 0 and 255, inclusive.
 * 
 * Examples of valid inputs:
 *      "1.2.3.4"
 *      "123.170.53.254"
 * 
 * Examples of invalid inputs:
 *      "1.2.3"
 *      "1.2.3.4.5"
 *      "105.42.450.38"
 *      "105.045.255.023"
 */

// function isValidIP get 1 argument type string
// and return boolean value true or false.

function isValidIP(ip) {
    console.log(`Test: ${ip}`);
    const ipSegments = ip.split('.')
    if (ipSegments.length !== 4) {
        return false;
    } else {
        for (let i = 0; i < ipSegments.length; i++) {
            if ((Number(ipSegments[i]) > 0 && ipSegments[i][0] === "0") || ((Number(ipSegments[i]) < 0) || (Number(ipSegments[i]) > 255)) || (isNaN(ipSegments[i]))) {
                return false;
            } 
        }
        return true;
    }
}

/**
 * Tests
 */
const sampleIPs = [
    "abc.abc.abc.abc",
    "123.150.254.45",
    "260.23.45.0",
    "190.0.78.36",
    "012.13.14.15",
    "12.13.15.16",
    "98.54.32",
    "102.255.78.62.178",
    "0.0.0.0",
    ""
]

sampleIPs.forEach(ip => {
    console.log(isValidIP(ip));
})

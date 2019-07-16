// write a function that accepts any band name as an argument.
// The function will increment a global variable by one each time it is invoked, 
//and return that number, and the band name concatenated together

let bandNumber = 1



// const setNumber = function(bandName) {
//     return `${bandNumber++}. ${bandName}`
// }

// the arrow way
const setNumber = bandName => `${bandNumber++}. ${bandName}`

const scum = setNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

// same as above
console.log(setNumber("Underdogs"))  // This should print "2. Underdogs" in the console

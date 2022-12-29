/* Exercice 1 */

let response = prompt("What language are you speaking ???", );

let convertResp = response.toLowerCase();

if (convertResp === "french") {
    console.log("Bonjour");
} else if (convertResp === "english") {
    console.log("Hello");
} else if (convertResp === "hebrew") {
    console.log("Shalom");
} else {
    console.log("01110011 01101111 01110010 01110010 01111001");
}


/* Exercice 2 */


let note = prompt("Enter your mark please ?", )

if (note > 90) {
    console.log("A");
} else if (note > 80 && note <= 90) {
    console.log("B");
} else if (note >= 70 && note <= 80) {
    console.log("C");
} else {
    console.log("D");
}

/* Exercice 3 */

let word = prompt("Enter your verb !!!", );

if (word.length >= 3 && word.substr(-3) != "ing") {
    console.log(`${word}ing`);
} else if (word.length >= 3 && word.substr(-3) === "ing") {
    console.log(`${word}ly`);
} else {
    console.log(word);
}
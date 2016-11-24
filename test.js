console.time("timer");
var numReserve = [];
while (numReserve.length < 1000000) {
    var number = Math.random() * 1000000;
    numReserve[numReserve.length] = Math.round(number);
}
var numReservelength = numReserve.length;
console.log("Количество чисел -", numReservelength);
console.log(numReserve);
console.timeEnd("timer");

console.time("timer");
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
var sortnumReserve = numReserve.sort(compareNumeric);
console.log(sortnumReserve);
console.timeEnd("timer");

console.time("timer");
var reversesortnumReserve = sortnumReserve.reverse();
console.log(reversesortnumReserve);
console.timeEnd("timer");



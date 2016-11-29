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

// int[,] matrixC = new int[3,4] {{1,3,4,2},{4,5,8,3},{2,3,6,7}};
// int[] matrixA = new int[3] {60, 80, 100};
// int[] matrixB = new int[4] {40, 60, 80, 60};



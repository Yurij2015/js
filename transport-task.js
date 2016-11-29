var matrixC = [
    [1, 3, 4, 2],
    [4, 5, 8, 3],
    [2, 3, 6, 7]
];
var matrixB = [40, 60, 80, 60];
var matrixA = [60, 80, 100];

console.log("Транспортная задача");
document.write("<br>");
document.write(matrixB);
document.write("<br>");
for (var j = 0; j < matrixC.length; j++) {
    for (var n = 0; n < matrixC.length + 1; n++) {
        if (n === matrixC.length)
            document.write(matrixC[j][n]);
        else
            document.write(matrixC[j][n] + " | ");
    }
    document.write("<br>");
}
for (var k = 0; k < matrixA.length; k++) {
    for (var z = 0; z < matrixB.length; z++) {
        if (matrixA[k] > matrixB[z]) {
            var col = matrixB[z];
            var col1 = matrixA[k] - matrixB[z];
            var col2 = col1 - matrixB[z];
            var col3 = col2 - col1;
        } else if (matrixA[k] < matrixB[z]) {
            var col = matrixA[k];
            var col1 = matrixB[z] - matrixA[k];
            var col2 = col1 - matrixA[k];
            var col3 = col2 - col1;
        } else if (matrixA[k] = matrixB[z]) {
            var col = matrixA[k];
            var col1 = 0;
            var col2 = 0;
            var col3 = 0;
        } else if (matrixA[k] == 0){
            var col = 0;
            var col1 = 0;
            var col2 = 0;
            var col3 = 0;
        } else if (matrixB[z] == 0){
            var col = 0;
            var col1 = 0;
            var col2 = 0;
            var col3 = 0;
        }


        console.log("col " + col);
        console.log("col1 " + col1);
        console.log("col2 " + col2);
        console.log("col3 " + col3);
        console.log("----");

    }
    // console.log("col " + col);
    // console.log("col1 " + col1);
    // console.log("col2 " + col2);
    // console.log("col3 " + col3);
    // console.log("----");
}

console.log("Zero Cool Application"); // Start message
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0){
        console.log("ZeroCool"); // Print ZeroCool
    } else if (i % 3 == 0) {
        console.log("Zero"); // Print Zero
    } else if (i % 5 == 0) {
        console.log("Cool"); // Print Cool
    } else {
        console.log(i); // Print the value of i
    }
}
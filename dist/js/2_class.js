"use strict";
console.log("class 2");
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw Error("Type Check Error!");
    }
}
add(3, 5);
add("abc", "def").split(" ");

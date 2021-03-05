// examples of json

// object
let data = {
    x: 0,
    name: "John"
}

// stringify json ==============================================
console.log("\nstringify");

let json = JSON.stringify(data);

console.log(json);
console.log("typeof json", typeof json);

console.log("\nparse");

// parse json ===================================================
let dataParsed = JSON.parse(json);

console.log(dataParsed);
console.log("parsed data:", dataParsed.name);
console.log("typeof parsed json:", typeof dataParsed);

console.log("\nconvert array");

// convert array to the string json ===================================================
let arr = [1, 3, 5, 7, 9];
let parsedArr = JSON.stringify(arr);

console.log("my arr:", arr);
console.log("typeof my arr:", typeof arr);

console.log("parsed arr:", parsedArr);
console.log("typeof parsed arr:", typeof arr);

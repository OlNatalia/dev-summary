// callback
// callbacks to nest the code
// a callback is a function that is to be executed after another function has finished executing 

let fetchData = (url, callback) => {
    setTimeout(() => {
        console.log("sending data ", url);
        let data = "data from server";

        callback(data);
    }, 0);
};


let callback = (data) => {
    console.log(data);
};

fetchData("http://", callback);


// ================================
// easy example

// function definition with an argument to a callback function
let getNum = (num1, num2, callback) => {
    callback(num1, num2);
};


// functions that will be pass as a callback to another function
let sum = (n1, n2) => {
    console.log(n1 + n2);
};

let sub = (n1, n2) => {
    console.log(n1 - n2);
};


// call function with a reference to a callback function
getNum(5, 2, sum);
getNum(5, 2, sub);


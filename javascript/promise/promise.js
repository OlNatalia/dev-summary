//  promise

// callback
// let fetchData = (url, callback) => {
//     setTimeout(() => {
//         console.log("sending data ", url);
//         let data = {
//             url: url,
//             data: "data from server"
//         };
//         callback(data);
//     }, 3000);
// };


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = "received server data";
        reject(data);
        // resolve(data);
    }, 0)
});

// promise.then((data) => {
//     let convertedData = "converted data";

//     console.log(data);
// });



// building callbacks from the promise

// promise.then((data) => {
//     let convertedData = "converted data";
//     console.log(convertedData);
//     return convertedData;
// }).then((response) => {
//     return response;
// }).then((res2) => {
//     return res2;
// });


promise.then((data) => {
    let convertedData = "converted data";
    console.log(convertedData);
    return convertedData;
}).then((response) => {
    console.log(response);
    return response;
}).catch((err) => {
    console.log(err);
});


// ================================

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num1 = 1;
        let num2 = 2;
        let sum = num1 + num2;

        if (sum > 10) {
            resolve(sum);
        } else {
            reject("sum is less than 10");
        }
        // reject(data);
        // resolve(data);
    }, 0)
});

// console.log(promise);


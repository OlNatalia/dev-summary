// create your promise
let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let num=2
        let num1=13
        let sum= num+num1
        if(sum>10) {
            // resolve promise
            resolve(sum)
        } else {
            // reject promise
            reject("sum is less than 10")
        }
    }, 0);
})

console.log(promise) // pending status

// get result from promise
promise // use then to get result from this promise
.then((anything) => {
    let convertedData= "converted data"
    return convertedData
})
.then((response) => {
    console.log(response)
}) // use catch to catch any error from server
.catch((err) => {
    console.log(err)
})




// fetch
fetch("https://jsonplaceholder.typicode.com/users") // fetch object from browser
.then((data) => {
    // parsing data, so we can use it
   let json =   data.json()
   return json // returning it to next then
}).then(res => {
    let user= res[0] // getting first user from res array
    return user // return user to next then
}).then(user => {
    console.log(user)
}).catch(err => console.log(err)) // catch error

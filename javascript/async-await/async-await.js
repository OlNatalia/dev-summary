// promise
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

fetchData()
    .then(data => {
        let json = data.json();
        return json;
    })
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));


// async/await
// async function fetchData1() {
//     // receive data from server
//     let serverData = await fetch('https://jsonplaceholder.typicode.com/posts');
//     // convert data to json
//     let json = await serverData.json();
//     console.log(json);
// }

// console.log(fetchData1());
// fetchData1();


// async/await whit try and catch
async function fetchData1() {
    try {
        // receive data from server
        let serverData = await fetch('https://jsonplaceholder.typicode.com/users');
        // convert data to json
        let json = await serverData.json();
        let user = json[0].username;
        console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}

fetchData1();

// async/await as an arrow function
let fetchData2 = async () => {

};

// async is not necessary here
/*
async function fetchData3() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

fetchData3().then(data => {

})
*/

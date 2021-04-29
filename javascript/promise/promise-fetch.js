// promise
// fetch objet is a promise

// console.log(window);

// creating a chain of functions

// server
fetch('https://jsonplaceholder.typicode.com/users')
    // receive the data
    // .then(response => response.json())
    // .then(json => console.log(json))

    .then((data) => {
        console.log(data); // only file
        let json = data.json(); // convert data in asynch code
        return json;

        // JSON.parse(data); // this method to convert data works only in synch code
    })
    // use json parsed data
    // .then((json) => {
    //     console.log(json);
    // })
    .then((res) => {
        let user = res[0];
        return user;
    })
    .then((user) => {
        console.log(user);
    })
    // get the error (message) in the catch
    .catch(err => console.log(err))


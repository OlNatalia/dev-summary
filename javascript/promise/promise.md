# Promise

A promise is an object that wraps an asynchronous operation and notifies when it’s done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result is available and “catch(…)” for when something went wrong.

```javascript
// ES5
someAsyncOperation(someParams)
.then(function(result){
    // Do something with the result
})
.catch(function(error){
    // Handle error
});

// ES6
someAsyncOperation(someParams)
.then(result => result.json())
.catch(err => console.log(err));

// “someAsyncOperation(someParams)” is not a Promise itself but a function that returns a Promise
```

## 3 states of promises

1. pending
2. fulfill (result / response)
3. rejected

promises don't need callback because they have result and reject


fetch is an object from the window



```javascript
function getAsyncData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}
```

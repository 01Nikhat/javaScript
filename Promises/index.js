    //DO an async task
    // DB Calls , cryptography,network

const promiseone = new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Async task is complete");
    resolve();
   },1000)

})

promiseone.then(function(){
    console.log("promise consumed");
    
})
//similar we can write in this way
//example 2
const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("Async task is two");
     resolve();
    },1000)
 
 }).then(function(){
    console.log("async task is consume for second example");
    
 })

 //example three

 const promisethree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username: "nikhat",email:"nikhat@gmail.com"})
        
    },1000)
 })

 promisethree.then(function (userdata) {
    console.log(userdata);
    
    
 })
//example 4

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"nikki",email:"nikki@gmail.com"})
        }
        else{
            reject('Error: Something went wrong');
        }
        
    },1000)
})

promisefour.then((userdata)=>{
    console.log(userdata);
    return userdata.username
    
},1000).then((username)=>{
    console.log(username);
    
}).catch(function(userdata){
    console.log("error");
    
}).finally(function(){
    console.log("the promise either resolve or reject but it must execute" );
    
    
})

//example five using async

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"samiul",email:"sam@google.com",age:26})
        }
        else{
            reject('ERROR: something went wrong on promise five')
        }
    },1000)
})

async function consumepromisefive() {
    try {
        const response = await promisefive
        console.log(response);
        console.log("async five");
        
        
    } catch (error) {
        console.log(error);
            
    }
       
}

consumepromisefive();

//example 6

/*
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("ERROR: ",error);
        
    }
    
}

getAllUser();
*/
//example 6 using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
const user = {
    username : "nikhat",
    age: 26,
    email: "nik@google.com",

    GetData: function (){
        //`console.log(`${this.username} , welcome`);
        
    }
}

user.GetData();

//console log doesn't print this inside function


//ex 1

function check() {
    let name = "nikki";
    console.log(this.name);
    
}

check();
// output : undefined

const data = function () {
    let name = "nikki";
    console.log(this.name);
    
}
data();
//undefined
const dataval = ()=> {
    let name = "nik";
    console.log(this.name);
    
}
dataval()
//output: undefined
//arror function can be written in this way if one line code is present without parantheses
const dataval1 = ()=> console.log("nikki");
//to define object in arrow function  
    
const dataval2 = ()=> console.log({username:"nikki"});
dataval2()

//call, this
//call contain refernce of the function because without call setUsername will be called but after execution 
//it will terminate from call stack so to contain the reference we use call()
function setUserName(username) {
    //in future ,here complex DB present and we want to fetch the username
    this.username = username
    console.log("setUserName function called");  
}

function createUser(username,email,password) {
    setUserName.call(this,username)// here this containing the data of setUsername()
    this.email = email
    this.password = password

}
const result = new createUser("nikhat","nik@google.com","123")
console.log(result);

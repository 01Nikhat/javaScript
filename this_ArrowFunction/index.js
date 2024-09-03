const user = {
    username : "nikhat",
    age: 26,
    email: "nik@google.com",

    GetData: function (){
        //`console.log(`${this.username} , welcome`);
        
    }
}

user.GetData();

//we can't use this inside function

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
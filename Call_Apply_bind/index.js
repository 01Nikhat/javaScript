//call and apply
let name1 ={
    firstname : "samiul",
    lastname : "haque"
}

let printFullname = function(hometown,state){
    console.log(this.firstname + " " + this.lastname + " "+"from" +" "+ hometown + ","+ state);
    
}
printFullname.call(name1,"kolkata","west bengal");

let name2 = {
    firstname:"nikhat",
    lastname : "parvin"
}
//function borrowing
printFullname.call(name2,"bandel","west bengal");
//call method pass argument but in case of apply method we second argument pass as a array list
printFullname.apply(name2,["bandel","west bengal"]);

//bind 
//instead of direct calling it's return the method which can call anytime 

let printMyName = printFullname.bind(name2,"bandel","west bengal");
console.log(printMyName);
printMyName();
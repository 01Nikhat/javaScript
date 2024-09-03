/* 1. MAP
1.1 DOUBLE
1.2 TRIPLE
1.3 BINARY
 */

const arr =[5,1,3,4,6];



const double = function(indexval){
    return indexval*2;
}

const triple = function(indexval){
    return indexval*3;}

const binary = function(indexval){
        return  indexval.toString(2);
    }
const output1 = arr.map(double);
console.log(output1);

const output2 = arr.map(triple);
console.log(output2);

const output3 = arr.map(binary);
console.log(output3);
//const output = arr.map((x)=> x.toString(2)); 

//FILTER

const array = [1,27,4,6,2];
//filter odd value

function isEven(x){
    return x%2 === 0;
}
const output  = array.filter(isEven);
console.log(output);
//filter >4 value
function greaterVal(x){
    return x >4
}
console.log(array.filter(greaterVal));

const outputval = array.filter((x)=> x>4 );
console.log(outputval);

//find sum 

function findSum (arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//using reduce() to find sum
const outputres = arr.reduce(function(acc,cur){
    acc= acc+cur;
    return acc;
},0);

console.log(outputres);

//example 3
const users = [
    {firstName: "nikhat ", lastName: "parvin", age:25},
    {firstName: "md ", lastName: "ashik", age:29},
    {firstName: "sam ", lastName: "haque", age:27},
    {firstName: "md ", lastName: "atif", age:27}
];

//find the list with full name

const fullname = users.map((x)=>x.firstName +""+ x.lastName);
console.log(fullname);
//how many people have have same age

const sameAge = users.reduce(function(acc,cur){
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age];
    }
    else{
        acc[cur.age] = 1;
    }
    return acc;
},{});

console.log(sameAge);

//lastName name of people whose age is greater than 26
const findName = users.filter((x)=> x.age>26).map((x)=> x.lastName);

console.log(findName);

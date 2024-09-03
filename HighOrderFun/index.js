/* 1.basic log for finding area,circumference,diameter
    2. high order logic to find the are , circumference,diameter
    

*/

//basic logic
const radius = [1,2,3,5];

const calculatArea = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);

    }
    return output;
}
//console.log(calculatArea(radius));

const calcCircumFerence = function(radius){
    const output = [];
    for(let i =0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
//console.log(calcCircumFerence(radius));
const calDiameter = function(radius){
    const output = [];
    for(let i =0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

//console.log(calDiameter(radius));

//2.high order logic

const Area = function(radius){
    return (Math.PI * radius *radius);
}
 
const circumference = function(radius){
    return(2*Math.PI * radius);
}

const Diameter = function(radius){
    return(2*radius);
}
const calculate = function(radius,logic){
    const output = [];
    for(let i=0 ;i<radius.length;i++) {
        output.push(logic(radius[i]));
      
    }
    return output;
}
/*console.log(calculate(radius,Area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,Diameter));*/





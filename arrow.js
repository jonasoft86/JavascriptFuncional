

function suma (a,b){
    return a+b;
}

let sumaArrow = (a,b) => a+b;

function isPositive(number){
    return number  > 0;
}
let  isPositiveArrow = (number) => number>0;

console.log(isPositive(7));
console.log(isPositiveArrow(-1));

console.log(suma(6,6));
console.log(sumaArrow(6,7));
//

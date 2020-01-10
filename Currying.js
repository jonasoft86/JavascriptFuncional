
function sumar(a,b){
    return a+b;
}

/*
function SumaCurryng(a){
    return function(b){
        return a+b;
    }
}
*/
let SumaCurryng = (a) => (b) => {return a+b};

let resultado = sumar(5,6);
let resultadoCurryng = SumaCurryng(5)(6);

//Retorna un closure
console.log(resultadoCurryng);
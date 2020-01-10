let numbers = [2,3,4];

function transformNumbers(numbers){
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = Math.pow(numbers[i],2)
    }
    return numbers;
}

//Sin mutacion - ya que no transforma los originales
var transformNumbersMap = numbers.map((number) => Math.pow(number,2)  );


console.log(transformNumbers(numbers))
console.log(transformNumbersMap)
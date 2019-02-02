function fizzBuzz(num) {
    for(var i=1; i<=100;i++){
        if(num % 3 == 0 && num % 5 == 0){
            return "FizzBuzz"
        }else if(num  % 3 == 0){
            return "Fizz"
        }else if(num % 5 == 0) {
            return "Buzz"
        }
    }
    return num
}
module.exports = fizzBuzz;
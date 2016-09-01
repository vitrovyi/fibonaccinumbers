var number1 = 1;
var number2 = 1;
var result = 0;
var fibonacci = prompt('Enter please number');

for ( var i = 0; i < (fibonacci - 2); i++) {
    if (number1 <= number2) {
        number1 += number2;
    } else {
        number2 += number1;
    }
}

if (number1 > number2) {
    result = number1;
} else {
    result = number2;
}

var output = "Your fibonacci number is - " + result;

console.log(result);
document.write(output);
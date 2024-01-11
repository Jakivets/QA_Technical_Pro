
// ДЗ № 1

function myIsNaN(value) {
    return value !== value;
}
console.log(myIsNaN(NaN));       // повертає true
console.log(myIsNaN('hello'));   // повертає false
console.log(myIsNaN(123));       // повертає false
console.log(myIsNaN(undefined)); // повертає false

// ДЗ № 2
function pad(str, char, length, padStart) {
    let padding = '';

    let padLength = length - str.length;

    if (padLength <= 0) {
        return str;
    }

    while (padding.length < padLength) {
        padding += char;
    }

    padding = padding.substring(0, padLength);

    return padStart ? padding + str : str + padding;
}
console.log(pad('qwerty', '+', 10, true));  // Виводить '++++qwerty'
console.log(pad('qwerty', '-', 10, false)); // Виводить 'qwerty----'
console.log(pad('qwerty', '*', 5, true));   // Виводить 'qwerty', оскільки рядок вже 6 символів

// ДЗ № 3
function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        
        let randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log('Кількість згенерованих чисел:', count);
    console.log('Парних чисел:', evenCount);
    console.log('Не парних чисел:', oddCount);
    console.log('Відсоток парних до не парних:', evenPercentage.toFixed(2) + '% / ' + oddPercentage.toFixed(2) + '%');
}

checkProbabilityTheory(10000); 
/* має бути такий результат: 
Кількість згенерованих чисел: 10000; 
Парних чисел: 5077; 
Не парних чисел: 4923; 
Відсоток парних до не парних: 50.77% / 49.23%

Для прикладу взяв число 10000
*/


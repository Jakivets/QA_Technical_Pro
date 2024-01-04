/* 
ДЗ № 1

ВАРІАНТ 1
*/
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangle(8, '@');

// ВАРІАНТ 2
function drawTriangleRecursively(height, symbol, currentRow = 1, currentSymbols = '') {
    if (currentRow > height) {
        return;
    }

    currentSymbols += symbol;
    console.log(currentSymbols);

    drawTriangleRecursively(height, symbol, currentRow + 1, currentSymbols);
}
drawTriangleRecursively(13, '$');

/* 
ДЗ № 2
*/
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log('Сума чисел від 1 до 100, які не кратні 3: ' + sum); // Повинно вивести: Сума чисел від 1 до 100, які не кратні 3:  3367

/* 
ДЗ № 3
*/

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(3, 3)); // Повинно вивести 27


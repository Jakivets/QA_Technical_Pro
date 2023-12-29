let year = prompt("Введіть кількість років:");


if (!isNaN(year) && year >= 0) {
 
    if (year === '1') {
        console.log(year + " рік");
    } else if (year % 10 === 1 && year % 100 !== 11) {
        console.log(year + " рік");
    } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
        console.log(year + " роки");
    } else {
        console.log(year + " років");
    }
} else {
    console.log("Введено некоректне число або від'ємне число.");
// ДЗ № 1
let regex = /^[^Aa]{6,}$/;

console.log(regex.test("123456jknjknkj")); 
console.log(regex.test("a5hjjj")); 
console.log(regex.test("1B3d56gffhghgvhvg")); 

// ДЗ № 2
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Цей адрес не підходить
    },
];

// Регулярний вираз для валідації email
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Масив для зберігання відповідних email адрес
var trustedEmails = [];

// Перевіряємо кожний об'єкт у масиві
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    // Якщо email відповідає регулярному виразу, додаємо його до масиву trustedEmails
    if (emailRegex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);
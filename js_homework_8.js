// ДЗ № 1

let car = {
    model: "Audi A7",
    year: 2021,
    mileage: "38500 km",
    price: "$48000",
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

car.getInfo(); // виводимо результат

//додаємо дві властивості до обʼєкта
car.color = 'black';
car.engine = '3.0';

car.getInfo(); // виводимо результат

// ДЗ № 2 Сума вартості послуг

const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                total += price;
            }
        }
        return total + ' грн';
    },
    minPrice: function() {
        let min = null;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                if (min === null || price < min) {
                    min = price;
                }
            }
        }
        return min + ' грн';
    },
    maxPrice: function() {
        let max = null;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                if (max === null || price > max) {
                    max = price;
                }
            }
        }
        return max + ' грн';
    }
};

// Додаємо нову послугу
services['Розбити скло'] = "200 грн";


console.log(services.price()); // Виведе загальну вартість - 440 грн
console.log(services.minPrice()); // Виведе мінімальну вартість - 60 грн
console.log(services.maxPrice()); // Виведе максимальну вартість - 200

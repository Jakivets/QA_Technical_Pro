let unit = "км";
let quantity = 10;

let resultValue;
let resultUnit;

switch (unit) {
    case "км":
        resultValue = quantity * 1000;
        resultUnit = "м";
        console.log(`${quantity} ${unit} це ${resultValue} ${resultUnit}.`);
        break;
    case "год":
        resultValue = quantity * 60;
        resultUnit = "хв";
        console.log(`${quantity} ${unit} це ${resultValue} ${resultUnit}.`);
        break;
    case "кг":
        resultValue = quantity * 1000;
        resultUnit = "г";
        console.log(`${quantity} ${unit} це ${resultValue} ${resultUnit}.`);
        break;
    default:
        console.log("Невідома одиниця вимірювання");
        break;
}
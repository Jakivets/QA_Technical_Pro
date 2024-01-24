// ДЗ № 1

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);

// ДЗ № 2
function findValueByKey(companyName, companyObject) {
    if (companyObject.name === companyName) {
        return {
            name: companyObject.name,
            type: companyObject.type,
            platform: companyObject.platform,
            sellsSolution: companyObject.sellsSolution
        };
    }

    if (companyObject.clients) {
        for (let client of companyObject.clients) {
            if (client.name === companyName) {
                return {
                    name: client.name,
                    type: client.type,
                    uses: client.uses,
                    sells: client.sells
                };
            }
            let result = findValueByKey(companyName, client);
            if (result) return result;
        }
    }

    return null;
}

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

console.log(findValueByKey('Клієнт 1', company)); 


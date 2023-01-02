let arr = [
    {
        id: 1,
        name: 'Escort',
        budget: 800000,
        tax: 15,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'Shmidt',
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'Sogdiana_ice_cream',
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
]

arr.filter(item => {
    let taxSum = item.tax  * item.budget / 100
    let expensesPerYear = item.expensesPerYear.reduce((a,b) => {
        return a + b.total
    },0)

    console.log(
        `
        Компания: ${item.name}
        Налоги: ${taxSum}
        Расходы: ${expensesPerYear}
        `      
    );
})

let maxTax = arr.reduce((prev, item) => {
    let prevTax = prev.tax * prev.budget / 100
    let itemTax = item.tax * item.budget / 100
    if(prevTax > itemTax){
        return prev
    }else {
        return item
    }
})
console.log(maxTax);

let minTax = arr.reduce((prev, item) => {
    let prevTax = prev.tax * prev.budget / 100
    let itemTax = item.tax * item.budget / 100
    if(prevTax < itemTax){
        return prev
    }else {
        return item
    }
})
console.log(minTax);

let total = arr.reduce((a,b) => {
    let taxSum = b.tax * b.budget / 100

    return a + taxSum
},0)
console.log(total);


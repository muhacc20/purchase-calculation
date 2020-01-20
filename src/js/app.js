// В массиве purchases хранятся покупки по дням.

//Напишите функции:

// Находят дату, в которую совершено максимальное количество покупок (количество, а не стоимость) - подсказку см. ниже
// Находят дату, в которую совершено максимальное количество покупок (по суммарной стоимости)
// Найти самую дорогую покупку
// Найти категорию, в которой совершено максимальное количество покупок по сумме
// Найти среднюю стоимость трат в день
// Подготовить статистику в разрезе (сумма трат в день):

{
    const purchases = [
        {
            id: 1, date: '01.01.2020', values: [
                { id: 1, amount: 1000, category: 'auto' },
                { id: 2, amount: 3000, category: 'food' },
                { id: 3, amount: 300, category: 'beauty' },
            ]
        },
        {
            id: 2, date: '03.01.2020', values: [
                { id: 4, amount: 3000, category: 'auto' },
                { id: 5, amount: 30000, category: 'travel' },
            ]
        },
        {

            id: 6, date: '04.01.2020', values: [
                { id: 6, amount: 3000, category: 'food' },
            ]
        }
    ];
    // 9.1

    const dayWithMaxPurchases = purchases.map(o => ({
        date: o.date,
        amount: o.values.length
    })).reduce((acc,curr)=>acc.amount>curr.amount?acc:curr);
    const result = dayWithMaxPurchases;
    // console.log(result);



    // 9.2



    const summarized = purchases.map(o => {
        return {
            date: o.date,
            amount: o.values.reduce((acc, curr) => acc + curr.amount, 0)
        }
    }).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)

    //console.log(summarized);



    // 9.3


    const theExpansive = purchases.map(o => o.values).flat().reduce((acc, curr) => acc.amount > curr.amount?acc:curr);

    console.log(theExpansive);


    // 9.4
    // Найти категорию, в которой совершено максимальное количество покупок по сумме

    // [] - find -> undefined
    const mapped = purchases.map(o => o.values)
        .flat()
        .reduce((acc, curr) => {
            const existent = acc.find(o => o.category === curr.category);
            if (existent === undefined) {
                acc.push({
                    category: curr.category,
                    amount: curr.amount,
                });
            } else {
                existent.amount += curr.amount;   // TODO: дальше ищете max
            }
            return acc;
        }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)


        
        ;
console.log(mapped);

    // 9.5
    // Найти среднюю стоимость трат в день
}




// 9.6


const stats = [
    {date: '01.01.2020', amount: 5300},
    {date: '03.01.2020', amount: 33000},
    {date: '04.01.2020', amount: 3000},
];
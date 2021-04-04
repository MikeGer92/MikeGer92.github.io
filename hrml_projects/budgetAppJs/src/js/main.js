// 'use strict';

let startBtn = document.getElementById('start'),
    budgetBlock = document.getElementsByClassName('budget-value')[0],
    daybudgetBlock = document.getElementsByClassName('daybudget-value')[0],
    levelBlock = document.getElementsByClassName('level-value')[0],
    expensesBlock = document.getElementsByClassName('expenses-value')[0],
    optExpensesBlock = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeBlock = document.getElementsByClassName('income-value')[0],
    monthSavingsBlock = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsBlock = document.getElementsByClassName('yearsavings-value')[0],
    inputItem = document.getElementsByClassName('expenses-item'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptExpenses = document.getElementsByTagName('button')[1],
    btnDayBudget = document.getElementsByTagName('button')[2],
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;
btnExpenses.disabled = true;
btnOptExpenses.disabled = true;
btnDayBudget.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD:', '');
    money = +prompt('Введите Ваш бюджет на месяц:', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Введите Ваш бюджет на месяц:', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetBlock.textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    btnExpenses.disabled = false;
    btnOptExpenses.disabled = false;
    btnDayBudget.disabled = false;   

});
btnExpenses.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < inputItem.length; i++) {
        let a = inputItem[i].value,
            b = inputItem[++i].value;
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('OK!');
            appData.expenses[a] = b;
            sum += + b;
        } else {
            i = i-1;
        }
    }
    expensesBlock.textContent = sum;
});
btnOptExpenses.addEventListener('click', function() {
    for (let i = 0; i <= optExpensesItem.length; i++) {
        let questionOptExpenses = optExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optExpensesBlock.textContent += appData.optionalExpenses[i] + ' ';
    }
});
btnDayBudget.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesBlock.textContent) / 30).toFixed();
        daybudgetBlock.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelBlock.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelBlock.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay >= 2000) {
            levelBlock.textContent = 'Высокий уровень достатка';
        } else {
            levelBlock.textContent = 'Произошла ошибка!';
        }
    } else {
        daybudgetBlock.textContent = 'Произошла ошибка!';
    }
});
chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeBlock.textContent = appData.income;
});
savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsBlock.textContent = appData.monthIncome.toFixed(1);
        yearSavingsBlock.textContent = appData.yearIncome;
    }
});
choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    monthSavingsBlock.textContent = appData.monthIncome.toFixed(1);
    yearSavingsBlock.textContent = appData.yearIncome;
    }
});

let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };
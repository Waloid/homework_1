let money, time;

function start() {
    money = +prompt("0Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("0Ваш бюджет на месяц?", '');    
    } 
}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {                  //Статья обязательных расходов
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
            a != '' && b != '' && a.length > 50){
            console.log ("done");
            appData.expenses[a] = b;
        }  else {
            i--;
            console.log ("Norm");
        } 
    }
}
chooseExpenses();

function detectDayBudget() {      
    appData.moneyPerDay = (appData.budjet/30).toFixed();

    alert ("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {             //Определение уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log('Малый достаток');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if(appData.moneyPerDay > 2000) {
        console.log('Большой уровень достатка');
    } else {
        console.log ('Произошла ошибка');
    }
}
detectLevel();

function checkSaving(){           //Доход  в месяц с депозита
    if (appData.saving == true) {
        let save = +prompt("Какова сумм накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSaving();

function chooseOptExpenses() {                //Статья необязательных расходов.
    for (let i = 0; i < 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов");
        appData.optionalExpenses[i] = questionOptExpenses;
    }  
}  
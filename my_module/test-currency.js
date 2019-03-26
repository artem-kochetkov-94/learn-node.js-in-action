// const currency = require('./currency');
// console.log(currency.canadianToUs(50));
// console.log(currency.USToCanadian(30));


const Currency = require('./currency');
const canadianToDollar = 0.91;
const currency = new Currency(canadianToDollar);
console.log(currency.canadianToUS(50));
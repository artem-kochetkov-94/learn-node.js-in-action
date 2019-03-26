// const canadianDollar = 0.91;

// function roundTwo(amount) {
//   return Math.round(amount * 100) / 100;
// }

// exports.canadianToUs = canadian => roundTwo(canadian * canadianDollar);
// exports.USToCanadian = us => roundTwo(us / canadianDollar);

class Currency {
  constructor(canadianToDollar) {
    this.canadianToDollar = canadianToDollar;
  }

  _roundTwo(amount) {
    return Math.round(amount * 100) / 100;
  }

  canadianToUS(canadian) {
    return this._roundTwo(canadian * this.canadianToDollar);
  }

  USToCanadian(us) {
    return this._roundTwo(us / this.canadianDollar);
  }
}

module.exports = exports = Currency;

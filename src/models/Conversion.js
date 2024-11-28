class Conversion {
    constructor(origin, destination, amount, convertedAmount, rate) {
        this.origin = origin;
        this.destination = destination;
        this.amount = amount;
        this.convertedAmount = convertedAmount;
        this.rate = rate;
    }

    toString() {
        return `Conversão: ${this.amount} ${this.origin} → ${this.convertedAmount.toFixed(2)} ${this.destination} (Taxa: ${this.rate.toFixed(6)})`;
    }
}

module.exports = Conversion;

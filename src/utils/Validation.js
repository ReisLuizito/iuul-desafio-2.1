module.exports = {
    validateCurrencyCode(code) {
        if (typeof code !== 'string' || code.length !== 3) {
            throw new Error('O código da moeda deve ter exatamente 3 caracteres.');
        }
    },

    validateAmount(amount) {
        if (isNaN(amount) || amount <= 0) {
            throw new Error('O valor deve ser maior que 0.');
        }
    },

    validateDifferentCurrencies(origin, destination) {
        if (origin === destination) {
            throw new Error('A moeda de origem deve ser diferente da moeda de destino.');
        }
    }
};

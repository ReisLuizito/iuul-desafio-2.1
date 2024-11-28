const prompt = require('prompt-sync')();
const CurrencyService = require('./services/CurrencyService');
const Validation = require('./utils/Validation');
const Conversion = require('./models/Conversion');

async function main() {
    console.log('Bem-vindo ao Conversor de Moedas!');
    
    while (true) {
        try {
            const origin = prompt('Moeda de origem (3 caracteres): ').toUpperCase();
            if (!origin) break;

            const destination = prompt('Moeda de destino (3 caracteres): ').toUpperCase();
            const amount = parseFloat(prompt('Valor a ser convertido: '));

            Validation.validateCurrencyCode(origin);
            Validation.validateCurrencyCode(destination);
            Validation.validateDifferentCurrencies(origin, destination);
            Validation.validateAmount(amount);

            const { convertedAmount, rate } = await CurrencyService.convertCurrency(origin, destination, amount);

            const conversion = new Conversion(origin, destination, amount, convertedAmount, rate);
            console.log(conversion.toString());

        } catch (error) {
            console.log('Erro:', error.message);
        }
    }

    console.log('Programa encerrado.');
}

main();

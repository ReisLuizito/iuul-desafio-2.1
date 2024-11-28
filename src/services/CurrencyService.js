const axios = require('axios');
const { BASE_URL, API_KEY } = require('../config/apiConfig');

class CurrencyService {
    static async convertCurrency(origin, destination, amount) {
        try {
            const url = `${BASE_URL}?access_key=${API_KEY}&symbols=${origin},${destination}`;
            
            const response = await axios.get(url);

            if (!response.data.success) {
                throw new Error(response.data.error.info || 'Erro na conversão.');
            }

            const rates = response.data.rates;

            if (!rates[origin] || !rates[destination]) {
                throw new Error(`As moedas ${origin} ou ${destination} não foram encontradas.`);
            }

            const rate = rates[destination] / rates[origin];
            const convertedAmount = amount * rate;

            return {
                convertedAmount,
                rate
            };
        } catch (error) {
            throw new Error(`Erro ao acessar a API: ${error.message}`);
        }
    }
}

module.exports = CurrencyService;

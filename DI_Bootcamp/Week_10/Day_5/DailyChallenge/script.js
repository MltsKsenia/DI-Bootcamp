const API_KEY = 'd77b464d4acf2ca9af9afa14';

async function fetchSupportedCurrencies() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
    const data = await response.json();
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    data.supported_codes.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency[0];
        optionFrom.textContent = `${currency[0]} - ${currency[1]}`;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency[0];
        optionTo.textContent = `${currency[0]} - ${currency[1]}`;
        toSelect.appendChild(optionTo);
    });
}

async function convert() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`);
    const data = await response.json();
    document.getElementById('result').textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
}

fetchSupportedCurrencies();

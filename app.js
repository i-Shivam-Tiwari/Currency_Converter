var BASE_URL = 'https://flagsapi.com';
var BASE_URL_RATE = 'http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

function updateFromCurr(){
    let fromCurrencySelect = document.getElementById('fromCurrencyList');
    for(const key in currencyMap){
        let fromCurrOption = document.createElement('option');
        fromCurrOption.innerText = key;
        fromCurrOption.value = currencyMap[key];
        if(key === 'USD'){
            fromCurrOption.selected = "selected"
        }
        fromCurrencySelect.append(fromCurrOption);
    }
}

function updateToCurr(){
    let toCurrencySelect = document.getElementById('toCurrencyList');
    for(const key in currencyMap){
        let toCurrOption = document.createElement('option');
        toCurrOption.innerText = key;
        toCurrOption.value = currencyMap[key];
        if(key === 'INR'){
            toCurrOption.selected = "selected"
        }
        toCurrencySelect.append(toCurrOption);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateFromCurr();
    updateToCurr();
    updateFromCountryFlag(document.getElementById('fromCurrencyList').value);
    updateToCountryFlag(document.getElementById('toCurrencyList').value);
})

document.getElementById('fromCurrencyList').addEventListener('change', () => {
    updateFromCountryFlag(document.getElementById('fromCurrencyList').value);
});

document.getElementById('toCurrencyList').addEventListener('change', () => {
    updateToCountryFlag(document.getElementById('toCurrencyList').value);
});

function updateFromCountryFlag(countryCode){
    let fromCountryFlag = document.getElementById('fromCountryFlag');
    fromCountryFlag.src=`${BASE_URL}/${countryCode}/flat/32.png`;
}

function updateToCountryFlag(countryCode){
    let toCountryFlag = document.getElementById('toCountryFlag');
    toCountryFlag.src=`${BASE_URL}/${countryCode}/flat/32.png`;
}

document.querySelector('.button').addEventListener('click', () => {
    getConversion(document.getElementById('amount').value, document.getElementById('fromCurrencyList').value, document.getElementById('toCurrencyList').value)
})

function getConversion(amount, fromCurrency, toCurrency){
    if(amount > 1){
        let rate = fetch(`${BASE_URL_RATE}/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`)
        .then((response) => {
            console.log("API Response " + response)
            return response.json
        });
        document.querySelector('.msg').innerHTML = `<h5>Converted Amount = ${rate*amount}</h5>`
    }
}
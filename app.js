function updateFromCurr(){
    let fromCurrencySelect = document.getElementById('fromCurrencyList');
    console.log("From currency list" + fromCurrencySelect)
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
    console.log("To currency list" + toCurrencySelect)
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

updateFromCurr();
updateToCurr();
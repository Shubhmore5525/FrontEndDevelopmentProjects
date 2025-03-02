const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");


for (let i = 0; i < dropList.length; i++){
    for (let currency_code in country_code){
        //selecting USD by default as FROM currency and NPR as TO currency
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "NPR" ? "selected" : "";
        }

        //crating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}
getButton.addEventListener("click", e => {
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    //if user don't enter any value or enter 0 then 
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }

    let url =`https://api.exchangerate-api.com/v4/latest/:base_currency'`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            if(result.conversion_rates[toCurrency.value]){
                let exchangeRate = result.conversion_rates[toCurrency.value];
                let totalExchangeRate =(amountVal * exchangeRate).toFixed(2);
                const exchangeRateTxt = document.querySelector(".exchange-rate");
                //exchangeRateTxt.innerText = `1 USD = 139.07 NPR`;
                exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
            }
        
    });
}
// Write your code here

const button = document.querySelector(".btn");
const inputCurr = document.getElementById("convert-from");
const inputValue = document.getElementById("convert-count");
const outputCurr = document.getElementById("convert-to");
const outputValue = document.getElementById("output")


button.addEventListener("click", (event) => {
    let fromCurrency = inputCurr.value;
    let toCurrency = outputCurr.value;
    let count = inputValue.value;

    
    fetch(`https://api.coinbase.com/v2/prices/${fromCurrency}-${toCurrency}/spot/`)
    .then(response => {
       /*  console.log(response); */
        return response.json();
        // json {"data":{"base":"LTC","currency":"EUR","amount":"86.17499999999994"}}
    })
    .then(data => {
        let rate = data.data.amount;
        let total = rate * count;
        outputValue.value = `${count} ${fromCurrency.toUpperCase()} = ${total.toFixed(2)} ${toCurrency.toUpperCase()}`;     
    })
    event.preventDefault();
});

const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-convert")



function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const realToday = 1.0





    if (selectCurrency.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

      if (selectCurrency.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)
    }

        if (selectCurrency.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / realToday)
    }






    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img") 

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/dolar.png"
    }
    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

        if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

            if (selectCurrency.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

   convertValues()

}




selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

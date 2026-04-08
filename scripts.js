const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-convert")
const selectCurrencyToConvert = document.querySelector(".select-currency-convert")



function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log("vi o valor do select currency convert" + selectCurrencyToConvert.value)

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
        }).format(inputCurrency * realToday)
    }

    if (selectCurrencyToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / realToday)
    }








    if (selectCurrencyToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency * realToday)

    }

    if (selectCurrencyToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)

    }

    if (selectCurrencyToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)

    }
    if (selectCurrencyToConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)

    }


}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyNameToConvert = document.getElementById("currency-convert")
    const currencyImgToConvert = document.querySelector(".img-currency")


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

    //auteracao do valor de conversao

    if (selectCurrencyToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dolar"
        currencyImgToConvert.src = "./assets/dolar.png"
    }
    if (selectCurrencyToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }

    if (selectCurrencyToConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImgToConvert.src = "./assets/libra.png"
    }

    if (selectCurrencyToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./assets/real.png"
    }


    convertValues()

}



selectCurrencyToConvert.addEventListener("change", changeCurrency)
selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

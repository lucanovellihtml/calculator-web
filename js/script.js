// variabili
var arrayInput = [];
var buttonValue, buttonId, operation, result;
var output = document.getElementById("paragraphOutput");


// funzione che in base al bottone cliccato, inserisce nel "sectionOutput" il valore del bottone o l'operazione
document.addEventListener('click', function (e) {

    buttonId = e.target.id;
    buttonValue = document.getElementById(e.target.id).value;

    console.log("VALUE ", buttonValue);
    console.log("ID", buttonId);

    if (buttonId != undefined && buttonValue != undefined) {
        output.innerHTML += buttonValue;
        setOperation(buttonId, output);
        //console.log("VALUE ARRAY", arrayInput);
    }
});


function setOperation(buttonId, output) {

    switch (buttonId) {

        case "buttonSubtraction":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonDivide":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonMultiplication":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonPlus":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonEqual":
            if (output.innerHTML != null) {
                arrayInput.push(output.innerHTML);
                console.log(arrayInput);
                const result = getOperation(operation, arrayInput);
                console.log("RESULT ", result.toString());
                output.innerHTML = result.toString();
            }

            //Dopo ogni risultato, pulisco il jar per le operazioni nuove
            arrayInput = [];
            break;

        case "buttonCancel":
            output.innerHTML = "";
            break;

        default:
    }

}

function getOperation(operation, arrayInput) {

    console.log("operazione" + operation);

    switch (operation) {

        case "buttonSubtraction":
            console.log("sottrazione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) - parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne - valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonDivide":
            console.log("divisione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) / parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne / valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonMultiplication":
            console.log("moltiplicazione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) * parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne * valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonPlus":
            console.log("somma");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) + parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne + valueTwo;
            }

            arrayInput.push(result);
            break;

        default:
    }

    return result;
}
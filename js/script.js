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

/*
if (valueOne != null)
    getOperation(buttonId, buttonValue);
else
    output.innerHTML = "INSERISCI SECONDO VALORE";
*/


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
            break;

        case "buttonMultiplication":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            break;

        case "buttonPlus":
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            break;

        case "buttonEqual":
            if (output.innerHTML != null) {
                arrayInput.push(output.innerHTML);
                console.log(arrayInput);
                console.log("RESULT ", getOperation(operation, arrayInput));
            }
            break;

        case "buttonCancel":
            output.innerHTML = "";
            break;

        default:
    }

}

function getOperation(operation, arrayInput) {
    console.log("sono qui");
    switch (operation) {

        case "buttonSubtraction":
            const valueOne = parseInt(arrayInput[0]);
            const valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
            result = valueOne - valueTwo;
            arrayInput.push(result);
            console.log("result", valueOne);
            break;

        case "buttonDivide":
            break;

        case "buttonMultiplication":
            break;

        case "buttonPlus":
            break;

        default:
    }

    return result;
}
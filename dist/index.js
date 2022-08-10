import { Calculator } from "./calculator.js";
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const operator = document.getElementById("operator");
const btnCalc = document.getElementById("btn-calc");
const divResult = document.getElementById("calc-result");
const result = document.getElementById("result");
const divHistoricContainer = document.getElementById("calc-historic-container");
const divHistoric = document.getElementById("historic");
const calculator = new Calculator();
function calc() {
    if ((n1.value && n2.value != '') && (operator.selectedIndex != 0)) {
        divResult.style.display = "block";
        result.innerText = calculator.calc(Number(n1.value), Number(n2.value), operator.value).toString();
        updateHistoric();
        n1.value = '';
        n2.value = '';
        operator.selectedIndex = 0;
    }
    else {
        alert("Preencha os números corretamente e selecione uma operação");
    }
}
function updateHistoric() {
    if (calculator.historic.length === 0) {
        divHistoricContainer.style.display = "none";
    }
    else {
        clearOperations();
        divHistoricContainer.style.display = "block";
        calculator.historic.forEach(operation => {
            const txtOperation = document.createElement('p');
            txtOperation.className = "card-historic";
            txtOperation.innerText = operation;
            divHistoric.appendChild(txtOperation);
        });
    }
}
function clearOperations() {
    while (divHistoric.firstChild) {
        divHistoric.removeChild(divHistoric.firstChild);
    }
}
btnCalc === null || btnCalc === void 0 ? void 0 : btnCalc.addEventListener("click", calc);

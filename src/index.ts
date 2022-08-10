import { Calculator } from "./calculator.js";

const n1 = document.getElementById("n1") as HTMLInputElement;
const n2 = document.getElementById("n2") as HTMLInputElement;
const operator = document.getElementById("operator") as HTMLSelectElement;
const btnCalc = document.getElementById("btn-calc") as HTMLInputElement;
const divResult = document.getElementById("calc-result") as HTMLDivElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const divHistoricContainer = document.getElementById("calc-historic-container") as HTMLDivElement;
const divHistoric = document.getElementById("historic") as HTMLDivElement;

const calculator = new Calculator();

function calc(): void {
  if ((n1.value && n2.value != '') && (operator.selectedIndex != 0)) {

    divResult.style.display = "block";

    result.innerText = calculator.calc(Number(n1.value), Number(n2.value), operator.value).toString();

    updateHistoric();

    n1.value = '';
    n2.value = '';
    operator.selectedIndex = 0;
  } else {
    alert("Preencha os números corretamente e selecione uma operação")
  }
}

function updateHistoric(): void {
  if (calculator.historic.length === 0) {
    divHistoricContainer.style.display = "none";
  } else {
    clearOperations();

    divHistoricContainer.style.display = "flex"

    calculator.historic.forEach(operation => {
      const txtOperation = document.createElement('p') as HTMLHeadingElement;

      txtOperation.className = "card-historic";
      txtOperation.innerText = operation;

      divHistoric.appendChild(txtOperation);
    });
  }
}

function clearOperations(): void {
  while (divHistoric.firstChild) {
    divHistoric.removeChild(divHistoric.firstChild);
  }
}

btnCalc?.addEventListener("click", calc);
export class Calculator {
    constructor() {
        this.historic = [];
    }
    calc(n1, n2, operator) {
        let result = 0;
        if (operator === "/" && n2 === 0)
            return 0;
        switch (operator) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "x":
                result = n1 * n2;
                break;
            case "/":
                result = n1 / n2;
                break;
        }
        const operacao = `${n1} ${operator} ${n2} = ${result}`;
        this.historic.push(operacao);
        return result;
    }
}

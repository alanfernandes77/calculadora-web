// Exportando um membro classe com o nome Calculadora.
export class Calculadora {
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
            case "*":
                result = n1 * n2;
                break;
            case "/":
                result = n1 / n2;
                break;
        }
        const operacao = `${n1} ${operator} ${n2}`;
        this.historic.push(operacao);
        return result;
    }
}

export class Calculator {
  historic: string[];

  constructor() {
    this.historic = [];
  }

  calc(n1: number, n2: number, operator: string): number {
    let result: number = 0;

    if (operator === "/" && n2 === 0) return 0;

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

    const operacao: string = `${n1} ${operator} ${n2} = ${result}`;

    this.historic.push(operacao);

    return result;
  }
}
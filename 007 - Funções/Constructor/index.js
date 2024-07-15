
function Calculadora() {
    this.soma = (num1 , num2) => {
        return `${num1 + num2}`;
    };
    this.subtracao = (num1 , num2) => {
        return `${num1 - num2}`;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.soma(2,2))
console.log(calculadora.subtracao(10,2))



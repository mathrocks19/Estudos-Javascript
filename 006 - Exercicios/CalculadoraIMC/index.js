/*
IMC é o indice de Massa Corpórea que é usado para calcular o peso ideal de cada pessoa.

Como calcular? 
Fórmula: IMC = Peso / (Altura * Altura)

Resultado do Calculo    | Resultado para a Pessoa
   
Abaixo de 17            | Muito abaixo do peso
Entre 17 e 18.49        | Abaixo do Peso
Entre 18.5 e 24.99      | Peso Normal
Entre 25 e 29.00        | Acima do Peso
Entre 30 e 34.99        | Obesidade I
Entre 35 e 39.99        | Obesidade II

*/

const peso = 62.5;
const altura = 1.80;
const imc = Number((peso / (altura * altura)).toFixed(2)); //toFixed retorna os numeros apos o ponto(Casas Decimais)
//console.log(typeof imc)

switch (true) {
    case imc < 17:
        console.log("Muito Abaixo do Peso")
        break;
    case imc >= 17 && imc < 18.49:
        console.log("Abaixo do Peso")
        break;
    case imc >= 18.5 && imc < 24.99:
        console.log("Peso Normal")
        break;
    case imc >= 25 && imc < 29.99:
        console.log("Acima do Peso")
        break;
    case imc >= 30 && imc < 34.99:
        console.log("Obesidade I")
        break;
    case imc >= 35 && imc < 39.99:
        console.log("Obesidade II")
        break;
    default:
        break;
}
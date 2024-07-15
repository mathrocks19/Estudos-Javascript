/*
Função é um conjunto de instruçções que executa uma tarefa ou calcula o valor.
*/

// 1 - Functions declaration
function isValidDeclaretion(){
    const soma = 1 + 2;
    if(soma === 3){
        console.log("Soma verdadeira")
        return true;
        
    }
    console.log("Soma falsa");
    return false;
    
}
console.log(isValidDeclaretion());
console.log(isValidDeclaretion());
console.log(isValidDeclaretion());

// 2 - Functions expression
const isValidExpression = function(){
    return false
} 

// 3 - Arrow Functions 
const isValidArrow = () => 2*2 
const multiplicador = 2*2
console.log(`Valor do seu resultado é: ${multiplicador}`  );
    
//console.log(isValidArrow())

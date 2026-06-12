/*console.log("Teste")

let num = 50;
var num2 = 130;
const num3 = 450;

console.log(num)
console.log(num2)
console.log(num3)

if (true){

let num4 = 420
var num5 = 180

console.log(num4)
console.log(num)
}
console.log(num5)

num = 5

console.log(num)

num2 = 6

console.log(num2)

//concatenação

console.log("valor de num", + num)
console.log("Valor de num3", + num3)
console.log(`Valor de num2 ${num2}`)
console.log('A soma dos numeros', + 15 + 8) //correto
console.log('A soma dos numeros', +(15 + 8)) //correto
console.log('A soma dos numeros' + 15 + 8) //errado
*/

//operadores matematicos
/*

+ soma
-subtração
*multiplicação
/ divisão
    % modulo(resto da divisão)
*/
/*
console.log('Soma das Variaveis', num + num2)
console.log('subtração das variaveis', num3 - num)
console.log('multiplição', num5 * 2)
console.log('divisão de valores', num2 / 5)
console.log('resto da divisão', num2 % 2)
console.log(`resto da divisão ${num3 % 3}`)
*/
/* operadores racionais

  ==
  > maior
  < menor
  >= maior igual
  <=  menor igual
  != direfente
  
*/

// operadores logicos

/*
   && E
   || OU
 
*/
/*
console.log("TESTE DE RELACIONAIS", 10 == 5)
console.log("TESTE DE RELACIONAIS", 10 != 5)
console.log("TESTE DE RELACIONAIS", 10 > 5)
console.log("TESTE DE RELACIONAIS", 10 < 5)
console.log("TESTE DE RELACIONAIS", 10 >= 5)
console.log("TESTE DE RELACIONAIS", 10 <= 5)
console.log("TESTE LOGICO", (10 > 5) && (15 < 8))
console.log("TESTE LOGICO", (10 > 5) || (15 < 8))


//TESTE LOGICO
let idade = 25;

if(idade >= 18){
    console.log('maior de dade')
}else{
    console.log('menor de idade')
}
*/
/**
 * Renovação de CNH
 * menor que 18 NÃo é permitido
 * 18 ate 49 - 10 anos
 * 50 ate 69 - 5 anos
 * 70 acima 3 anos
 */  
/*
if (idade < 18){
    console.log(`com a idade de ${idade}, não é permitido possuir CNH`)

}else if(idade < 50){
    console.log(`com a idade de ${idade}, 10 anos para renovar`)

}else if(idade < 70){
    console.log(`com a idade de ${idade}, 5 anos para renovar`)
}else{
    console.log(`com a idade de ${idade}, 3 anos para renovar`)
}
*/





//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div_dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULARIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

})
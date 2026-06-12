





























console.log("       NOVA ATIVIDADE    ")

console.log("---------------------------")
console.log("1.")

let numero1 = 5;
let numero2 = 10;
let numero3 = 15;
let resul = [numero1 + numero2 + numero3]


console.log('resuldado da soma dos tres numeros', numero1 + numero2 + numero3)
console.log('resultado da media', resul / 3)

console.log("---------------------------")

console.log("2.")

let altura = 5
let largura = 5
let m2 = altura * largura

console.log("as medidas da parede são", altura,"x", largura,"o metro quadrado da parede é", m2)

let lata_tinta = 2
let resultado = m2 / lata_tinta
console.log('resultado', resultado)
 
console.log("---------------------------")

console.log("3.")

let distancia_km = 5
let consumo_P_km =  10
let preço_Gas = 5

console.log("distancia do ponto A -> B ", distancia_km,"km")
console.log('consumo do veiculo       ',consumo_P_km,"L/KM")
console.log("preço do combustivel     ","R$", preço_Gas)

let quantidade_Gas = distancia_km * consumo_P_km
console.log("A quantidade de litros nessesarios para percorrer 5km em uma 1hr é ",quantidade_Gas,'L')

console.log("preço da viagem                ","R$",quantidade_Gas * preço_Gas)

console.log("---------------------------")

console.log("4.")

let nome = "Joao"
let nota1 = 5
let nota2 = 7
let nota3 = 9
let soma_das_notas = nota1 + nota2 + nota3
let media = soma_das_notas / 3

console.log(" a media de joao é", media)

if (media >= 5 ){
    console.log("aluno aprovado")
}else{
    console.log("aluno reprovado")
}
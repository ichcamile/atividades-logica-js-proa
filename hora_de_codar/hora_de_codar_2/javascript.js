function maiorDosNumeros() {
    let number1 = parseInt(prompt("Digite um número"));
    let number2 = parseInt(prompt("Digite outro número"));

    if (number1 > number2) {
        alert("O maior entre os números foi o " + number1);
    } else if (number2 > number1) {
        alert("O maior entre os números foi o " + number2);
    } else {
        alert("Os números são iguais!");
    }
}

function verfnumber(){
    let nombre = parseFloat(prompt("Digite o número que deseja verificar"));
    
    if (nombre > 0){
        alert("O número é positivo");
    } else if (nombre < 0 ) {
        alert("O número é negativo");
    } else if (nombre == 0){
        alert("O número é neutro");
    } else {
        alert("Not a number")
    }

}

function maiorEmTres() {
let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite um número"));
let number3 = parseInt(prompt("Digite um número"));
let maior;

    if (number1 > number2 && number1 > number3){
        maior = number1;
    } else if (number2 > number1 && number2 > number3) {
        maior = number2;
    } else {
        maior = number3;
    } alert("O número maior é " + maior);
}

function somaDosMaiores(){
let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite um número"));
let numero3 = parseInt(prompt("Digite um número"));
let maior;

if (numero1 == numero2 && numero2 == numero3 ){
    alert("Seu burro você escreveu numeros iguais!!!");

    
} else if (numero1 > numero2 && numero2 > numero3){
    maior = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2}é igual a: ${maior}`);

} else if (numero2 > numero1 && numero3 > numero2){
    maior = numero2 + numero3;
    alert(`A soma de ${numero2} e ${numero3}é igual a: ${maior}`);
    
} else if (numero3 > numero2 && numero1 > numero2)
    maior = numero1 + numero3;
    alert(`A soma de ${numero1}e ${numero3}é igual a: ${maior}`);
}





function mediaAritmetica(){
let nummer1 = parseInt(prompt("Digite um número"));
let nummer2 = parseInt(prompt("Digite um número"));
let nummer3 = parseInt(prompt("Digite um número"));
let nummer4 = parseInt(prompt("Digite um número"));
let nummer5 = parseInt(prompt("Digite um número"));
let nummer6 = parseInt(prompt("Digite um número"));
let numerosInformados = [nummer1, nummer2, nummer3, nummer4, nummer5, nummer6];

alert("Os números informados foram: " + numerosInformados.join(", "));

let media = (nummer1 + nummer2 + nummer3 + nummer4 + nummer5 + nummer6)/6; 

alert("A Média aritmética foi: " + media);

}

function exericio6(){
let firstValue = parseInt(prompt("Digite o primeiro número:"));
let secondValue = parseInt(prompt("Digite o segundo número:"));
let thirdValue = parseInt(prompt("Digite o terceiro número:"));  
let fourthValue = parseInt(prompt("Digite o quarto número:")); 
let maior;

if (firstValue > secondValue && firstValue > thirdValue && firstValue > fourthValue){
    maior = firstValue;
} else if (secondValue > firstValue && secondValue > thirdValue && secondValue > fourthValue){
    maior = secondValue;
} else if(thirdValue > firstValue && thirdValue > secondValue && thirdValue > fourthValue){
    maior = thirdValue;
} else if (fourthValue > firstValue && fourthValue > secondValue && fourthValue > thirdValue){
    maior = fourthValue;
}

alert(`O Primeiro número é: ${firstValue}, o ultimo número é: ${fourthValue} e o maior entre todos é: ${maior}`)

}


function exericio7(){
let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite um número"));
let number3 = parseInt(prompt("Digite um número"));
let number4 = parseInt(prompt("Digite um número"));
let number5 = parseInt(prompt("Digite um número"));
let number6 = parseInt(prompt("Digite um número"));
let zero = 0;

if(number1 < 72 ){
    zero = zero + number1
} if(number2 < 72 ){
    zero = zero + number2
} if(number3 < 72 ){
    zero = zero + number3
} if(number4 < 72 ){
    zero = zero + number4
} if(number5 < 72 ){
    zero = zero + number5
} if(number6 < 72 ){
    zero = zero + number6
}
 
alert(zero);

}


function exericio8(){
let number1 = parseInt(prompt("Digite um número:"));
let number2 = parseInt(prompt("Digite um número:"));
let number3 = parseInt(prompt("Digite um número:"));
let number4 = parseInt(prompt("Digite um número:"));
let media = 0;

if (number1 > 0 && number1 <= 10 && number2 > 0 && number2 <= 10 && number3 > 0 && number3 <= 10 && number4 > 0 && number4 <= 10){

media = (number1 + number2 + number3 + number4)/4

if (media > 5){
 alert("Você passou no teste!!")
} 
} else{
alert("Tente novamente")
}
}

function exericio9(){
let ano_de_nascimento = parseInt(prompt("Digite seu ano de nascimento"));

if ((2023 - ano_de_nascimento) >= 18){
alert("Você pode votar esse ano");
} else{
alert("Menor de idade");
}
}

function exericio10(){
let altura = parseFloat(prompt("Digite a sua altura!"));
let genero = prompt("Qual é o seu gênero (entre feminino e masculino)");
let peso = 0;

if (genero == "feminino"){
peso = ((62.1 * altura) - 44.7);
alert(`O seu peso ideal é ${peso}`);
} else {
peso = ((72.7 * altura) - 58);
alert(`O seu peso ideal é ${peso}`);
}



}

function exericio11(){
let primeiroValor = parseInt(prompt("Digite um número"));
let segundoValor = parseInt(prompt("Digite um número"));
let operacao = prompt(`Digite a operação desejada entre "adição", "subtração", "divisão" ou "multiplicação".`);
let resultado = 0;

if (operacao == "adição"){
    resultado = primeiroValor + segundoValor;
    alert( `${primeiroValor} + ${segundoValor} `);
    alert( `O resultado é: ${resultado}`);
} else if (operacao == "subtração"){
    resultado = primeiroValor - segundoValor;
    alert( `${primeiroValor} - ${segundoValor} `);
    alert( `O resultado é: ${resultado}`);

} else if (operacao == "divisão"){
    resultado = primeiroValor / segundoValor;
    alert( `${primeiroValor} / ${segundoValor} `);
    alert( `O resultado é: ${resultado}`); 
} else if (operacao == "multiplicação"){
    resultado = primeiroValor * segundoValor;
    alert( `${primeiroValor} * ${segundoValor} `);
    alert( `O resultado é: ${resultado}`);}

}
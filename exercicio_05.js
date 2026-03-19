function numeroParImpar(){


let numero = 0;

numero = (Number(prompt("Digite um número")));

if (numero % 2 == 0){
    alert("O número é par");
} else {
    alert("O número é ímpar");
}

if (numero % 2 == 0){
    numero += 1
    alert("O próximo número ímpar é: " + numero);
} else {
    numero += 1
    alert("O próximo número par é: " + numero);
}

}
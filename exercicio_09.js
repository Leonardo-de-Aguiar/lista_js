function ordenacaoNumeros(){

    let numero1 = prompt("Digite o primeiro número: ");
    let numero2 = prompt("Digite o segundo número: ");

    if (numero1 >> numero2){
        alert ("Números ordenados do maior para o menor: "+ (numero1) + (numero2));
    } else if (numero2 >> numero1){
        alert ("Números ordenados do maior para o menor: "+ (numero2) + (numero1));
    }

}
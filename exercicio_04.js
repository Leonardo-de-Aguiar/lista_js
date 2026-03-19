
function ordenacaoValores(){

let valores = [];

for(let i = 0; i<4; i++){
    valores.push(Number(prompt("Digite o valor para ser ordenado")));

}

valores.sort(function(a,b){return b - a});

console.log (valores);

alert("Ordem decrescente: " + valores);



}


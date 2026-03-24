function verificadorVogalConsoante (){


let letra = ["a","e","i","o","u"];
let letraescolhida;

letraescolhida = prompt("Digite uma letra: ");

if (
    letraescolhida == "a"||
    letraescolhida == "e"||
    letraescolhida == "i"||
    letraescolhida == "o"||
    letraescolhida == "u"
){
    alert("A letra é uma vogal");
} else {
    alert("A letra é uma consoante");
}






}
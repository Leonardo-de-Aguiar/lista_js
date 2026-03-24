function picoleteria (){

let codigo

codigo = prompt("Insira o código do produto, escolha uma letra de A até I");

if (codigo == "a"){
    alert("Chocolate: R$1,50")
}
else if (codigo == "b"){
    alert("Morango: R$2,50")
}
else if (codigo == "c"){
    alert("Creme: R$2,50")
}
else if (codigo == "d"){
    alert("Manga: R$3,20")
}
else if (codigo == "e"){
    alert("Melancia: R$3,40")
}
else if (codigo == "f"){
    alert("Vanilla Ice: R$3,00")
}
else if (codigo == "g"){
    alert("Céu Azul: R$3,60")
}
else if (codigo == "h"){
    alert("Brownie: R$4,00")
}
else if (codigo == "i"){
    alert("Hawaiano: R$5,00")
} else {
    alert("Código invalido")
}

}

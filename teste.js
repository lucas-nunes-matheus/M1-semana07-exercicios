// Algoritmo de verificação de obrigatoriedade do voto

var idade = prompt("Digite a sua idade: ");
if (idade<16){
    console.log("Não pode votar!");
} 
else if (idade<18){
    console.log("Voto facultativo!")
} // Como o laço anterior verifica se "idade<16", o próximo laço só precisa verificar se "idade<18", pois se a segunda condição está sendo testada, obrigatoriamente, idade>16.
else {
    console.log("Voto obrigatório")
}
//Segundo projeto plataforma DIO
//Curso: Lógica de Programação.
//Nome do projeto: Calculadora de Partidas Rankeadas
// Criação de um algorítmo para posicionar uma personagem, levando em consideração derrotas 
// e vitórias.
//É vital a criação de uma função para definir o gênero da personagem
//Dinamisa o retorno, na saída, se é um herói ou herína
function define (gender) {
    let textDefine = "";
    switch (gender) {
        case "F":
            textDefine = "A heroína"            
            break;
        default:
            textDefine = "O heroi"
            break;
    }
    return textDefine
}
//Criação da função para verificar o nível da personagem
function score (valueA, valueB) 
{
    let ranking = valueA - valueB;
    let level = "";
    if (ranking <= 10){
        level = "Ferro";
    }
    else if ( ranking > 10 && ranking <= 20){
        level = "Bronze";
    }
    else if (ranking > 20 && ranking <= 50){
        level = "Prata"
    }
    else if (ranking > 50 && ranking <= 80){
        level = "Ouro"
    }
    else if (ranking > 80 && ranking <= 90){
        level = "Diamante"
    }
    else if (ranking > 90 && ranking <= 100){
        level = "Lendário"
    }
    else if (ranking > 100){
        level = "Imortal"
    }
    return level
}
//Criação da função para verificar a pontuação da personagem
function result(valueA, valueB) {
    return  valueA - valueB;
}
let numberVictory = 120;
let numberDefeat = 20;
let nameCharacter = "HolyAngemon";
let nameGender = "M";
let part1 = score(numberVictory,numberDefeat);
let part2 = result(numberVictory,numberDefeat);
let part3 = define(nameGender);
let text = `${part3} tem saldo de ${part2} pontos e está no nível ${part1}`
console.log(text)
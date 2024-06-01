function define (gender) {
    let text = "";
    switch (gender) {
        case "F":
            text = "A Heroína"            
            break;
        default:
            text = "O heroi"
            break;
    }
    console.log(text)
}
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
    console.log(level)
}
function result(valueA, valueB) {
    let ranking = valueA - valueB;
    console.log(ranking)
}
let numberVictory = 50;
let numberDefeat = 20;
let nameGender = "M"
score(numberVictory,numberDefeat)
result(numberVictory,numberDefeat)
define(nameGender)
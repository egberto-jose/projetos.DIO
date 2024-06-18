class adventure {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toWrite(type){
        let textType = `Jogador: ${ this.name }     Idade: ${ this.age } anos`
        textType += "\n------------------------------------------------------------------------------"
        textType += "\n**Destruição do maligno Magnus:"
        textType += "\nPara destruir a maldade, "
        switch (type) {
            case "Mago":
                textType += "o grande Mago atacou usando Magia Ancestral.";
                break;
            case "Guerreiro":
                textType += "o grande Guerreiro atacou usando a Espada Milenar.";
                break;
            case "Monge":
                textType += "o grande Monge atacou usando Artes marciais.";
                break;
            default:
                textType += "o grande Ninja atacou usando o Poderoso Shuriken.";
        }
        textType += "\nO maligno Magnus foi destruído e paz voltou a reinar!"
        console.log(textType)
    }
    }
let fight = new adventure ("Egberto",33);
fight.toWrite("Guerreiro")
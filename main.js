const { Container } = require("./Container");
const { Squeezer } = require("./Squeezer");
const Fruit = require("./Fruit");
const Apple = require("./Apple");

let juiceMakerInstance = null;

class JuiceMaker{
    constructor(containerCapacity){
        if(juiceMakerInstance){
            return juiceMakerInstance;
        }

        this.container = new Container(containerCapacity);
        this.squeezer = new Squeezer();

        juiceMakerInstance = this;
    }

    addFruit(fruit){
        if(Math.random() > 0.7){
            console.log("Fruit adding failed");
            return;
        }
        if(fruit.wormy){
            console.log("Can't accept wormy fruit");
            return;
        }
        if(this.container.freeSpace >= fruit.weight){
            if(fruit instanceof Fruit){
                this.container.addFruit(fruit);
                console.log("Fruit added successfully");
                return;
            } else {
                console.log("Please insert a valid fruit");
                return;
            }
        } else {
            console.log("Not enough space!")
            return "FULL";
        }
    }

    startSqueezing(){
        return this.squeezer.start(this.container);
    }
}


function addApplesAndSqueeze(juiceMaker){
    let full = false;
    while(!full){
        const apple = new Apple();
        let result = juiceMaker.addFruit(apple);
        if(result === "FULL"){
            full = true;
        }
    }

    return juiceMaker.startSqueezing();
}

function juiceMakerProgram(){
    const juiceMaker = new JuiceMaker(30);
    let totalAmountOfJuice = 0;

    for(let i = 0; i < 100; i++){
        totalAmountOfJuice += addApplesAndSqueeze(juiceMaker);
    }

    console.log(`Total amount of juice created: ${totalAmountOfJuice.toFixed(2)} L`);
}

//Nije mi bas bilo najjasnije da li treba sokovnik da bude programiran da ubacuje i cedi sto puta ili to treba nas program da radi.
//Ova druga varijanta mi je bila logicnija pa sam tako i uradio
//Sto se tice premasen kapacitet exceptiona, te stvari sam hendlovao unutar samih metoda tako da mislim da nije potrebno dodatno raditi.
//Da sam radio na taj nacin koristio bih throw new Error.

juiceMakerProgram()
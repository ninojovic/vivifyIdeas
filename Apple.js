const Fruit = require("./Fruit");

//Super i constructor su prazni jer jabuka vec ima unapred odredjeno ime i tezinu pa nema razloga da to dodajemo pri istanciranju.
//Razlog zasto uopste radimo nasledjivanje je da ukoliko nakndadno dodamo neku metodu vocu, tu metodu nasledi i jabuka.
module.exports = class Apple extends Fruit{
    constructor(){
        super();
        this.name = "Apple";
        this.weight = (() => parseInt(Math.random() * (4 - 1) + 1))();
        this.wormy = (() => Math.random() > 0.2 ? false : true)();
    }
}
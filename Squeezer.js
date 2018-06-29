class Squeezer{
    start(container){
        if(container.storage.length === 0){
            console.log("Container empty!");
            return;
        }
        if(Math.random > 0.3){
            console.log("Squeezing failed!");
            return;
        }
        let juiceCreated = container.storage.reduce(((sum, fruit) => sum + (fruit.weight/2.5)),0).toFixed(1);
        console.log(`Amount of juice created: ${juiceCreated}L`);
        container.storage = [];
        return parseFloat(juiceCreated);
    }
}

module.exports = { Squeezer };
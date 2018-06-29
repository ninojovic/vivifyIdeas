class Container{
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
    }

    addFruit(fruit){
        this.storage.push(fruit);
    }

    get freeSpace(){
        if(this.storage.length !== 0){
            return this.capacity - this.storage.reduce(((sum, fruit) => sum + fruit.weight),0);
        }
        return this.capacity;
    }

    get fruitAmount(){
        return this.storage.length;
    }
}

module.exports = { Container }
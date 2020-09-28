import Animal from './animal';

class Lion extends Animal {
    constructor(name,height,color){
        super(name,height);
        this.color = color;
    }

    hello(){
        console.log(`Hi i'm ${this.name} with ${this.color} color from Birch Acres!`);
    }
}

let son = new Lion('Simba',2.8,'Brown');

son.hello();
class Animal{
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }

    hello(){
        console.log(`Hello, My name is ${this.name} with height ${this.height} from the animal kingdom`);
    }
}

let king = new Animal("Jack",4.5);

king.hello();
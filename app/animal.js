class Animal{
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }

    hello(){
        console.log(`Hello, My name is ${this.name} with height ${this.height} from the animal kingdom`);
    }
}

export default Animal;
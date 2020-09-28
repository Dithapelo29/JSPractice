function Wizard(name,house,pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `Hi!! my name is ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;
Wizard.prototype.info = function(){
    return `Hi i am ${this.pet} named ${this.pet_name}`;
}
let harry = new Wizard('Jack','Sheffield','Dog');

harry.pet_name = "Sibi";

console.log(harry.info());
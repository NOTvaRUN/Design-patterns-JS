// There is one class that is used to handle instantiation of objects based on the input provided to that class.
// so instead of having multiple classes that is being instantiated, we do all of that in one class and based on the type the user needs we return that class.


class Planets{
    constructor(name){
        this.name = name;
    }

    getName(){
        return `you have reached ${this.name}`;
    }
}


// build the specific subclasses that extend Plantes
class Habitable extends Planets{
    constructor(name){
        super(name);
    }

    getName(){
        return `welcome to ${this.name}`;
    }
}

class Uninhabitable extends Planets{
    constructor(name){
        super(name);
    }

    getName(){
        return `welcome to ${this.name}, Hard to breathe right??`;
    }
}


// Factory Method implemented here..
class PlanetGenerator {
    createPlanet(type, name){
        switch (type){
            case 'habitable':
                return new Habitable(name);
            case 'uninhabitable':
                return new Uninhabitable(name);
            default:
                throw new Error("Unknown planet type");
        }
    }
}

// Usage ---
const factory = new PlanetGenerator();
const habitablePlanet = factory.createPlanet('habitable', 'earth');
console.log(habitablePlanet.getName());
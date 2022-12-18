class AnimalKingdom {
  // @dev this class is an Abstract Class (The Abstraction Principle is used)
  constructor() {
    if (this.constructor == AnimalKingdom) {
      throw new Error("Oops !! you cannot implement the base Class");
    }
  }
  // @student
  // Encapsulation Principle
  #animals() {
    return "These are classes of animals are Antropoda, Fish, Amphibia, Reptiles, AVES, Mammals";
  }
  #backbone() {
    return "Animal with Backbone";
  }
  #withoutbackbone() {
    return "Animal without Backbone";
  }
  #coldBlooded() {
    return "Animal is Cold Blooded";
  }
  #warmBlooded() {
    return "Animal is a Warm Blooded";
  }

  warmBloodedExamples() {
    return ["AVES, Mammals"];
  }
  coldBloodedExamples() {
    return ["Antropoda, Fish, Amphibia, Reptiles"];
  }
  // @dev view or display all private method
  displayanimals() {
    this.#animals;
  }
  displaywithbackbone() {
    this.#backbone;
  }
  displaycoldBlooded() {
    this.#coldBlooded;
  }
  displaywarmBlooded() {
    this.#warmBlooded;
  }
  displaywithoutbackbone() {
    this.#withoutbackbone;
  }
}
// @dev the following sub classes will inherit from the main or base class
// @dev Inheritance Principle
class Antropoda extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaycoldBlooded() {
    return `${this.name} is Cold Blooded`;
  }
  displaywithoutbackbone(name) {
    return `${this.name} is without a backbone`;
  }
}
class Fish extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaycoldBlooded() {
    return `${this.name} is Cold Blooded`;
  }
  displaywithbackbone(name) {
    return `${this.name} is with a backbone`;
  }
}
class Amphibia extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaycoldBlooded() {
    return `${this.name} is Cold Blooded`;
  }
  displaywithoutbackbone() {
    return `${this.name} is without a backbone`;
  }
}
class Reptiles extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaycoldBlooded() {
    return `${this.name} is Cold Blooded`;
  }
  displaywithbackbone() {
    return `${this.name} has with a backbone`;
  }
}
class AVES extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaywarmBlooded() {
    return `${this.name} is Warm Blooded`;
  }
  displaywithbackbone() {
    return `${this.name} has with a backbone`;
  }
}
class Mammals extends AnimalKingdom {
  constructor(name) {
    super();
    this.name = name;
  }

  // @dev Polymorphism Principle

  displaywarmBlooded() {
    return `${this.name} is Warm Blooded Animal`;
  }
  displaywithbackbone() {
    return `${this.name} has a backbone`;
  }
}

console.log("Animal Kingdom");

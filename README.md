# Animal Kingdom Model

## Description
## This is a simple Classification for Kingdom Animalia with Object Oriented in Javescript.

## The simple model is built on the 4 principles of Object Oriented Program in Javascript.
- ### Inheritance
- ### Abstraction
- ### Polymophism
- ### Encapsulation

## Reflection of the principles
- ### The AnimalKingdom Class was Created with a constructor and different methods and properties.
- ### The AnimalKingdom Class is an abstract class. Hence it represents the (ABSTRACTION). The AnimalKingdom Class cannot be called directly but can be inherited.
- ### Some of the methods are encapsulated with the private key. Methods like animals(), backbone(), coldBlooded() and warmBlooded() are all private and can be called be public visibility function within the class (ENCAPSULATION).
- ### The six class of animals, Antropoda, Fish, Amphibia, Reptiles, AVES and Mammals all inherited the AnimalKingdom class. (INHERITANCE).
- ### Lastly, the subclasses inherited  and override two methods from the base class, AnimalKingdom. (POLYMORPHISM).


# How It Works

- ### Instantiate a class with the name of the animal in that classification. *Note: Base Class: AnimalKingdom. SubClass:  Antropoda, Fish, Amphibia, Reptiles, AVES and Mammals.* Example1: const reptiles = new Reptiles("Snake");
- ### Call the methods in the subclass (Example2: reptiles.displaycoldBlooded().
)

## Below are class and Methods

### Amphibia: displaycoldBlooded(), displaywithbackbone().
___

### Reptiles:  displaycoldBlooded(), displaywithbackbone()
___

### AVES: displaywarmBlooded(), displaywithbackbone()
___

### Fish: displaycoldBlooded(), displaywithbackbone()
___

### Mammals: displaywarmBlooded(), displaywithbackbone()
___




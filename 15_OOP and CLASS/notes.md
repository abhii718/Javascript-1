## OOP

## Object

-collection of properties and methods
-toLowerCase

## Why use OOP

## Parts of OOp

Object literal

```let person = {
    name: "John",
   age: 30,
   sayHello: function() {
    console.log(`Hello, my name  is ${this.name}.`);
   }
   };
```

-Constructor function

```let person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```

-Prototypes

```Person.prototype.greet = function() {
  console.log("Greetings!");
};
```

-Classes

```class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
```

-Instances (new, this)
```Instances are individual objects created from a constructor or class.
The new keyword is used to create instances.
The this keyword refers to the current instance of the object.
```


## Four Pillars of OOP:
Abstraction:

```Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors.
Encapsulation:

Encapsulation involves bundling the data (properties) and the methods that operate on the data into a single unit (class or object).
It helps in hiding the internal details and exposing only what is necessary.
Inheritance:

Inheritance allows a new class (subclass/derived class) to inherit properties and behaviors from an existing class (superclass/base class).
It promotes code reusability.
Polymorphism:

Polymorphism allows objects of different types to be treated as objects of a common type.
It enables the same method name to be used for different types of objects, and the appropriate method is called based on the object's type.
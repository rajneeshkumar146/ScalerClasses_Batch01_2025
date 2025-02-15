## Native object and Host objcet
# Host objects
Objects that are provided by the environment are known as host objects. Examples of host objects in the browser are window, document, local storage, etc. Examples of host objects in nodejs are global, os, process, etc. Host objects are dependent on the environment.

# Native objects
Objects that are provided by the language are known as native objects. Examples of native objects are date, JSON, etc.

## Inheritance : High Level Intro
- Inheritance is related to OOPS. All OOPS languages are Java-based.
- Because we need a class to create an object just like for creating a house we need the architecture of the house.
- Suppose we have architecture having 1 door and 2 rooms. Now we want to create a new house with this architecture along with it we also want a swimming pool.
- So we will inherit all the properties of the old architecture and add a swimming pool to it.
- Then we will create a house with that new architecture.


## Prototypal OOPS
- We have a base object and let us take an example we have a base model of a Tata company that works as a prototype.
- Now a child object inherits properties from a base object just like the mescom car is made by inheriting properties from Tata company with one new feature.
- Now another object is created by inheriting properties from the child object which becomes the grandchildren of the base object, just like safari is made by inheriting properties from mexcom by adding a new feature of 8 seater.

Prototypal OOPS is we will create a base object, and directly inherit properties from it to create a new object.

But in Java, we have to make a class then another class inherit the properties of that class, and then we will create an object but in Prototypal OOPS we will directly inherit from the object.
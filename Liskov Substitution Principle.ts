/*
- Liskov Substitution Principle
Functions that use pointers of references to base classes must be able to use objects of derived classes without knowing it.
In other words, client code that uses an abstract type shouldn't have to modify its behavior depending on the derived type it receives.
*/

class Rectangle {
  constructor(private width: number, private length: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setLength(length: number) {
    this.length = length;
  }

  public get area(): number {
    return this.width * this.length;
  }
}
class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  // Override setWidth to ensure all sides are the same
  public setWidth(width: number) {
    super.setWidth(width);
    super.setHeight(width);
  }

  // Override setHeight to ensure all sides are the same
  public setHeight(height: number) {
    super.setWidth(height);
    super.setHeight(height);
  }
}

/*
Square behaves differently than Rectangle and cannot be substituted for it. 
Changing the height and width of a square behaves differently from changing the height and width of a rectangle.

It doesn't seem to make sense to differentiate between a square's height and width. 
A Rectangle is not an appropriate abstraction for Square.

We can reach an LSP-compliant solution by removing the parent/child relationship between Rectangle and Square 
and introducing a new Shape interface to bundle up the shared methods and properties.

This approach promotes composition over inheritance. Eliminating or reducing inheritance within our designs 
is the most effective way to avoid LSP violations.
*/


interface Shape {
  area: number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setHeight(height: number) {
    this.height = height;
  }

  public get area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {

  constructor(private size: number) {}

  public setSize(size: number) {
    this.size = size;
  }

  public get area(): number {
    return this.size ** 2;
  }
}

/*
clients of Shape don't have to make incorrect assumptions about the behavior of setter methods. 
If a client needs to change the property of a shape, it has to work with a concrete reference to the class.
*/
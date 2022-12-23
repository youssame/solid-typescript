/*
- Open-Close Principle (OCP)
	Software entities … should be open for extension, but closed for modification.
	Instead of overriding your class, better extend it.
*/

// Example
class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class AreaCalculator {
  public calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  public calculateCircleArea(circle: Circle): number {
    return Math.PI * (circle.radius * circle.radius);
  }
}
/*
Problem: Imagine we would add another shape later, which means we need to create a new class. 
	In that case, we would also need to modify the AreaCalculator class to calculate 
	the area of the new class. That’s against the Open-Close Principle.
*/

/*
Solution: To follow the Open-Close Principle, we add an interface called Shape, so every shape class 
	(Rectangle, Circle, etc.) can depend on this interface by implementing it. 
	In this way, we can simplify the AreaCalculator class to just one function, which takes an argument, 
	and this argument is based on the interface we just created.
*/
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}

class AreaCalculator {
  public calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
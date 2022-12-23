/*
- Interface Segregation Principle
Clients should not be forced to depend upon interfaces that they don't use.

In other words, declaring methods on an interface that some clients don't require pollutes the interface and leads to a bloated interface.
*/

interface BeverageOrderInterface {
  orderCoffee(size: string, instructions: string): void;
  orderTea(size: string, instructions: string): void;
  orderWater(size: string): void;
  orderSoda(size: string, flavour: string): void;
}
class HotBeverageOrderService implements BeverageOrderInterface {
  orderCoffee(size: string, instructions: string): void {
    console.log("Coffee ordered!");
  }

  orderTea(size: string, instructions: string): void {
    console.log("Tea ordered!");
  }

  orderWater(size: string): void {
    throw new Error("Not implemented for hot beverages!"); // ❌ Forced to throw an error here
  }

  orderSoda(size: string, flavour: string): void {
    throw new Error("Not implemented for hot beverages!"); // ❌ Forced to throw an error here
  }
}
// To summarise, violating ISP causes confusion and added work for developers.

/*
The most direct approach to refactoring this example into an ISP-compliant one is to break the bloated BeverageOrderInterface 
into separate, more focused interfaces, also referred to as role interfaces.
*/
interface HotBeverageOrderInterface {
  orderCoffee(size: string, instructions: string): void;
  orderTea(size: string, instructions: string): void;
}

interface ColdBeverageOrderInterface {
  orderWater(size: string): void;
  orderSoda(size: string, flavour: string): void;
}

/*
In scenarios where we're dealing with interfaces or abstractions as external dependencies that we can't modify, 
we can make use of the adapter pattern to adapt BeverageOrderInterface into one of the target interfaces our clients expect.

With this technique, we abstract away the unnecessary methods we don't need to expose as part of the HotBeverageOrderInterface.
*/
class HotBeverageOrderServiceAdapter implements HotBeverageOrderInterface {
  
  private readonly adaptee: BeverageOrderInterface;

  constructor(adaptee: BeverageOrderInterface) {
    this.adaptee = adaptee;
  }

  orderCoffee(size: string, instructions: string): void {
    this.adaptee.orderCoffee(size, instructions);
  }

  orderTea(size: string, instructions: string): void {
    this.adaptee.orderTea(size, instructions);
  }
}

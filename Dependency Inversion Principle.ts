/*
- Dependency Inversion Principle
High-level modules should not depend on low-level modules. Both should depend on abstractions. *
Abstractions should not depend on details. Details should depend on abstractions.
*/
class TerminateEmployeeHandler {
  private readonly db: Knex;

  constructor() {
    // ❌ Low-level database infra details embedded in high-level domain logic
    this.db = knex({
      client: "pg",
      connection: {
        host: "10.42.103.14",
        database: "emp",
        user: "root",
        password: "password",
      },
    });
  }
}

/*
We can refactor toward a DIP-compliant design by abstracting away the low-level database operations via the EmployeeRepository interface. 
The interface is clean and free of any technical details or framework references. 🧹
*/
interface EmployeeRepository {
  get(id: number): Promise<Employee>;
  update(employee: Employee): Promise<boolean>;
}
  
/*
DIP allows us to cleanly decouple and shield important aspects of our code from low-lever, highly volatile details that make maintenance 
and testing of the important bits harder and more time-consuming.
*/